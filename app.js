const express = require('express')
const app = express()
const books = require('./2-Project-Bookclub/routes/task')

/***********************  Database  ******************************************/
const connectDB = require('./2-Project-Bookclub/DB/connectDB')
require('dotenv').config()

/***********************  Port  ******************************************/
const port = 6000

/***********************  Middleware  ******************************************/
app.use(express.json())
app.use(express.static('./2-Project-Bookclub/public'))


/***********************  Routes  ******************************************/
app.use('/api/v1/books', books)


/***********************  Connecting to DB first before listening  ******************************************/
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