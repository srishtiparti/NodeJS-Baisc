const express = require('express')
const app = express()
const main = require('./5-JWT/routes/main')
const notFound = require('./5-JWT/middleware/not-found')
const errorHandlerMiddleware = require('./4-Store-API/middleware/error-handler')
require('express-async-errors')

app.use(express.static('./5-JWT/public'))
port = 3000

app.listen(3000)