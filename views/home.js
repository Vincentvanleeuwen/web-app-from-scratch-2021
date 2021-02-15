import { hashToken } from "../modules/spotifyAuth.js";

const userProfile = document.querySelector('.container')

export const homeView = (getData) => {
 getData.then(data => {
   if (!hashToken) {
     return
   }
   console.log(data[0].name, data[0].shortTerm, data[0].img)

   let userData = {
     people: data,
   }
   console.log(userData)

   let directives= {
     person: {
       image: {
         src: (params) => { this.img },
         alt: (params) => { this.name + ' profile picture'}
       },
       name: {
         html: (params) => { this.name }
       }
     }
   }

   Transparency.render(userProfile, userData, directives, {debug: true})
 }).catch(err=> console.log(err))

}
