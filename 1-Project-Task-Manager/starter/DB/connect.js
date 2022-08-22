// Connect to DB first - use refractor

const mongoose = require('mongoose')

const connectionString = 'mongodb+srv://Srishti:Casper%402017@atlascluster.6aosdyz.mongodb.net/Task-Manager?retryWrites=true&w=majority'
    //mongodb+srv://Srishti:<password>@atlascluster.6aosdyz.mongodb.net/?retryWrites=true&w=majority

const connectDB = (url) => {
    return mongoose.connect(connectionString)
}

// mongoose.connect(connectionString)
// .then(() => console.log('Connected to DB'))
// .catch((err) => console.log(err))

module.exports = connectDB