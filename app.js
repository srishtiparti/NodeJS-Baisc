const express = require('express')
const app = express()
const books = require('./2-Project-Bookclub/routes/task')
const notFound = require('./2-Project-Bookclub/middleware/not-found')
const errorHandlerMiddleware = require('./2-Project-Bookclub/middleware/errorHandler')


/***********************  Database  ******************************************/
const connectDB = require('./2-Project-Bookclub/DB/connectDB')
require('dotenv').config()

/***********************  Middleware  ******************************************/
app.use(express.static('./2-Project-Bookclub/public'))
app.use(express.json())
    // for 404 error
    //app.use(notFound)
    // for 500 error
app.use(errorHandlerMiddleware)

/***********************  Routes  ******************************************/
app.use('/api/v1/books', books)
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