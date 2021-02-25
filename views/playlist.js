import { hashToken } from "../modules/spotifyAuth.js";
import { postData } from "../data/postData.js";
import { addSongsToPlaylist } from "../data/addSongsToPlaylist.js";

const userProfile = document.querySelector('.container')
const playlistForm = document.getElementById('playlist-form')
const loginScreen = document.getElementById('login')
const playlistOptions = document.querySelector('.playlist-options')
const playlistBtn = document.getElementById('playlist-btn')
const saveBtn = document.getElementById('save-button');
const copyBtn = document.getElementById('copy-button');
const copyTxt = document.getElementById('copy-text');
const songLists = document.querySelector('.song-lists');


// const playlistID = window.localStorage.getItem('playlistID')
// const playlistHref = window.localStorage.getItem('playlistHref')

export const playlistView = (getProfile, getSongs) => {

 getProfile.then(data => {


   playlistForm.classList.toggle('show-screen-flex')
   playlistOptions.classList.toggle('show-screen-flex')
   playlistBtn.classList.toggle('show-screen-flex')
   songLists.classList.toggle('show-screen-flex')

   // Get the id and href of newly made playlist
   postData(data[0].id)
   .then(playlist => {
     console.log('playlist', playlist)
     // window.localStorage.setItem('playlistID', playlist.id)
     // window.localStorage.setItem('playlistHref', playlist.href)

     copyBtn.addEventListener('click', () => {
       copyTxt.value = playlist.href
       console.log(copyTxt.value)
       copyTxt.select();
       copyTxt.setSelectionRange(0, 99999);
       document.execCommand('copy')
       copyBtn.innerHTML = "Copied URL"
     })

     saveBtn.addEventListener('click', () => {
       return addSongsToPlaylist(playlist.id, data[0].songs)
     })

   })
   .catch(err => console.warn('Error getting id', err))

   const playlistObject = JSON.parse(window.localStorage.getItem('playlist'))


   if (!hashToken) { loginScreen.classList.add('show-screen-flex') }
   else {
     loginScreen.classList.remove('show-screen-flex')

     let people = data;
      console.log(data)
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
       },
       songs: {
         html: function(params) {
           getSongs().then(songs => {
             data[0].songs = songs
             songs.map(song => {
               return `<li>
               <span> ${song.songArtist}</span>     
               <span> ${song.songName}</span>     
              </li>`
             }).join('')
           })
         }
       }
     };

     Transparency.render(userProfile, people, directives, {debug: true})
   }
 }).catch(err => console.log(err))

}
