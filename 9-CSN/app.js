require('dotenv').config();
require('express-async-errors');

const express = require('express');
const app = express();

const connectDB = require('./9-CSN/DB/connect')
const notFoundMiddleware = require('./9-CSN/middleware/not-found');
const errorHandlerMiddleware = require('./9-CSN/middleware/error-handler')
const routes = require('./9-CSN/routes/auth')

// middleware
app.use(express.static('./9-CSN/public'));
app.use(express.json());
app.use('/api/v1', routes)

app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

const port = process.env.PORT || 3000;

const start = async() => {
    try {
        await connectDB(process.env.MONGO_URI)
        app.listen(port, () => {
            console.log(`connected to port ${port}`)
        })
    } catch (error) {
        console.log(error);
    }
};

start();