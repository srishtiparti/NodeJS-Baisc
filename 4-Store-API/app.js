const express = require('express')
const app = express()
const products = require('./4-Store-API/routes/products')
const notFound = require('./4-Store-API/middleware/not-found')
const errorHandlerMiddleware = require('./4-Store-API/middleware/error-handler')
require('express-async-errors')


/***********************  Database  ******************************************/
const connectDB = require('./3-projects-frontend/db/connect')
require('dotenv').config()

/***********************  Middleware  ******************************************/
app.use(express.json())
    // for 404 error
    //app.use(notFound)
    // for 500 error
app.use(errorHandlerMiddleware)

/***********************  Routes  ******************************************/
app.use('/api/v1/products', products)
port = 3000

/***********************  Connecting to DB first before listening  ******************************************/
const start = async() => {
    try {
        await connectDB(process.env.MONGO_URI);
        app.listen(port, () =>
            console.log(`Server is listening on port ${port}...`)
        );
    } catch (error) {
        console.log(error);
    }
};

start()