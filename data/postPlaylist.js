import { fetchData } from "../utils/fetchData.js";
import { hashToken } from "../modules/spotifyAuth.js";


// Export the data so routes can use it.
export const postPlaylist = (id) => {
  let options;

  if(hashToken) {
    const playlistObject = JSON.parse(window.localStorage.getItem('playlist'));

    options = {
      method: 'POST',
      headers: {
        'Authorization': 'Bearer ' + hashToken,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        "name": playlistObject.playlistName,
        "description": "Made with Combinify",
        "public": true
      }),
      json: true
    }
  }

  const endPoint = `https://api.spotify.com/v1/users/${id}/playlists`

  return fetchData(endPoint, options)
          .then(data => { return data })
          .catch(err => console.warn(err, 'Error fetching Data'))

}

