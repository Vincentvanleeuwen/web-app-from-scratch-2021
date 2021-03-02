import { fetchData } from "../utils/fetchData.js";
import { hashToken } from "../modules/spotifyAuth.js";

const saveBtn = document.getElementById('save-button');

let isLoading = true;
let uris = ""

// Export the data so routes can use it.
export const addSongsToPlaylist = (id, songs) => {
  // Show loading text
  if(isLoading) {
    saveBtn.innerText = ""
    saveBtn.classList.toggle('saving')
  }
  let options;

  songs.map(song => {
    uris = uris + song.uri + ","
  })

  if(hashToken) {
    options = {
      method: 'POST',
      headers: {
        'Authorization': 'Bearer ' + hashToken,
        'Content-Type': 'application/json'
      },
      json: true
    }
  }

  const endPoint = [
    `https://api.spotify.com/v1/playlists/${id}/tracks?uris=${uris}`,
  ]
  return fetchData(endPoint, options)
          .then(data => { return data })
          .catch(err => console.warn(err, 'Error fetching Data'))
          .finally(()=> {
            // Hide loading text, set success text
            isLoading = false;
            saveBtn.classList.toggle('saving')
            saveBtn.innerText = "Saved"
          });
}

