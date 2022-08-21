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

app.put('/api/people/:id', (req, res) => {
    const { id } = req.params
    const { name } = req.body

    const person = people.find((person) => person.id === Number(id))

    if (!person) {
        return res.status(404)
            .json({ success: false, msg: `no person exist with id ${id}` })
    }
    const newPeople = people.map((person) => {
        if (person.id === Number(id)) {
            person.name = name
        }
        return person
    })
    res.status(200)
        .json({ success: true, data: newPeople })
})


app.delete('/api/people/:id', (req, res) => {
    const person = people.find((person) => person.id === Number(req.params.id))
    if (!person) {
        return res.status(404)
            .json({ success: false, msg: `no person exist with id ${req.params.id}` })
    }
    const newPeople = people.filter((person) => person.id !== Number(req.params.id))
    res.status(200)
        .json({ success: true, data: newPeople })
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