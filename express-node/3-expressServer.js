// import express module. ike we used to import http
const express = require('express');
// invoke express

const app = express()

// similar to createserver
app.get('/', (req, res) => {
    res.status(200).send('HomePage')
})

app.get('/about', (req, res) => {
    res.status(200).send("About Page")
})

app.all('*', (req, res) => {
    res.status(404).send("<h1>Resource not found <h2>")
})
app.listen(5000, () => {
    console.log("server listening on port 5000")
})