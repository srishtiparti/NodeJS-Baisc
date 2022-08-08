// Event Emitter server
// Event Emitter API
const http = require('http');

// const server = http.createServer((req,res)=>{
//     res.end("Welcome")
// })

// 'Using Event emitter API
// emit request event
// subscribe to it / listen to it/ respond to it
const server = http.createServer()
server.on('request', (req, res) => {
    res.end('welcome')
})
server.listen(5000)