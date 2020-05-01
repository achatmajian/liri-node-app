# liri-node-app

LIRI is a Language Interpretation and Recognition Interface using the command line to take in parameters and return data about movies, music, and concerts!

# Setup

1. Clone the repository

2. Run npm install, and the following packages should be installed:

- Bands In Town API
- Node-Spotify-API
- OMDB API

3. Create a .env file in the same directory as the rest of the files. In the .env file should be: 

    '# Spotify API keys'


    'SPOTIFY_ID=your-spotify-ID-here'

    'SPOTIFY_SECRET=your-spotify-secret-here'



* concert-this: 
- Example: `node liri.js concert-this Jay-Z`

* spotify-this-song: 
- Example: `node liri.js spotify-this-song Hard Knock Life`

* movie-this: 
- Example: `node liri.js movie-this Goodfellas`

* do-what-it-says: 
- Example: `node liri.js do-what-it-says`

# Commands and Returned Data

* `concert-this` will show:

Artist, Venue, Location, Event Date

* `spotify-this-song` will show:

Artist, Song Name, Link, Album

* `movie-this` will show:

Movie Title, Release Date, Rating, Country of Release, Language, Plot, Actors

* `do-what-it-says` will show:

The text inside the file random.txt, using it to call the command with the given parameter.

# Screenshot
![Screenshot](https://i.ibb.co/C9Bns1k/liri-screenshot.png)
