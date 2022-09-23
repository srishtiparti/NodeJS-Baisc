console.log("first file for node")

// Some notes -
// npm init 
// npm init -y for default
// npm i lodash (or any other dependecies)
// remove package
// npm uninstall bootstrap
// remove the dependency from package.json and run npm install
// to run this just type node 1.intro.js on terminal and to stop the terminal its - ctrl + c
// Read big files -> create read streams
// make async cleaner -> use async await
// read and write files -> readFileSync, readFile, writeFileSync, writeFile in fs module
// Event driven program
// user clicks a button or hovers it - DOM here it is event driven rpogramming
// on- listen for an event
// emit - emit an event
// create servers using http module

// **********      const{}          *******
// const {} - it is ES6 destructuring assignment
// It means - const {function} = require{'module'} = import function from module 
// instead of writing
// we have an obj const obj = {name :"joe", age:"33"}
// old fashion java way -
// const name = obj.name
// const age = obj.age
// ES6 destructuring assignment, even if our object has 20 fields
// we just have to write names of those fields
// const {name, age} = obj;
// we can use name and age freely now

// ********** Creating server using http **************
// const http = require('http');
// const server = http.createServer((req,res)=>{})

// ************ modules export and import
// to export a module from a file so that it can be available in other files
// module.export
// ***Example***
// const myName = (name)=>{
//    console.log(`Hello! My name is ${name}`) }
//module.export = myName
// to import a module in a file 
// require()
// *** Example ***
// const myName = require('path')

// Get node ready
// npm init
// npm install
// npm install express