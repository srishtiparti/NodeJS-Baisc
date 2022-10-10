require('dotenv').config();
require('express-async-errors');

const express = require('express');
const app = express();

const fileUpload = require('express-fileupload')
const cloudinary = require('cloudinary').v2
cloudinary.config({
    cloud_name: process.env.cloud_name,
    api_key: process.env.api_key,
    api_secret: process.env.api_secret
})

// database
const connectDB = require('./7-File-upload/db/connect');

// product router

const productRouter = require('./7-File-upload/routes/productRoutes')

// error handler
const notFoundMiddleware = require('./7-File-upload/middleware/not-found');
const errorHandlerMiddleware = require('./7-File-upload/middleware/error-handler');

app.use(express.json());
app.use(express.static('./7-File-upload/public'))
app.use(fileUpload())
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