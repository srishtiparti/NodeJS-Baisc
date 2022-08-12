// express intro
// website - expressjs.com
// npm install express --save
// To install a specific version - npm install express@4.17.21 --save

// import express module
const express = require('express');
// invoke express
const app = express()

// Methods used in express

// app.get - read data
// app.get('/',(req,res)=>{})
// app.listen
// app.post - insert data
// app.put - update data
// app.use - used for setting up middleware
// app.delete - delete data
// app.all -


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
// res.status().send()
// res.sendFile - to send file on server
//  res.json - to send json data (check json and json API)

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