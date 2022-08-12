const express = require("express");
const app = express()
const { products } = require('./data')

app.get('/', (req, res) => {
    res.send('<h1>Home Page</h1> <a href="/api/products">products</a>')
})

app.get('/api/products', (req, res) => {
    const newProducts = products.map((product) => {
        const { id, name, image } = product;
        return { id, name, image }
    })
    res.json(newProducts)
})

app.get('/api/products/1', (req, res) => {
    const singleProduct = products.find((product) => {
        if (product.id === 1) {
            const { id, name, image } = product;
            return { id, name, image }
        }
    })
    res.json(singleProduct)
})

app.get('/api/products/2', (req, res) => {
    const secondProduct = products.find((product) => product.id === 2)
    res.json(secondProduct)
})

app.get('/api/products/:productID', (req, res) => {
    // console.log(req);
    // console.log(req.params);
    const { productID } = req.params
    const productInfo = products.find((product) => product.id === Number(productID))
    if (!productInfo) {

        res.status(404).send("Product doesn't exist")
    }
    res.json(productInfo)

})

app.all('*', (req, res) => {
    res.status(404).send("Error 404. No Page Found")
})
app.listen(5000, () => {
    console.log(('Server is listening to port 5000'));
})