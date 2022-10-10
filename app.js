require('dotenv').config();
require('express-async-errors');

const express = require('express');
const app = express();

const notFoundMiddleware = require('./8-send-email/middleware/not-found');
const errorHandlerMiddleware = require('./8-send-email/middleware/error-handler');

const { sendEmail } = require('./8-send-email/controllers/sendEmail')
    // middleware
app.use(express.json());

// routes
app.get('/', (req, res) => {
    res.send('<h1>Email Project</h1> <a href="/send">send email</a>');
});

app.get('/send', sendEmail)

app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);


const port = 3000;

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