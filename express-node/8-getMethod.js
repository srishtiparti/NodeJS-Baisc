const express = require("express");
const app = express()
const { people } = require('./data')


// get methods - insert data
app.get('/api/people', (req, res) => {
    res.status(200).json({ success: 'true', data: people })
})

app.listen(5005, () => {
    console.log('Server is listening to port 5005');
})