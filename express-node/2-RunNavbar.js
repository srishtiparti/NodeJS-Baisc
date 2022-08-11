// Header

const http = require('http');
const { readFileSync } = require('fs');

// we have to put all the links - too much work
// getting the homepage
const homePage = readFileSync('./express-node/Nav-bar/index.html')
const homeStyle = readFileSync('./express-node/Nav-bar/navbar.css')
const homeImage = readFileSync('./express-node/Nav-bar/images/logo.webp')
const homeImagefb = readFileSync('./express-node/Nav-bar/images/facebook.png')
const homeImaget = readFileSync('./express-node/Nav-bar/images/twitter.png')
const homeImagel = readFileSync('./express-node/Nav-bar/images/linkedin.png')
const homeImageI = readFileSync('./express-node/Nav-bar/images/instagram.png')

const homeLogic = readFileSync('./express-node/Nav-bar/navbar.js')



const server = http.createServer((req, res) => {

        const url = req.url;

        // user req homepage
        if (url === '/') {
            // it only gives html we are noy handling /styles / js etc.
            res.writeHead(200, { 'content-type': 'text/html' })
            res.write(homePage)
            res.end()

        }

        // add style
        else if (url === '/navbar.css') {
            res.writeHead(200, { 'content-type': 'text/css' })
            res.write(homeStyle)
            res.end()
        }

        // add image
        else if (url === '/images/logo.webp') {
            res.writeHead(200, { 'content-type': 'image/webp' })
            res.write(homeImage)
            res.end()
        }

        // images/facebook.png" 
        else if (url === '/images/facebook.png') {
            res.writeHead(200, { 'content-type': 'image/png' })
            res.write(homeImagefb)
            res.end()
        }
        // images/twitter.png" 
        else if (url === '/images/twitter.png') {
            res.writeHead(200, { 'content-type': 'image/png' })
            res.write(homeImaget)
            res.end()
        }
        // images/linkedin.png" 
        else if (url === '/images/linkedin.png') {
            res.writeHead(200, { 'content-type': 'image/png' })
            res.write(homeImagel)
            res.end()
        }
        // images/instagram.png" 
        else if (url === '/images/instagram.png') {
            res.writeHead(200, { 'content-type': 'image/png' })
            res.write(homeImageI)
            res.end()
        }

        // user req about page
        else if (url === '/navbar.js') {
            res.writeHead(200, { 'content-type': 'text/js' })
            res.write(homeLogic)
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