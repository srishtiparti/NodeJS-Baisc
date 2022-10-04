require('dotenv').config();
require('express-async-errors');

const express = require('express');
const app = express();

const notFoundMiddleware = require('./6-Jobs-api/middleware/not-found');
const errorHandlerMiddleware = require('./6-Jobs-api/middleware/error-handler')
const jobsRouter = require('./6-Jobs-api/routes/jobs')
const authRouter = require('./6-Jobs-api/routes/auth')
const connectDB = require('./6-Jobs-api/db/connect');
const authenticateUser = require('./6-Jobs-api/middleware/authentication')

// extra security packages

const helmet = require('helmet')
const cors = require('cors')
const xss = require('xss-clean')
const rateLimiter = require('express-rate-limit')

app.use('/api/v1/auth', authRouter)
app.use('/api/v1/jobs', authenticateUser, jobsRouter)


// middleware
app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

app.use(express.json());
app.set('trust proxy', 1)
app.use(rateLimiter({
    windowMs: 15 * 60 * 1000, // 15 minutes,
    max: 100 //limits each ip to 100 requests per windowMs
}));
app.use(helmet());
app.use(cors());
app.use(xss());


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