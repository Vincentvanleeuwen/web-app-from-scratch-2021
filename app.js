import { hashToken } from "./modules/spotifyAuth.js";
import { Routes } from "./router/routes.js";

const loginScreen = document.getElementById('login')
const loggedInScreen = document.getElementById('loggedin')
const introText = document.querySelector('.intro-text')
const appTitle = document.getElementById('app-title')

const init = () => {
  Routes();

  if (hashToken) {
    loginScreen.classList.toggle('show-screen-flex')
    loggedInScreen.classList.toggle('show-screen-flex')
    introText.classList.toggle('show-screen-flex')
    appTitle.classList.add('title-animation')
  }
}

init();

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
