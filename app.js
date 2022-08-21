const express = require("express");
const app = express()
const { people } = require('./data')

// static assets
app.use(express.static('./methods-public'))

// parse json
app.use(express.json())
    // get the data from data.js on javascript

app.get('/api/people', (req, res) => {
        res.status(200).json({ success: true, data: people })
    })
    // post the updated data on javascript

app.post("/api/people", (req, res) => {
    const { name } = req.body
    console.log(req.params)
    if (!name) {
        res.status(400).json({ success: false, msg: 'please provide a name' })
    }
    res.status(201).json({ success: true, person: name })
})

// using postman to test the api
// add the new name in the database that is printed

app.post('/api/postman/people', (req, res) => {
        const { name } = req.body
        if (!name) {
            res.status(400).json({ success: false, msg: "Please enter a name" })
        }
        res.status(201).json({ success: true, data: [...people, name] })
    })
    // put method

app.put('/api/people/:id', (res, req) => {
    console.log(req.params)
    console.log("id, name")
})



app.post('/login', (req, res) => {
    const { name } = req.body;
    if (name) {
        return res.status(200).send(`Welcome ${name}`)
    } else {
        res.send('Need credentials')
    }
})

app.listen(5020, () => {
    console.log('Server is listening to port 5020');
})