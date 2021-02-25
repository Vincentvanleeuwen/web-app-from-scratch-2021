import { homeView } from "../views/home.js";
import { createPlaylistView } from "../views/createPlaylist.js";
import { playlistView } from "../views/playlist.js";
import { getProfile, getSongs } from "../data/getData.js"

export const Routes = () => {
  try {
    routie({
        // Login/Create playlist
        '': () => { homeView(getProfile) },
        // Set the playlist settings
        'new-playlist/*': () => { createPlaylistView(getProfile)},
        // Add people to the playlist
        'playlist/*': () => { playlistView(getProfile, getSongs)}
    })

  } catch (e) {
    console.log('Error getting routes', e);
  }

}

