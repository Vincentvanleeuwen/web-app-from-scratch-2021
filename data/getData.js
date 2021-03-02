import { fetchData } from "../utils/fetchData.js";
import { hashToken } from "../modules/spotifyAuth.js";
import {deleteColumns, restructureData, restructureSongs} from "./transformData.js";

const profileEndpoint = 'https://api.spotify.com/v1/me/'

const options = {
  headers: {
    'Authorization': 'Bearer ' + hashToken,
    'Content-Type': 'application/x-www-form-urlencoded'
  },
  json: true
}

// Export the data so routes can use it.
export const getProfile = fetchData(profileEndpoint, options)
                          .then(deleteColumns)
                          .then(restructureData)

                          .then(data => { return data })
                          .catch(err => console.warn(err, 'Error fetching Data'))

export const getSongs = () => {
  let playlistObject = JSON.parse(window.localStorage.getItem('playlist'))
  let currentTerm

  if(playlistObject.term === "songsShortTerm") {
    currentTerm = "short_term"
  } else if (playlistObject.term === "songsMediumTerm") {
    currentTerm = "medium_term"
  } else {
    currentTerm = "long_term"
  }
  const songEndpoint =
    `https://api.spotify.com/v1/me/top/tracks/?time_range=${currentTerm}&limit=${playlistObject.duration}`

  return fetchData(songEndpoint, options)
          .then(deleteColumns)
          // .then((data)=> console.log(data))
          .then(restructureSongs)
          .then(data => { return data })
          .catch(err => console.warn(err, 'Error fetching Data'))
}
