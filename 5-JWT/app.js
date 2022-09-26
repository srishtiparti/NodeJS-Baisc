require('dotenv').config();
require('express-async-errors');

const express = require('express');
const app = express();

const notFoundMiddleware = require('./5-JWT/middleware/not-found');
const errorHandlerMiddleware = require('./5-JWT/middleware/error-handler')
const routes = require('./5-JWT/routes/main')

// middleware
app.use(express.static('./5-JWT/public'));
app.use(express.json());
app.use('/api/v1', routes)

app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

const port = process.env.PORT || 3000;

const start = async() => {
    try {
        app.listen(port, () =>
            console.log(`Server is listening on port ${port}...`)
        );
    } catch (error) {
        console.log(error);
    }
};

start();