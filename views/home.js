import { hashToken } from "../modules/spotifyAuth.js";

const userProfile = document.querySelector('.container')
const playlistBtn = document.getElementById('playlist-btn')

export const homeView = (getData) => {
 getData.then(data => {
   if (!hashToken) {
     return
   }

   playlistBtn.addEventListener('click', () => {
     routie('new-playlist/');
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

   Transparency.render(userProfile, people, directives,{debug: true})
 }).catch(err => console.log(err))

}
