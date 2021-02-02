import { clientID, clientSecret } from '../environment.js'

// const connectToSpotify = document.getElementById('login-button');
//
// // https://gist.github.com/arirawr/f08a1e17db3a1f65ada2c17592757049
//
// // Get the hash of the url
// const hash = window.location.hash
// .substring(1)
// .split('&')
// .reduce(function (initial, item) {
//   if (item) {
//     var parts = item.split('=');
//     initial[parts[0]] = decodeURIComponent(parts[1]);
//   }
//   return initial;
// }, {});
// window.location.hash = '';
//
// // Set token
// let _token = hash.access_token;
// const authEndpoint = 'https://accounts.spotify.com/authorize';
// const redirectUri = 'https://compare-music.netlify.app';
// const scopes = [
//   'user-read-email',
//   'user-read-private',
//   'user-library-read'
// ];
//
// // If there is no token, redirect to Spotify authorization
// connectToSpotify.addEventListener('click', () => {
//   if (!_token) {
//     window.location = `${authEndpoint}?client_id=${clientID}&redirect_uri=${redirectUri}&scope=${scopes.join('%20')}&response_type=token`;
//   }
// })
/**
 * This is an example of a basic node.js script that performs
 * the Client Credentials oAuth2 flow to authenticate against
 * the Spotify Accounts.
 *
 * For more information, read
 * https://developer.spotify.com/web-api/authorization-guide/#client_credentials_flow
 */

var request = require(['request'], () => console.log('loaded')); // "Request" library

// your application requests authorization
var authOptions = {
  url: 'https://accounts.spotify.com/api/token',
  headers: {
    'Authorization': 'Basic ' + (new Buffer(clientID + ':' + clientSecret).toString('base64'))
  },
  form: {
    grant_type: 'client_credentials'
  },
  json: true
};

request.post(authOptions, function(error, response, body) {
  if (!error && response.statusCode === 200) {

    // use the access token to access the Spotify Web API
    var token = body.access_token;
    var options = {
      url: 'https://api.spotify.com/v1/me/',
      headers: {
        'Authorization': 'Bearer ' + token
      },
      json: true
    };
    request.get(options, function(error, response, body) {
      console.log(body);
    });
  }
});
