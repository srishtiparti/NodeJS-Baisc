const express = require("express");
const app = express()
const logger = require('./express-node/7-logger')
const authorize = require('./express-node/7-authorize')

// aPply it to all urls
app.use([logger, authorize])
app.get('/', (req, res) => {
    console.log(req.user)
    res.send('Home')
})
app.get('/about', (req, res) => {
    res.send('ABOUT')
})

app.get('/api.items', [logger, authorize], (req, res) => {
    res.send('ABOUT')
})

app.listen(5005, () => {
    console.log('Server is listening to port 5000');
})