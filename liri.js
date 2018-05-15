require("dotenv").config();

//   Make it so liri.js can take in one of the following commands:
//       * `my-tweets`
//       * `spotify-this-song`
//       * `movie-this`
//       * `do-what-it-says`
////////////////////////////////////////////////////////////////////////////////////////////
//NPM Modules to Import
////////////////////////////////////////////////////////////////////////////////////////////
var request = require('request');
var Twitter = require('twitter');
var Spotify = require('node-spotify-api');
var fs = require("fs");
var keys = require("./keys");
var client = new Twitter(keys.twitter);
var spotify = new Spotify(keys.spotify);
// var params = {
//     screen_name: "CandyCoder7",
//     count: 2
// };

// console.log(keys);  //works
// console.log(client); //works
////////////////////////////////////////////////////////////////////////////////////////////
//Functions
////////////////////////////////////////////////////////////////////////////////////////////

// client.get('statuses/user_timeline', params, gotData);

// function gotData(error, tweets, response) {
//     if (error) {
//         console.log(error);
//         return;
//     }
//     var tweeted = tweets.statuses;
//     for (var i = 0; i < tweeted.length; i++){
//         console.log(tweeted[i].text);
//     }  
// }
var params = {
    screen_name: "CandyCoder7",
    count: 2
};
client.get('statuses/user_timeline', params, function (error, tweets, response) {
    if (!error) {
        // console.log(tweets);
        for (var i = 0; i < tweets.length; i++) {
        console.log(tweets[i].text);
        }
    }
});

// use cases to call function when user types in specific commands