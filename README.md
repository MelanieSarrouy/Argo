<p align="center">
  <a style="" href="https://argonautes-wcs-ms.herokuapp.com" target="_blank" >
    <img src="https://pyheroku-badge.herokuapp.com/?app=argonautes-wcs-ms&style=plastic" alt="Heroku" />
  </a>
</p>
<br/>
<p align="center"><img  src="https://github.com/MelanieSarrouy/Argo/blob/main/client/src/assets/index2.png?raw=true" alt="Argo logo" /></p>

[Argonautes List](https://argonautes-wcs-ms.herokuapp.com/team)

# ARGO: First project with the MERN Satck
  
### Wild Code School
 
This application allows you to add new Argonautes through a form and to have access to the all Argonautes list. A table allows you to delete or update an entry (an Argonautes).
  
Goals:

- Create a new Argonaute
- Read Argonautes list
- Update an Argonautes
- Delete an Argonaute
 
## 1. Technologies

This project use [Express](https://expressjs.com/fr/), [MongoDB Atlas](https://www.mongodb.com/atlas) and was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
 
-  [express](https://expressjs.com/en/4x/api.html) v4.18.1
-  [mongoose](https://mongoosejs.com/docs/documents.html) v6.6.1
-  [react](https://reactjs.org/) v17.0.2
-  [react-dom](https://fr.reactjs.org/docs/react-dom.html)v17.0.2
-  [react-router-dom](https://reactrouter.com/web/guides/quick-start) v6.4.1
-  [react-icons](https://react-icons.github.io/react-icons/)v4.4.0
-  Recommended IDE : [Visual Studio code](https://code.visualstudio.com/)
  
## 2. Prerequisites

-  [Git](https://git-scm.com/)
-  [Node.js](https://nodejs.org/en/)
-  [Yarn](https://yarnpkg.com/) or [npm](https://www.npmjs.com/)
 
## 3. Install and run application

This project uses [MongoDB Atlas](https://www.mongodb.com/atlas) for database management

 **1**. First you need to create a new project on **mongodb** and open a new cluster 
    
 **2**. Next, you need to create your own **.env** file at project root with the MONGODB environment variable (don't forget to add **'.env'** file to **'.gitignore'**) 

 **3**. follow the instructions below 

- [ ] Clone repository : https://github.com/MelanieSarrouy/Argo
- [ ] `yarn` to install dependencies
- [ ] `yarn start` Runs the server on port 5000 in the development mode.
- [ ] `yarn install-client` to install client folder (view with Create React App) dependencies
- [ ] `yarn client` runs app in the development mode
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.\
The page will reload if you make edits.\
You will also see any lint errors in the console.