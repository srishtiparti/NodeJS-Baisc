// Steams Http

var http = require('http')
var fs = require('fs')

const server = http.createServer(function(req, res) {
    // Size is 2.2 MB not the best size to send
    // const text = fs.readFileSync('./content/big.txt', 'utf8')
    //     res.end(text)

    const fileStream = fs.createReadStream('./content/big.txt', 'utf8')
    fileStream.on('open', () => {
        // Transfer-Encoding: chunked check header in network->local host
        // reading the data in chunks and writing them in chunks
        fileStream.pipe(res)
    })
    fileStream.on('error', (err) => {
        res.end(err)
    })
})
server.listen(5000)