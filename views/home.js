import { hashToken } from "../modules/spotifyAuth.js";

const userProfile = document.getElementById('user-profile')

export const homeView = (getData) => {
 getData.then(data => {
   if (!hashToken) {
     return
   }
   console.log(data[0])

   let songs = [];
   data[0].items.forEach(song => {
     songs.push({
       songName: song.name,
       songArtist: song.artists[0].name
     })
   })

   let userData = {
     name: data[1].display_name,
     songs: songs
   }
  console.log(songs)
   let directives= {
     img: {
       src: function() {
         return data[1].images[0].url;
       }
     }
   }


   Transparency.render(userProfile, userData, directives)
 }).catch(err=> console.log(err))

}
