const express = require('express');
const { identity } = require('lodash');
const app = express()
const { notes } = require('./project-Notes-Axios/notes')

app.use(express.static("./project-Notes-Axios"))
    // parse json
app.use(express.json())
    // get the data from data.js on javascript
app.get('/api/notes', (req, res) => {
    res.status(200).json({ success: true, data: notes })
})
app.post('/api/notes', (req, res) => {

    const { data } = req.body
    console.log(data)
    if (!data) {
        res.status(400).json({ success: false, msg: "Please enter new task" })
    }
    res.status(200).json({ success: true, task: data })

})
app.listen(5001, () => {
    console.log("Port is 5001")
})