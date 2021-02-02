import { clientID, clientSecret } from '../environment.js'

const connectToSpotify = document.getElementById('login-button');

// https://gist.github.com/arirawr/f08a1e17db3a1f65ada2c17592757049

// Get the hash of the url
const hash = window.location.hash
.substring(1)
.split('&')
.reduce(function (initial, item) {
  if (item) {
    var parts = item.split('=');
    initial[parts[0]] = decodeURIComponent(parts[1]);
  }
  return initial;
}, {});
window.location.hash = '';

// Set token
let _token = hash.access_token;
const authEndpoint = 'https://accounts.spotify.com/authorize';
const redirectUri = 'https://compare-music.netlify.app';
const scopes = [
  'user-read-email',
  'user-read-private',
  'user-library-read'
];

connectToSpotify.addEventListener('click', () => {
  if (!_token) {
    window.location = `${authEndpoint}?client_id=${clientID}&redirect_uri=${redirectUri}&scope=${scopes.join('%20')}&response_type=token`;
  }
});

const options = {
  method: 'get',
  headers: {
    'Authorization': 'Basic ' + (new Uint8Array(clientID + ':' + clientID).toString('base64')),
    'Content-Type': 'application/x-www-form-urlencoded'
  },
  json: true
}
if (_token) {

  console.log('Current Token ====== ', _token);

  fetch('https://api.spotify.com/v1/me/top/artists', options).then(response => {
    console.log('response', response)
    return response.json()
  }).then(data => {
    console.log('data', data);
  })
}
