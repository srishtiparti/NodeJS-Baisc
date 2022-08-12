const express = require("express");
const app = express()
const { products } = require('./data')

app.get('/api/v1/query', (req, res) => {
    console.log(req.query)
    const { search, limit } = req.query
    let sortedProducts = [...products];
    if (search) {
        sortedProducts = sortedProducts.filter((products) => {
            return products.name.startsWith(search)
        })
    }
    if (limit) {
        sortedProducts = sortedProducts.slice(limit)
    }
    if (sortedProducts.length < 1) {
        // server giving error
        // res.status(200).send("Couldn't find any products")
        return res.status(200).json({ success: true, data: [] })
    }
    res.status(200).json(sortedProducts)
})

app.all('*', (req, res) => {
    res.status(404).send("Error 404. No Page Found")
})
app.listen(5000, () => {
    console.log('Server is listening to port 5000');
})