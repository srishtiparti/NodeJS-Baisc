const express = require('express')
const app = express();
const tasks = require('./1-Project-Task-Manager/routes/task')
const port = 3000

const connectDB = require('./1-Project-Task-Manager/starter/DB/connect')
require('dotenv').config()

// middleware
app.use(express.json())
app.use(express.static('./1-Project-Task-Manager/starter/public'))

// routes
app.use('/api/v1/tasks', tasks)

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