const express = require('express')
const app = express();
const tasks = require('./1-Project-Task-Manager/routes/task')
const port = 3000

const connectDB = require('./1-Project-Task-Manager/starter/DB/connect')


// middleware
app.use(express.json())
    // app.use(express.static('./1-Project-Task-Manager/'))

app.use('/api/v1/tasks', tasks)

const start = async() => {
    try {
        await connectDB()
        app.listen(port, console.log(`server is listening on port ${port} `))
        app
    } catch (error) {
        console.log(error)
    }
}

start()