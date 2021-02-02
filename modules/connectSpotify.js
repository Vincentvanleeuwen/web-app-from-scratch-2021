import { clientID } from '../environment.js'

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
console.log(hash)
// Set token
let _token = hash.access_token;

const authEndpoint = 'https://accounts.spotify.com/authorize';

// Replace with your app's client ID, redirect URI and desired scopes
const redirectUri = 'https://compare-music.netlify.app';
const scopes = [
  'user-read-email',
  'user-read-private',
  'user-library-read'
];

// If there is no token, redirect to Spotify authorization
document.getElementById('login-button').addEventListener('click', () => {
  if (!_token) {
    window.location = `${authEndpoint}?client_id=${clientID}&redirect_uri=${redirectUri}&scope=${scopes.join('%20')}&response_type=token`;
  }
})
