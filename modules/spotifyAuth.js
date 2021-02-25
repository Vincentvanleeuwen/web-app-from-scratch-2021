// import { clientID } from '../environment.js'

const connectToSpotify = document.getElementById('login-button')

// https://gist.github.com/arirawr/f08a1e17db3a1f65ada2c17592757049

// Get the hash of the url
const hash = window.location.hash.substring(1)
                                 .split('&')
                                 .reduce( (initial, item) => {
                                    if (item) {
                                      var parts = item.split('=');
                                      initial[parts[0]] = decodeURIComponent(parts[1]);
                                    }
                                    return initial;
                                 }, {});
// Reset the hash
window.location.hash = ''

// Set token
let _token = hash.access_token
const authEndpoint = 'https://accounts.spotify.com/authorize'
const redirectUri = window.location.origin
const scopes = [
  'user-read-email',
  'user-read-private',
  'user-library-read',
  'user-top-read',
  'playlist-read-collaborative',
  'playlist-modify-public',
  'playlist-modify-private'
]

connectToSpotify.addEventListener('click', () => {
  if (!_token) {
    window.location = `${authEndpoint}?client_id=b364d3b9da734592b09d1f0ae8ea7fd5&redirect_uri=${redirectUri}&scope=${scopes.join('%20')}&response_type=token`;
  }
})

export const hashToken = _token;
