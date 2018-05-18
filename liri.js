require("dotenv").config();

//   Make it so liri.js can take in one of the following commands:
//       * `my-tweets`
//       * `spotify-this-song`
//       * `spotify-this-song`
//       * `movie-this`
//       * `do-what-it-says`

// var argOne = process.argv[2];
// var argTwo = process.argv[3];
// var argThree = process.argv[4];
// var value = "";
////////////////////////////////////////////////////////////////////////////////////////////
//NPM MODULES TO IMPORT
////////////////////////////////////////////////////////////////////////////////////////////
var request = require('request');
var Twitter = require('twitter');
var Spotify = require('node-spotify-api');
var fs = require("fs"); //reads and writes files
var keys = require("./keys");
var client = new Twitter(keys.twitter); //Twitter call with Twitter keys passing through
var spotify = new Spotify(keys.spotify);
// let data = fs.readFileSync("./random.txt", "utf8");

// console.log(keys);  //works
// console.log(client); //works
////////////////////////////////////////////////////////////////////////////////////////////
//FUNCTIONS
////////////////////////////////////////////////////////////////////////////////////////////
//TWITTER FUNCTION GRABBING TWITTER INFORMATION
var params = {
    screen_name: "CandyCoder7",
    count: 20
};
client.get('statuses/user_timeline', params, function (error, tweets, response) {
    if (!error) {
        // console.log(tweets);
        for (var i = 0; i < tweets.length; i++) {
        // console.log(tweets[i].text); //works
        }
    }
});

// use cases to call function when user types in specific commands
//slice will turn into array
//join the array which makes a string
//make sure to put quotes 
//

//SPOTIFY
  //FIRST, capture user-input,
  //SECOND, npm install spotify, and use the template as suggested in the DOCS. 
  //THIRD, parse through the JSON.
function spotifyThisSong() {
    var songName = process.argv[3];
    params = songName;
    spotify.search({
        type: 'track',
        query: params
    },
    function (err, data) {
        if (err) {
            console.log('Error occurred: ' + err);
            return;
        }
        else{
            output = 
            "Song Name: " + "'" + songName.toUpperCase()+ "'" + "\n" +
            "Album Name: " + data.tracks.items[0].album.name + "\n" +
            "Artist Name: " + data.tracks.items[0].album.artists[0].name + "\n" +
            "URL: " + data.tracks.items[0].album.external_urls.spotify + "\n";
            console.log(output);
        }
        // console.log(data);
    });

}
spotifyThisSong();