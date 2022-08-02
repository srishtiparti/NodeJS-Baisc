// HTTP - server side module

const http = require('http');

const server = http.createServer((req, res) => {
    // url property the client is requesting
    // console.log(req)
    if (req.url === '/') {
        res.end('Welcome to our home page')
    } else if (req.url === '/about') {
        res.end('hope you found what you were looking for')
    } else {
        res.write('OOPS')
        res.end()
    }
    // res.write('Welcome to our home page')
    // res.end()
})

server.listen(5000)