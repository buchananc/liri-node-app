# Liri Node App
## About
LIRI is like iPhone's SIRI. However, while SIRI is a Speech Interpretation and Recognition Interface, LIRI is a Language Interpretation and Recognition Interface. LIRI is a command line node app that takes in parameters and returns data based on one of four commands:

*`my-tweets`

*`spotify-this-song`

*`movie-this`

*`do-what-it-says`

## How Each Command Works
1. `node liri.js my-tweets`

  * Displays my last 20 tweets and when they were created in terminal/bash window.

2. `node liri.js spotify-this-song 'song name'`

  * Shows the following information about the song in terminal/bash window.
    * Artist(s)
    * The song's name
    * A preview link of the song from Spotify
    * The album that the song is from

  * Or if no song is passed through, it will default to
    *"Florescent Adolescent" by Arctic Monkeys

3. `node liri.js movie-this 'movie name'`

  * Shows the following information in terminal/bash.

    * Title of the movie.
    * Year the movie came out.
    * IMDB Rating of the movie.
    * Country where the movie was produced.
    * Language of the movie.
    * Plot of the movie.
    * Actors in the movie.
    * Rotten Tomatoes Rating.
    * Rotten Tomatoes URL.

  * Or if no movie is passed through, it will default to "Mr. Nobody"

4. `node liri.js do-what-it-says`

  * Takes the text from random.txt and runs the song through spotify-this-song command

## NPM's Used:
Node-Spotify-Api: https://www.npmjs.com/package/node-spotify-api

Twitter for Node.js: https://www.npmjs.com/package/twitter

Request: https://www.npmjs.com/package/request

DotEnv: https://www.npmjs.com/package/dotenv
