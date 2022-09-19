const express = require('express')
const app = express()
const routes = require('./5-JWT/routes/main')

require('express-async-errors')
const notFoundMiddleware = require('./5-JWT/middleware/not-found');
const errorHandlerMiddleware = require('./5-JWT/middleware/error-handler');

// middleware
app.use(express.static('./public'));
app.use(express.json());

app.use('/api/v1', routes)
app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

port = 3000

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