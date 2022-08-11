const express = require("express");
// In order to get navbar folder
const path = require('path');
const app = express();

// setup static and middleware
// static means a file/folder that server doesn't have to change
// move all the files except for the index file in public
app.use(express.static('./public'))
app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, './express-node/Nav-bar/index.html'))
})

app.all("*", (req, res) => {
    res.status(400).send("Resource not found")
})

app.listen(5000, () => {
    console.log('Port is 5000')
})