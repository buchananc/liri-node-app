require("dotenv").config();

var nodeArgs = process.argv;
var argOne = process.argv[2];
var argTwo = process.argv[3];
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
var movieName = "";

////////////////////////////////////////////////////////////////////////////////////////////
//FUNCTIONS
////////////////////////////////////////////////////////////////////////////////////////////
//SWITCH CASE/////////////////////////////////
function userInput(argOne) {
    switch (argOne) {
        case 'spotify-this-song':
            spotifyThisSong();
            break;
        case 'my-tweets':
            twitterApi();
            break;
        case 'movie-this':
            myOMDB();
            break;
        // case 'do-what-it-says':
        //     doAction();
        //     break;
    }
}
userInput(argOne);

// TWITTER///////////////////////////////////////
function twitterApi() {
    var params = {
        screen_name: "CandyCoder7",
        count: 20
    };
    client.get('statuses/user_timeline', params, function (error, tweets, response) {
        if (!error) {
            for (var i = 0; i < tweets.length; i++) {
                console.log(tweets[i].text);
            }
        }
    });

}

//SPOTIFY//////////////////////////////////////
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
        } else {
            output =
                "Spotify has the following information about your song: \n" +
                "Song Name: " + "'" + songName.toUpperCase() + "'" + "\n" +
                "Album Name: " + data.tracks.items[0].album.name + "\n" +
                "Artist Name: " + data.tracks.items[0].album.artists[0].name + "\n" +
                "URL: " + data.tracks.items[0].album.external_urls.spotify + "\n";
            console.log(output);
        }
    });
}

//OMDB/////////////////////////////////////////////
function myOMDB() {
    for (var i = 3; i < nodeArgs.length; i++) {
        if (i > 3 && i < nodeArgs.length) {
            movieName = movieName + "+" + nodeArgs[i];
        } else {
            movieName += nodeArgs[i];
        }
    }
    //OMDB API
    var queryURL = "http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&apikey=trilogy";
    // console.log(queryURL);

    request(queryURL, function (error, response, body) {
        if (!error && response.statusCode === 200) {
            var jsonData = JSON.parse(body);
            console.log("Title: " + jsonData.Title);
            console.log("Release Year: " + jsonData.Year);
            console.log("IMDB Rating: " + jsonData.Ratings[0].Value);
            console.log("Rotten Tomatoes Rating: " + jsonData.Ratings[1].Value);
            console.log("Country Where Produced: " + jsonData.Country);
            console.log("Language: " + jsonData.Language);
            console.log("Plot: " + jsonData.Plot);
            console.log("Actors: " + jsonData.Actors);
        }
    });
}

//FS NODE/////////////////////////////////////////////////////////
if (process.argv[2] === 'do-what-it-says') {
    var dataInput;
    fs.readFile('random.txt', 'utf8', function(error, data) {
        if(error) {
            return console.log(error);
        }

        dataInput = data.split(',');
        var inputTrimmed = dataInput.map(function(item) {
            return item.trim().length;
        });

        spotify.search({
            type: 'track',
            query: dataInput[1]
        }, 
        function (err, data) {
            if (err) {
                console.log('Error occurred: ' + err);
                return;
            } else {
                output =
                    "Song Name: " + "'" + dataInput[1].toUpperCase() + "'" + "\n" +
                    "Album Name: " + data.tracks.items[0].album.name + "\n" +
                    "Artist Name: " + data.tracks.items[0].album.artists[0].name + "\n" +
                    "URL: " + data.tracks.items[0].album.external_urls.spotify + "\n";
                console.log(output);
            }
        });
    });
}