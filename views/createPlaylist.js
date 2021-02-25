import { hashToken } from "../modules/spotifyAuth.js";

const userProfile = document.querySelector('.container')
const playlistBtn = document.getElementById('playlist-btn')
const playlistForm = document.getElementById('playlist-form')
const playlistName = document.getElementById('playlist-name')
const playlistDuration = document.getElementById('duration')
const medium = document.getElementById('medium')
const long = document.getElementById('long')
const avatar = document.getElementById('loggedin')


export const createPlaylistView = (getData) => {
 getData.then(data => {
   if (!hashToken) {
     return
   }

   let term;

   playlistForm.classList.toggle('show-screen-flex')
   avatar.classList.add('avatar-animation')

   playlistBtn.addEventListener('click', () => {

     if (long.checked) { term = 'songsLongTerm' }
     else if (medium.checked) { term = 'songsMediumTerm'}
     else { term = 'songsShortTerm'}
     let playlistObject = {
       term: term,
       duration: playlistDuration.value,
       playlistName:  playlistName.value
     }
     // playlistObject.term = term
     // playlistObject.duration = playlistDuration.value
     // playlistObject.playlistName = playlistName.value


     window.localStorage.setItem('playlist', JSON.stringify(playlistObject))

     setTimeout(() => {
       routie('playlist/' + playlistObject.playlistName);
     }, 500)

   })

   let people = data;

   let directives = {
     name: {
       text: function(params) {
         return this.name
       }
     },

     image: {
       src: function(params) {
         return this.img;
       },
       alt: function(params) {
         return this.name + 'profile picture';
       },

     }
   };

   Transparency.render(userProfile, people, directives)
 }).catch(err => console.log(err))

}
