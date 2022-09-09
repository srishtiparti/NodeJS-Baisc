const express = require('express')
const app = express()
const books = require('./3-projects-frontend/routes/task')
const notFound = require('./3-projects-frontend/middleware/not-found')
const errorHandlerMiddleware = require('./3-projects-frontend/middleware/errorHandler')


/***********************  Database  ******************************************/
const connectDB = require('./3-projects-frontend/DB/connect')
require('dotenv').config()

/***********************  Middleware  ******************************************/
app.use(express.static('./3-projects-frontend/public'))
app.use(express.json())
    // for 404 error
    //app.use(notFound)
    // for 500 error
app.use(errorHandlerMiddleware)

/***********************  Routes  ******************************************/
app.use('/api/v1', books)
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