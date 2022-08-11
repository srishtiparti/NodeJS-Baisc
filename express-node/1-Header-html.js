// Header

const http = require('http');
const { readFileSync } = require('fs');

// getting the homepage
const homePage = readFileSync('./express-node/Nav-bar/index.html')
const home = readFileSync('./express-node/html-files/index.html')

const server = http.createServer((req, res) => {

        // (statuscode,MIME types)
        // res.writeHead(200, { 'content-type': 'text/plain' })
        // console.log(req.url);
        // console.log(req.method)


        const url = req.url;
        // user req homepage
        if (url === '/') {
            // it only gives html we are noy handling /styles / js etc.
            res.writeHead(200, { 'content-type': 'text/html' })
            res.write(homePage)
            res.end()
        } else if (url === '/home') {
            res.writeHead(200, { 'content-type': 'text/html' })
            res.write(home)
            res.end()
        }

        // user req about page
        else if (url === '/about') {
            res.writeHead(200, { 'content-type': 'text/plain' })
            res.write("this is just plain")
            res.end()
        }

        // 404
        else {
            res.writeHead(404, { 'content-type': 'text/html' })
            res.write("<h1>This page doesn't exist</h1>")
            res.end()
        }

    })
    //  check ports on wikipidea. specific ports for specific function
server.listen(5000)
console.log("port is 5000")