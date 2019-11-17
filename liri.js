require("dotenv").config();

var keys = require("./keys.js");
var fs = require("fs");

var command = process.argv[2];
var query = process.argv[3];

switch (command){
    //this will call the spotify function
    case "spotify-this-song":
        spotifyCall(query);
        break;
    //this will call the bandsintown function
    case "concert-this":
        concertThis(query);
        break;
    //this will call the omdb function
    case "movie-this":
        movieThis(query);
        break;
    //this will execute "do what it says"
    case "do-what-it-says":
        fs.readFile("random.txt", "utf8", function (error, data) {
          var data = data.split(",");
          var thatWay = data[1];
          if (error) {
              return console.log(error);
          }
        break;
}

//Create function for "concert this"
//Bands in town
var bandsintown = require("bandsintown");
 
function concertThis(artist) {
  var bandsQueryUrl = "https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp";
  
  axios.get(bandsQueryUrl).then(
      function (response) {
          console.log("Upcoming Events" + 
          "\nArtist: " + artist + 
          "\nVenue: " + response.data[0].venue.name +
          "\nLocation: " + response.data[0].venue.country + 
          "\nDate: " + response.data[0].datatime);
      });
      json = JSON.stringify(json, undefined, 2);
}

//Create function for "spotify-this-song"
//Spotify
var Spotify = require("node-spotify-api");
var spotify = new Spotify(keys.spotify);
 
function spotifyCall(songName) {
  spotify.search({ type: "track", query: songName }, function (err, data) {
      if (err) {
          return console.log("Error occurred: " + err);
      }
      console.log("\n_Track Info_" + 
      "\nArtist: " + data.tracks.items[0].artists[0].name + 
      "\nSong: " + data.tracks.items[0].name + 
      "\nLink: " + data.tracks.items[0].external_urls.spotify + 
      "\nAlbum: " + data.tracks.items[0].album.name)
  });
  json = JSON.stringify(json, undefined, 2);
}


//Create function for "movie-this"
//OMDB
var axios = require("axios");

function movieThis(movieName) {
  if (!movieName) {
      movieName = "Mr. Nobody";
  }
  var queryUrl = "http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&apikey=e1be5eb5";

  axios.get(queryUrl).then(
      function (response) {
          if (!movieName) {
              movieName = "Mr. Nobody";
          console.log("\n_Movie Info_" + 
          "\nTitle: " + response.data.Title + 
          "\nRelease Year: " + response.data.Year + 
          "\nRating: " + response.data.Rated + 
          "\nRelease Country: " + response.data.Country + 
          "\nLanguage: " + response.data.Language + 
          "\nPlot: " + response.data.Plot + 
          "\nActors: " + response.data.Actors);
      }
      json = JSON.stringify(json, undefined, 2);
    })
  };