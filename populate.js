const connectDB = require('./4-Store-API/db/connect')
require('dotenv').config()

const Product = require('./4-Store-API/models/product')

const jsonProducts = require('./products.json')

const start = async() => {
    try {
        await connectDB(process.env.MONGO_URI);
        await Product.deleteMany();
        await Product.create(jsonProducts)
        console.log('Success')
        process.exit(0)
    } catch (error) {
        console.log(error)
        process.exit(1)
    }
}

start()