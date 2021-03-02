import { hashToken } from "./modules/spotifyAuth.js";
import { Routes } from "./router/routes.js";

const loginScreen = document.getElementById('login')
const loggedInScreen = document.getElementById('loggedin')
const introText = document.querySelector('.intro-text')
const appTitle = document.getElementById('app-title')
const playlistBtn = document.getElementById('playlist-btn')

const init = () => {
  Routes();

  // Show next screen if logged in to spotify.
  if (hashToken) {
    loginScreen.classList.toggle('show-screen-flex')
    loggedInScreen.classList.toggle('show-screen-flex')
    introText.classList.toggle('show-screen-flex')
    playlistBtn.classList.toggle('show-screen-flex')
    appTitle.classList.add('title-animation')
  }
}

init();
