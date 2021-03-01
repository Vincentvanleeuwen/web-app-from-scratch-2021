const dataAttributes = [
  'display_name',
  'id',
  'images',
  'items'
]

export const deleteColumns = (data) => {

  return Object.entries(data).map(entry => {

      if(!dataAttributes.includes(entry[0])) {
        delete entry[0]
        delete entry[1]
      } else {
        return entry
      }

    })
    .filter(entry => entry !== undefined)

}

export const restructureData = (data) => {
  console.log('data =', data);
  let spotifyId = data[1][1],
    displayName = data[0][1];


  let spotifyImg = data[2][1][0].url.length === 0 ? 'https://media.istockphoto.com/vectors/default-profile-picture-avatar-photo-placeholder-vector-illustration-vector-id1223671392?b=1&k=6&m=1223671392&s=612x612&w=0&h=5VMcL3a_1Ni5rRHX0LkaA25lD_0vkhFsb1iVm1HKVSQ=' : data[2][1][0].url;
  

  return data.reduce((acc) => {

    let checkIndex = acc.findIndex(person => person.id === spotifyId)

    if (checkIndex > -1) {
      acc[checkIndex].name = displayName
      acc[checkIndex].img = spotifyImg

    } else {
      if (!spotifyId) { return }
      const newPerson = {
        id: spotifyId,
        name: null,
        img: null,
        songs: null
      }
      acc.push(newPerson)
    }
    return acc;
  }, []);
}


export const restructureSongs = (data) => {
  let songs = []
  data[0][1].forEach(song => { songs.push(songObject(song)) })
  return songs
}

const songObject = (song) => {
  return {
    songName: song.name,
    songArtist: song.artists[0].name,
    duration: song.duration_ms,
    uri: song.uri
  }
}
