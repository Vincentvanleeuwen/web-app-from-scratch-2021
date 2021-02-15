const dataAttributes = [
  'display_name',
  'id',
  'images',
  'items'
]

export const deleteColumns = (data) => {
  console.log('unfiltered', data)

  return data.map(dataset => {

    return Object.entries(dataset).map(entry => {

      if(!dataAttributes.includes(entry[0])) {
        delete entry[0]
        delete entry[1]
      } else {
        return entry
      }

    })
    .filter(entry => entry !== undefined)

  })
}


export const restructureData = (data) => {

  const personInfo = data[0]
  const shortTerm = data[1]
  const mediumTerm = data[2]
  const longTerm = data[3]

  let shortTermSongs = [],
      mediumTermSongs = [],
      longTermSongs = []

  let spotifyId = personInfo[1][1],
    displayName = personInfo[0][1],
    spotifyImg = personInfo[2][1][0].url

  shortTerm[0][1].forEach(song => { shortTermSongs.push(songObject(song)) })
  mediumTerm[0][1].forEach(song => { mediumTermSongs.push(songObject(song)) })
  longTerm[0][1].forEach(song => { longTermSongs.push(songObject(song)) })

  return personInfo.reduce((acc) => {

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
        shortTerm: shortTermSongs,
        mediumTerm: mediumTermSongs,
        longTerm: longTermSongs
      }
      acc.push(newPerson)
    }
    return acc;
  }, []);
}


const songObject = (song) => {
  return {
    songName: song.name,
    songArtist: song.artists[0].name,
    duration: song.duration_ms,
    uri: song.uri
  }
}
