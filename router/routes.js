import { homeView } from "../views/home.js";
import { getData } from "../data/getData.js"

export const Routes = () => {
  try {
    routie({
        // Create a playlist, set the properties [length, amount songs, name]
        '': () => { homeView(getData) },
        // Send a playlist link to your friends, they log in and their top songs get mixed
        'new-playlist/*': () => { console.log('new Playlist!')}
    })

  } catch (e) {
    console.log('Error getting routes', e);
  }

}

