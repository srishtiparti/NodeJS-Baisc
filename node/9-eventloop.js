// Event Loop- non-blocking I/O operations by offloading operations
// to the system even though JS is single threaded and synchronous 
// run the immediate code first and then execute the callback

// Suppose for an app there are multiple users and they want something from the database
// In Threaded system, until 1st user request is finished, it cannot go to the next user
// By event loop we take in the request of all users and then proceed with callback functions

// Example 1 async callback 

const { readFile } = require('fs')

console.log('started a first task')
    // started the first task

readFile('./content/first.txt', 'utf8', (err, result) => {
    if (err) {
        console.log(err)
        return
    }
    // callback
    console.log(result)
    console.log('completed the first task')
})
console.log('starting next task')


// Example 2 Async
// started operating system process call back function
console.log('first')

// setTimeout is a async function
setTimeout(() => {
    console.log('second') //callback
}, 0)
console.log('third')

// Example 3 Sync 
// setInterval is synchronous
setInterval(() => {
    console.log("I will run first")
}, 2000)
console.log('I will run next') //never gets executed

// Example 4 Async callback
// Let's create a server

const http = require('http')

// This will be the callback
const server = http.createServer((req, res) => {
    console.log("request event")
    res.end("It was requested")
})

// listening is async
server.listen(5000, () => {
    console.log('Server listening on the port : 5000')
})