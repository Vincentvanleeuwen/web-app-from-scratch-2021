# Web App From Scratch @cmda-minor-web 2020 - 2021




<!-- Add a link to your live demo in Github Pages 🌐-->
https://https://combinify.netlify.app/
<!-- ☝️ replace this description with a description of your own work -->

Without making use of JavaScript frameworks I will be making an interactive music web application. 

<!-- replace the code in the /docs folder with your own, so you can showcase your work with GitHub Pages 🌍 -->

<!-- Add a nice poster image here at the end of the week, showing off your shiny frontend 📸 -->

<!-- Maybe a table of contents here? 📚 -->

<!-- How about a section that describes how to install this project? 🤓 -->
## Learning goals

* _You can add structure to your code by applying patterns. You can defend the choice for the chosen patterns_
* _You can retrieve data, manipulate it and dynamically convert it to html elements using templating_
* _You understand how you can work with an external API using asynchronous code_
* _You understand how you can manage state in your application and you inform the user of state where necessary_

## Installation guide

```jsx
 cd C:/DesiredMap
 git clone https://github.com/Vincentvanleeuwen/web-app-from-scratch-2021.git
```

For security reasons, the spotify key has not been included, feel free to create your own for free.

[Spotify Developer Dashboard](https://developer.spotify.com/dashboard/applications)
> Create an app

> Copy the Client ID and the Client Secret

> Create an environment.js in the main folder

```jsx
// environment.js
export const clientID = 'PLACE-CLIENT-ID-HERE';
```

To run the project locally you will need browser-sync.
```jsx
 // Install browser sync globally
 npm i -g browser-sync
 
 // Go to the correct folder
 cd C:/DesiredMap/web-app-from-scratch-2021
 
 // Run the server 
 browser-sync .
```
You can now preview the project when visiting http://localhost:3000

<!-- ...but how does one use this project? What are its features 🤔 -->
## Features
A playlist is created based on each of the people's top tracks.
The user will be able to set the amount of songs or playlist length and a playlist name to start.
You can add however many other profiles as you'd like.
I will allow users to delete songs from the playlist.

<!-- What external data source is featured in your project and what are its properties 🌠 -->
## External Data

The [Spotify API](https://developer.spotify.com/documentation/web-api/) will be used in this project to get a list of a couple people's top tracks. 

There are four ways of authorization spotify. 
Refreshable user authorization like
- [Authorization Code Flow](https://developer.spotify.com/documentation/general/guides/authorization-guide/#authorization-code-flow)
- [Authorization Code Flow With Proof Key for Code Exchange (PKCE)](https://developer.spotify.com/documentation/general/guides/authorization-guide/#authorization-code-flow-with-proof-key-for-code-exchange-pkce)
- [Client Credentials Flow](https://developer.spotify.com/documentation/general/guides/authorization-guide/#client-credentials-flow)

or Temporary user authorization
- [Implicit Grant](https://developer.spotify.com/documentation/general/guides/authorization-guide/#implicit-grant-flow)

Because refreshable user authorization requires node.js, I will have to use the implicit grant method.
When authorized, I can use the returned key to get data from the spotify API.
For instance If I'd want to see the top 20 list of tracks from a user I could simply do
```jsx
const options = {
  headers: {
    'Authorization': 'Bearer ' + _token,
    'Content-Type': 'application/x-www-form-urlencoded'
  },
  json: true
}
  fetch('https://api.spotify.com/v1/me/top/tracks', options).then(response => {
    return response.json()
  }).then(data => {
    console.log('data', data); // Returns an object with 20 tracks in it
  })
```
<!-- Maybe a checklist of done stuff and stuff still on your wishlist? ✅ -->

## Checklist
- [x] Connect to the spotify API
- [x] Get the top tracks of the logged in user
- [ ] Add more profiles
- [ ] Create a playlist
- [ ] Set playlist name
- [ ] Set max amount of songs
- [ ] Set playlist length
- [ ] Add songs to a playlist
- [ ] Delete songs from a playlist
<!-- How about a license here? 📜 (or is it a licence?) 🤷 -->
