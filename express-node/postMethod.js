const express = require("express");
const app = express()
const { people } = require('./data')

// static assets
app.use(express.static('./methods-public'))
    // parse form data
app.use(express.urlencoded({ extended: false }))

app.post('/login', (req, res) => {
    const { name } = req.body;
    if (name) {
        return res.status(200).send(`Welcome ${name}`)
    } else {
        res.send('Need credentials')
    }
})

app.listen(5005, () => {
    console.log('Server is listening to port 5005');
})