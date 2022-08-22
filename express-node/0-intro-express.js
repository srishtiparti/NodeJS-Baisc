// express intro
// website - expressjs.com
// npm install express --save
// To install a specific version - npm install express@4.17.21 --save

// import express module
const express = require('express');
// invoke express
const app = express()

// Methods used in express

// app.get - read data eg - get all orders
// app.get('/',(req,res)=>{})
// app.get(www.store.com/api/:id) - get single order(path params)
// app.listen
// app.post - insert data plan an order (send data)
// app.put (www.store.com/api/:id) -update specific orer(params + send data)
// app.put - update data
// app.use - used for setting up middleware
// app.delete - delete data
// app.delete (www.store.com/api/:id) delete order (path params)
// app.all -

// Connect to DB first - use refractor





// API - setting up an http interface to interact with data
// data is sent using JSON
// To send res.json()

// SSR - set up template and send entire html and css data
// Basically sending template
// we'll use res.render()


// ******** Set up server **********
// app.get('/',(req,res)=>{})
// things that can be used
// req.param
// req.query
// req.url
// req.method
// res.status().send()
// res.sendFile - to send file on server
// res.json - to send json data (check json and json API)


// *** YOU CANNOT SEND MORE THAN 1 RESPONSE FOR A SINGLE REQUEST***
// that measn you cannot use res.send()/res.json() twice for a request
// use return instead
// if(...){return res(....)} res(...)

// ********* To render a file through server **********
// import path using method path
// const path = require(path)
// in server (app.get) give path
// res.sendFile(path.resolve(__dirname, './express-node/Nav-bar/index.html'))

// ********** Sending all files in a folder to avoid what we did in http server (have to send each link)
// express.static -> to take all the files in order to post them on server eg- css, images, browser js files
// app.use(express.static('./name_of_the_folder))


// We used map and find in 5 json API to look for desired data

// ********** Query key value ***********
// Everything after ? in a url is not part of the url, it is a way to send data to server
// It is a querry string eg &page=2 or hitsPerPage etc 
// we use key value pairs
// search?key=value
// search?query=bar
// const { key,key } = req.query
// add if statements for each condition
// res.json

// ******* : search value ********
// if searching for a certain thing... use ":" sign in url for the value
// Return that value. Similar to query but can be done in various parts of url
// api/v1/:productName/reviews/:productReview
// res.json

// **** Middleware ****
// functions that executes at the request of the server
// each middleware has access to req, res of the object
// req => middleware => res
// MIDDLEWARE NEEDS TO SEND RESPONSE
// you can create function with params req,res,next
// the next passes the res to next res as the middleware must response and sometimes we don't want to show data
//  eg const logger =(req,res,nect)=>{....... next()}
// Its always better to create middleware in different files
// Use module.export and require to communicate
// Apply a module to all urls
// const module_name = require("./module_path")
// app.use(module_name)
//  MIDDLEWARE FUNCTIONS NEEDS TO BE ON TOP IN ORDER TO BE EXCECUTED IN ALL URLS
//  iF you only want it for some certain urls
// app.use('/api',logger)
//  it will apply to all paths which have /api or /api/ in them

// ************* third party middleware **************
// morgan
// npm i morgan
// var morgan = require('morgan)
// using a predefined format string - morgan
// app.use(morgan('tiny')) - just gives the basic information

// ****************** Get Method ********************
// Just getting the information
// eg res.json({success:true,data:people})

// ****************** Post Method *********************
// Posting data on website
// We use middleware such as app.use
// // static assets
// app.use(express.static('./methods-public'))
//     // parse form data
// app.use(express.urlencoded({ extended: false })) 

// *********************** Updating in database using post or posting the data in frontend**************
// app.use(express.json()) to parse json