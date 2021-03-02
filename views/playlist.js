import { hashToken } from "../modules/spotifyAuth.js";
import { postPlaylist } from "../data/postPlaylist.js";
import { addSongsToPlaylist } from "../data/addSongsToPlaylist.js";

const userProfile = document.querySelector('.container')
const songLists = document.querySelector('.song-lists');
const playlistOptions = document.querySelector('.playlist-options')

const playlistForm = document.getElementById('playlist-form')
const loginScreen = document.getElementById('login')
const playlistBtn = document.getElementById('playlist-btn')
const saveBtn = document.getElementById('save-button');
const copyBtn = document.getElementById('copy-button');
const copyTxt = document.getElementById('copy-text');

export const playlistView = (getProfile, getSongs) => {

 // Get the user profile
 getProfile.then(data => {

   // Toggle old/new page elements
   playlistForm.classList.toggle('show-screen-flex')
   playlistOptions.classList.toggle('show-screen-flex')
   playlistBtn.classList.toggle('show-screen-flex')
   songLists.classList.toggle('show-screen-flex')

   // Get the id and href of newly made playlist
   postPlaylist(data[0].id)
   .then(playlist => {
     console.log('playlist', playlist)

     copyBtn.addEventListener('click', () => {
       copyTxt.value = playlist.external_urls.spotify
       // Select the url
       copyTxt.select();
       // Enable copy on mobile devices
       copyTxt.setSelectionRange(0, 99999);
       // Copy text
       document.execCommand('copy')
       copyBtn.innerHTML = "Copied URL"
     })

     // Add the users addition to the newly created playlist
     saveBtn.addEventListener('click', () => {
       return addSongsToPlaylist(playlist.id, data[0].songs)
     })

   })
   .catch(err => console.warn('Error getting id', err))

   // Get the localStorage playlist data
   const playlistObject = JSON.parse(window.localStorage.getItem('playlist'))


   if (!hashToken) { loginScreen.classList.add('show-screen-flex') }
   else {
     loginScreen.classList.remove('show-screen-flex')

     // Add the correct songs to the songs object
     getSongs().then(songs => {
       data[0].songs = songs

       let people = data;

       let directives = {
         image: {
           src: function(params) {
             return this.img;
           },
           alt: function(params) {
             return this.name + 'profile picture';
           },
         },
         playlistname: {
           text: function(params) {
             return playlistObject.playlistName
           }
         }
       };

       Transparency.render(userProfile, people, directives, {debug: true})
     }).catch(err => console.warn('err'))


   }
 }).catch(err => console.log(err))

}
