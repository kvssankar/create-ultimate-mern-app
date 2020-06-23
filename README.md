
# create-ultimate-mern-app

> create your mern app just like create react app
<br/>
> Don't waste hours just setting your development environment

<br/>

    npm i -g create-ultimate-mern-app
    create-ultimate-mern-app myApp
    cd myApp

  or
  

    npm i -g create-ultimate-mern-app
    cd myApp
    create-ultimate-mern-app .







# Prerequisites

  

- create-react-app should be installed globally otherwise
- npm i -g create-react-app

  

  



  


## Configurations To be done

  

- Fill the mongoURI in config/default.json with your database uri
- Add "proxy":"http://localhost:5000" in client\package.json
  

  


## Add these scripts in your root package.json

  

    "scripts": {
    "start": "node server.js",
    "client": "cd ../client && npm start",
    "dev": "concurrently \"npm run start\" \"npm run client\""
    },

## Features included
  

 1. React router is set up
 2. Redux is set up persisting the state in localStorage
 3. server is setup with mongo as database
 4. models, routes folder is setup
 5. server running in localhost 5000 react in 3000
 
 
## Npm packages included :
 
 1. concurrently
 2. express
 3. mongoose
 4. config
 5. react-router-dom
 6. redux
 7. react-redux
 8. redux-thunk
 9. axios
 10. reactstrap

# Contact me :)

  

*I would like to connect with u guys fell free to contact me*

  

  

<a  href="https://www.facebook.com/sankar.ub"  target="_blank"><img  height="32"  width="32"  src="https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/facebook.svg"  /></a>  &nbsp;&nbsp;<a  href="https://www.linkedin.com/in/sankar-kvs-a6a71b1a3/"  target="_blank"><img  height="32"  width="32"  src="https://cdnjs.cloudflare.com/ajax/libs/ionicons/4.5.6/collection/build/ionicons/svg/logo-linkedin.svg"  /></a>  &nbsp;&nbsp;<a  href="https://www.instagram.com/kvs_sk/"  target="_blank"><img  height="32"  width="32"  src="https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/instagram.svg"  /></a>

  

  

## Contributing

  

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change. Thinking to add more features in future versions. Any ideas or suggestions are welcomed :)

  

  

  

>  **The only way to discover the limits of the possible is to go beyond them into the impossible**

  

  

![forthebadge](https://forthebadge.com/images/badges/built-with-love.svg)

  

  

![AppVeyor](https://img.shields.io/badge/by-KVS-red?style=for-the-badge)