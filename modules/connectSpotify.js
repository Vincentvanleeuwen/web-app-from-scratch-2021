// Create playlist based on 2 or more user profiles
// Mix most listened songs together

// Get user by username
// GET /v1/users/{user_id}

// Create a Playlist
// POST	/v1/users/{user_id}/playlists

// Get a Playlist
// GET	/v1/playlists/{playlist_id}

// Add Items to a Playlist
// POST	/v1/playlists/{playlist_id}/tracks

// FEATURE
// Let the person choose how many songs there should be in the playlist

import { clientID } from '../environment.js'
import { fetchData } from '../utils/fetchData.js'
import { convertToJSON } from '../utils/convertToJSON.js'

const connectToSpotify = document.getElementById('login-button')

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
window.location.hash = ''

// Set token
let _token = hash.access_token
const authEndpoint = 'https://accounts.spotify.com/authorize'
const redirectUri = window.location.origin
const scopes = [
  'user-read-email',
  'user-read-private',
  'user-library-read',
  'user-top-read'
]
const endPoints = [
  'https://api.spotify.com/v1/me/top/tracks',
  'https://api.spotify.com/v1/me/'
]
const loginScreen = document.getElementById('login')
const loggedInScreen = document.getElementById('loggedin')
const userProfile = document.getElementById('user-profile')
connectToSpotify.addEventListener('click', () => {
  if (!_token) {
    window.location = `${authEndpoint}?client_id=${clientID}&redirect_uri=${redirectUri}&scope=${scopes.join('%20')}&response_type=token`;
  }

})

// export default _token;
if (_token) {
  loginScreen.classList.toggle('show-screen-flex')
  loggedInScreen.classList.toggle('show-screen-flex')


  const options = {
    headers: {
      'Authorization': 'Bearer ' + _token,
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    json: true
  }

  fetchData(endPoints, options)
  .then(convertToJSON).then(data => {
    console.log('data', data);
    let userData = {
      name: data[1].display_name,
      img: data[1].images[0].url
    }

    Transparency.render(userProfile, userData)
  })
}
