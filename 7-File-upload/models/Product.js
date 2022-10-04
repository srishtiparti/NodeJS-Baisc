const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    name: {
        type: String,
        require: [true, 'Please provide a name']
    },
    price: {
        type: String,
        require: [true, 'Please provide a price']
    },
    image: {
        type: String,
        require: [true, 'Please provide image']
    }
})

module.exports = mongoose.model('Product', ProductSchema)