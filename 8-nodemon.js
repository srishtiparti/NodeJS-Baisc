// install nodemon - npm i nodemon -D so that we don't have to run our code everytime we make the changes
// We use D because we just want it in dev environment and not in prod environment
// Change the script... in debug

// "scripts": {
//     "start": "node app.js"
//      "dev": "nodemon app.js"
// },

// instead of typing node app.js just type npm start
//  to start nodemon - npm run dev to restart your app
// or install nodemon - npm install -g nodemon 
// globally - npx install -g nodemon 
// run nodemon app.js

const _ = require('lodash');

const items = [1, [2, [3, [4]]]]

const newItems = _.flattenDeep(items)
console.log(newItems)
console.log("Hello World")