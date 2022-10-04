require('dotenv').config();
require('express-async-errors');

const express = require('express');
const app = express();

// database
const connectDB = require('./7-File-upload/db/connect');

// product router

const productRouter = require('./7-File-upload/routes/productRoutes')

// error handler
const notFoundMiddleware = require('./7-File-upload/middleware/not-found');
const errorHandlerMiddleware = require('./7-File-upload/middleware/error-handler');

app.use(express.json());


app.use('/api/v1/products', productRouter)
    // middleware
app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

const port = 3000;

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

start();