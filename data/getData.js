import { fetchData } from "../utils/fetchData.js";
import { convertToJSON } from "../utils/convertToJSON.js";
import { hashToken } from "../modules/spotifyAuth.js";

const endPoints = [
  'https://api.spotify.com/v1/me/top/tracks',
  'https://api.spotify.com/v1/me/'
]
// time_range=short_term | 4 weeks
// time_range=medium | 6 months
// time_range=long | all
const options = {
  headers: {
    'Authorization': 'Bearer ' + hashToken,
    'Content-Type': 'application/x-www-form-urlencoded'
  },
  json: true
}

// Export the data so routes can use it.
export const getData = fetchData(endPoints, options)
                        .then(convertToJSON)
                        .then(data => {
                          return data;
                        }).catch(err => console.log('not connected to spotify api'))

