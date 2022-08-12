const express = require("express");
const app = express()
const logger = require('./logger')

// aPply it to all urls
app.use(logger)
app.get('/', logger, (req, res) => {
    res.send('Home')
})
app.get('/about', logger, (req, res) => {
    res.send('ABOUT')
})

app.listen(5005, () => {
    console.log('Server is listening to port 5000');
})