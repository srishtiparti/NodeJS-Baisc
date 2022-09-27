require('dotenv').config();
require('express-async-errors');

const express = require('express');
const app = express();

const notFoundMiddleware = require('./6-Jobs-api/middleware/not-found');
const errorHandlerMiddleware = require('./6-Jobs-api/middleware/error-handler')
const jobsRouter = require('./6-Jobs-api/routes/jobs')
const authRouter = require('./6-Jobs-api/routes/auth')
const connectDB = require('./6-Jobs-api/db/connect');


// middleware
app.use(express.json());
app.use('/api/v1/auth', authRouter)
app.use('/api/v1/jobs', jobsRouter)

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