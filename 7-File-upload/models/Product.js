const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please provide a name']
    },
    price: {
        type: String,
        required: [true, 'Please provide a price']
    },
    image: {
        type: String,
        required: [true, 'Please provide image']
    }
})

module.exports = mongoose.model('Product', ProductSchema)