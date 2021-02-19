import { fetchData } from "../utils/fetchData.js";
import { convertToJSON } from "../utils/convertToJSON.js";
import { hashToken } from "../modules/spotifyAuth.js";

const playlistObject = JSON.parse(window.localStorage.getItem('playlist'));

const options = {
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

// Export the data so routes can use it.
export const postData = (id) => {
  console.log(id);
  const endPoints = [
    `https://api.spotify.com/v1/users/${id}/playlists`,
  ]
  return fetchData(endPoints, options)
  .then(convertToJSON)

  .then(data => { return console.log(data) })
  .catch(err => console.warn(err, 'Error fetching Data'))
}

