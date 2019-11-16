require("dotenv").config();

var keys = require("./keys.js");
var spotify = new Spotify(keys.spotify);

var command = process.argv[2];

switch (command){
    case "spotify":
        console.log("this will call the function");
        break;
    case "bandsintown":
        console.log("this will call bandsintown function");
        break;
    case "omdb":
        console.log("this will call omdb function");
        break;
    case "do-what-it-says":
        console.log("this will call do-what-it-says function");
        break;
};

//Create function for "concert this"
//Bands in town


//Create function for "spotify-this-song"
//Spotify
var Spotify = require('node-spotify-api');
 
var spotify = new Spotify({
  id: keys.spotify.id,
  secret: keys.spotify.secret,
});
 
spotify.search({ type: 'track', query: 'All the Small Things' }, function(err, data) {
  if (err) {
    return console.log('Error occurred: ' + err);
  }
  else {
    console.log(JSON.stringify(data[0], null, 2));
  }
 
console.log(data); 
});

//Create function for "movie-this"
//OMDB
var omdb = require('omdb');
 
omdb.search('saw', function(err, movies) {
    if(err) {
        return console.error(err);
    }
 
    if(movies.length < 1) {
        return console.log('No movies were found!');
    }
 
    movies.forEach(function(movie) {
        console.log('%s (%d)', movie.title, movie.year);
    });
 
    // Saw (2004)
    // Saw II (2005)
    // Saw III (2006)
    // Saw IV (2007)
    // ...
});

//Create function for "do-what-it-says"