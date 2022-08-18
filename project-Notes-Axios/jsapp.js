const express = require('express');
const app = express()
const notes = require('./project-Notes-Axios/notes')

app.use(express.static("./project-Notes-Axios"))

app.listen(5009, () => {
    console.log("Port is 5009")
})