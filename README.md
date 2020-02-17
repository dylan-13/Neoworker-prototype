
# Neoworker

# Deployement : 

> A Node/React Js website

`Neoworker Back-Office` is a dynamic website that connects freelance profiles to employers thanks to its powerful algorithm. The administrators can manage their jobs and neoworkers, and neoworkers can manage their skills and get offers.

It was created by 5 students of the Wild Code School of Marseille during 8 weeks : Stevie CUTMAN, Anthony PORTIER, Alexandre GUIDAT, Kevin THOMANN and Dylan BERTHIER.

Everyone is welcome to use it. It is the proud work of a brilliant team and their first-ever project with a real client.

## Installation
- Clone the repo in your terminal by clicking the _green_ clone or download button at the top right and copyin the url
- In your terminal, type ```git clone URL```
  - replace URL with the url you copied
  - hit enter
- This will copy all the files from this repo down to your computer
- In your terminal, cd into back/ and ```nodemon index.js```
- Then open an other Terminal and do cd into front/ and ```npm install``` to install all dependencies
- Last, but not least, type ```npm start``` to run the app locally.

## Structure
```
Marseille_0919_P3_NeoWorker

├── back 
    ├── config
    │   └── config.json
    ├── migrations
    │   ├── 20191205121448-create-users.js
    │   ├── 20191205123822-create-missions.js
    │   └── 20191205124935-create-freelancer.js
    ├── models
    │   ├── freelancer.js
    │   ├── mission.js
    │   └── user.js
    ├── node_modules
    ├── routes
    │    ├── freelancer.js
    │    ├── mission.js
    │    └── user.js
    ├── .gitignore
    ├── DataManagement.js
    ├── index.js  
    ├── package-lock.json
    └── package.json

├── front 
    ├── node_modules
    ├── public
    │   ├── favicon.png
    │   ├── index.html
    │   ├── manifest.json
    │   └── robots.txt
    ├── src
    │   ├── components
    │   │    ├── admin
    │   │    ├── freelancer
    │   │    ├── importPicture
    │   │    ├── matching
    │   │    ├── searchbar
    │   │    └── sidebar
    │   ├── img
    │   ├── App.css
    │   ├── App.js
    │   ├── App.test.js
    │   ├── index.css
    │   ├── index.js
    │   ├── logo.svg
    │   ├── serviceWorker.js
    │   └── setupTests.js
    ├── .gitignore
    ├── README.md
    ├── package-lock.json
    └── package.json
```
## Dependencies
- [React.JS](https://reactjs.org/)
- [Node.JS](https://nodejs.org/)
- [Express](https://expressjs.com/fr/)
- [Sequelize](https://sequelize.org/)
- [Axios](https://www.npmjs.com/package/axios)
- [Bcryptjs](https://www.npmjs.com/package/bcrypt)
- [Reactstrap](https://www.npmjs.com/package/reactstrap)
- [Jsonwebtoken](https://www.npmjs.com/package/jsonwebtoken)
- [Jwt-decode](https://www.npmjs.com/package/jwt-decode)
- [ReactSlick](https://www.npmjs.com/package/react-slick)
- [React-star-rating](https://www.npmjs.com/package/react-star-ratings)
- [Semantic-ui-react](https://www.npmjs.com/package/semantic-ui)
- [Body-parser](https://www.npmjs.com/package/body-parser)
- [Cors](https://www.npmjs.com/package/cors)
- [Multer](https://www.npmjs.com/package/multer)
- [Mysql2](https://www.npmjs.com/package/mysql2)
- [Node-schedules](https://www.npmjs.com/package/node-schedule)
- [Nodemon](https://www.npmjs.com/package/nodemon)