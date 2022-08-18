const express = require('express');
const app = express()
const { notes } = require('./project-Notes-Axios/notes')

app.use(express.static("./project-Notes-Axios"))
    // parse json
app.use(express.json())
    // get the data from data.js on javascript
app.get('/api/notes', (req, res) => {
    console.log(notes)
    res.status(200).json({ success: true, data: notes })
})
app.listen(5001, () => {
    console.log("Port is 5009")
})