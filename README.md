# Web App From Scratch @cmda-minor-web 2020 - 2021

In this course you will learn to build a web application without frameworks or unnecessary libraries, but with vanilla HTML, CSS & JavaScript as much as possible. The end result is a modular, single page web app (SPA). Data will be retrieved from an external API of your choice, manipulated and finally shown in the UI of the App. You will learn different ways to structure code and develop your own coding style. With the gained knowledge you will be able to build interactive prototypes, based on real data. Also you will gain a better understanding of how API's, frameworks and libraries work.

## Learning goals

* _You can add structure to your code by applying patterns. You can defend the choice for the chosen patterns_
* _You can retrieve data, manipulate it and dynamically convert it to html elements using templating_
* _You understand how you can work with an external API using asynchronous code_
* _You understand how you can manage state in your application and you inform the user of state where necessary_

[Rubric](https://docs.google.com/spreadsheets/d/1vJJ4EhIqkefWj1nWFp0Pnvy1Kld-S2V3qwZgC6XQO0c/edit?usp=sharing), with learning goals
[Overall plaaning](https://teams.microsoft.com/l/file/95EAEC95-4AB8-4E62-A810-2445969460B6?tenantId=0907bb1e-21fc-476f-8843-02d09ceb59a7&fileType=xlsx&objectUrl=https%3A%2F%2Ficthva.sharepoint.com%2Fsites%2FFDMCI_EDU__CMD20_21_Minor_Web_5i7j73jt%2FShared%20Documents%2F02%20-%20Web%20App%20From%20Scratch%2FWAFS%202021%20Planning.xlsx&baseUrl=https%3A%2F%2Ficthva.sharepoint.com%2Fsites%2FFDMCI_EDU__CMD20_21_Minor_Web_5i7j73jt&serviceName=teams&threadId=19:9bd8abc7b32c4e0196ddbaae12cf8e79@thread.tacv2&groupId=5d001f9a-0a4b-4768-92b1-0f1768328ba3)

## Program

### Week 1 - Hello API 🐒

Goal: Retrieve data from an API and render it in an overview page.

[Excercises](https://github.com/cmda-minor-web/web-app-from-scratch-2021/blob/master/course/week-1.md)

[Slides](https://docs.google.com/presentation/d/1hXfgIhBzJ2QXDmpKpMcx7G-a9R_fVrcPdeOyM3G0I00/edit?usp=sharing)

### Week 2 - Design and Refactor 🛠

Goal: Design the web app. Add routes and states. Split code into modules. Rendering detail page.

[Excercises](https://github.com/cmda-minor-web/web-app-from-scratch-2021/blob/master/course/week-2.md)

[Slides](https://docs.google.com/presentation/d/1ycANqFk9LtrZCBJF2TyQ1c_bejjEctSlb-52xbK_P1g/edit?usp=sharing)

### Week 3 - Wrapping up 🎁

Goal:
Manipulate data. Reflect on end result

[Excercises](https://github.com/cmda-minor-web/web-app-from-scratch-2021/blob/master/course/week-3.md)

[Slides](https://docs.google.com/presentation/d/1yZi-ODpENKHMr0-kpKmnCI6dGSgXS9oeLxMXCJnieic/edit?usp=sharing)

## Best Practices
All work during this course will be tested against our [Best Practices for JavaScript](https://github.com/cmda-minor-web/best-practices/blob/master/javascript.md).

<!-- Add a link to your live demo in Github Pages 🌐-->
https://compare-music.netlify.app/
<!-- ☝️ replace this description with a description of your own work -->

Without making use of JavaScript frameworks I will be making an interactive music web application. 




<!-- replace the code in the /docs folder with your own, so you can showcase your work with GitHub Pages 🌍 -->

<!-- Add a nice poster image here at the end of the week, showing off your shiny frontend 📸 -->

<!-- Maybe a table of contents here? 📚 -->

<!-- How about a section that describes how to install this project? 🤓 -->
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

<!-- Maybe a checklist of done stuff and stuff still on your wishlist? ✅ -->
[x] - Connect to the spotify API
[x] - Get the top tracks of the logged in user
[] - Add more profiles
[] - Create a playlist
[] - Set playlist name
[] - Set max amount of songs
[] - Set playlist length
[] - Add songs to a playlist
[] - Delete songs from a playlist
<!-- How about a license here? 📜 (or is it a licence?) 🤷 -->
