// Async -> Blocking code
// Blocking code is the code that is synchronous piece of code in a async application
// Example for loop
// The other users can't load the page until the user with loop has accessed the page
// Example setTimer

// create server
const http = require('http')

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.end('Home Page')
    }
    if (req.url === '/about') {
        // Blocking code
        for (let i = 0; i < 1000; i++) {
            for (let j = 0; j < 1000; j++) {
                console.log(`${i}  ${j}`)
            }
        }
        // even the home page users were not able to load the page until the blocking code user - about user loaded the pages
    }
    console.log("server initiated")
    res.end("start server")
})

server.listen(5000, () => {
    console.log("Local port : 5000")
})


// Lets Fix it