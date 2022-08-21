// Set up Routers

const express = require("express");
const app = express()

const people = require('./express-node/routes/people')
const login = require('./express-node/routes/auth')
    // static assets
app.use(express.static('./methods-public'))

// parse json
app.use(express.json())

app.use('/api/people', people)
app.use('/login', login)


app.listen(5020, () => {
    console.log('Server is listening to port 5020');
})