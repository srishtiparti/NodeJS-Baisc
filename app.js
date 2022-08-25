const express = require('express')
const app = express();
const tasks = require('./1-Project-Task-Manager/routes/task')

// Setting up port value
// const port = process.env.PORT || 3000
const port = 3000


const connectDB = require('./1-Project-Task-Manager/starter/DB/connect')
require('dotenv').config()
const notFound = require('./1-Project-Task-Manager/starter/middleware/not-found')
const errorHandlerMiddleware = require('./1-Project-Task-Manager/starter/middleware/error-handler')
    // middleware
app.use(express.json())
app.use(express.static('./1-Project-Task-Manager/starter/public'))

// routes
app.use('/api/v1/tasks', tasks)

// handling 404 errors
app.use(notFound)
app.use(errorHandlerMiddleware)

const start = async() => {
    try {
        await connectDB(process.env.MONGO_URI)
        app.listen(port, console.log(`server is listening on port ${port} `))
        app
    } catch (error) {
        console.log(error)
    }
}

start()