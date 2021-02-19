import { hashToken } from "../modules/spotifyAuth.js";
import { postData } from "../data/postData.js";

const userProfile = document.querySelector('.container')
const playlistForm = document.getElementById('playlist-form')
const loginScreen = document.getElementById('login')
const playlistOptions = document.querySelector('.playlist-options')
const playlistBtn = document.getElementById('playlist-btn')
const saveBtn = document.getElementById('save-button');

export const playlistView = (getData) => {

 const playlistObject = JSON.parse(window.localStorage.getItem('playlist'));
 // const songList = document.querySelector('.songs');
 // songList.className = playlistObject.term;

 getData.then(data => {
   console.log(data[0].id);
   playlistForm.classList.toggle('show-screen-flex')
   playlistOptions.classList.toggle('show-screen-flex')
   playlistBtn.classList.toggle('show-screen-flex')

   saveBtn.addEventListener('click', () => {
     postData(data[0].id)
     .then(data => {return data})
     .catch(err => console.warn('Error', err));
   })

   if (!hashToken) { loginScreen.classList.add('show-screen-flex') }
   else {
     loginScreen.classList.remove('show-screen-flex')

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
       },
       songs: {
         html: function(params) {
           return this[playlistObject.term].map(song => {
             return `<li>
               <span> ${song.songArtist}</span>     
               <span> ${song.songName}</span>     
              </li>`
           }).join('')
         }
       }
     };

     Transparency.render(userProfile, people, directives,{debug: true})
   }
 }).catch(err => console.log(err))

}
