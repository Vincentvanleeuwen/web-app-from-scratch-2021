# **Combinify**
### Web App From Scratch @cmda-minor-web 2020 - 2021


https://combinify.netlify.app/

Combinify is a playlist creating application that lets you create a combined playlist of multiple people their top songs.
This application will be made without the use of Javascript Frameworks.

Check out the prototype @ https://xd.adobe.com/view/19b3c8d4-05bd-4ac2-ad30-a6d7686fc173-4ce0/?fullscreen&hints=off

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

> Copy the Client ID

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

Check out the [Reference](https://developer.spotify.com/documentation/web-api/reference/) page for further explanation on what links to get what data from.


## Diagrams

![Actor Diagram](https://github.com/Vincentvanleeuwen/web-app-from-scratch-2021/blob/master/img/actordiagram.png)
![Interaction Diagram](https://github.com/Vincentvanleeuwen/web-app-from-scratch-2021/blob/master/img/interactiondiagram.png)

## Checklist
- [x] Connect to the spotify API
- [x] Get the top tracks of the logged in user
- [x] Create a playlist
- [x] Add songs to the playlist
- [x] Set playlist name
- [x] Set max amount of songs
- [ ] Add more profiles
- [ ] Add songs to a playlist
- [ ] Delete songs from a playlist
<!-- How about a license here? 📜 (or is it a licence?) 🤷 -->
