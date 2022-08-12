const express = require("express");
const app = express()

//  example 1. with just adding function won't load the page. You'll get the the data in console but not on browser
// MIDDLEWARE NEEDS TO SEND RESPONSE
function logger(req, res, next) {
    const method = req.method
    const url = req.url
    const time = new Date().getFullYear()
    console.log(method, url, time)
        // res.send('Testing') // we don't want to display this on though
    next() //lets pass it to next response
}
// add the function to all urls

app.get('/', logger, (req, res) => {
    res.send('Home')
})
app.get('/about', logger, (req, res) => {
    res.send('ABOUT')
})

app.listen(5005, () => {
    console.log('Server is listening to port 5000');
})