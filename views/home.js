import { hashToken } from "../modules/spotifyAuth.js";

export const homeView = (getData) => {
 getData.then(data => {
   if (!hashToken) {
     return
   }
   const userProfile = document.getElementById('user-profile')

   let userData = {
     name: data[1].display_name,
   }

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
