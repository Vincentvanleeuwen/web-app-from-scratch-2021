import { homeView } from "../views/home.js";
import { createPlaylistView } from "../views/createPlaylist.js";
import { playlistView } from "../views/playlist.js";
import { getData } from "../data/getData.js"

export const Routes = () => {
  try {
    routie({
        // Login/Create playlist
        '': () => { homeView(getData) },
        // Set the playlist settings
        'new-playlist/*': () => { createPlaylistView(getData)},
        // Add people to the playlist
        'playlist/*': () => { playlistView(getData)}
    })

  } catch (e) {
    console.log('Error getting routes', e);
  }

}

