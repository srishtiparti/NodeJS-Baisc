const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [true, 'Username must be provided'],
        minlength: 3,
        maxlength: 50
    },
    email: {
        type: String,
        required: [true, 'Username must be email'],
        main: [/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/, 'Please provide a valid email'],
        unique: true,
    },
    password: {
        type: String,
        required: [true, 'Password must be provided'],
        minlength: 3,
    }
})

userSchema.pre('save', async function() {
    const salt = await bcrypt.genSalt(10)
    this.password = await bcrypt.hash(this.password, salt)
})

userSchema.methods.createJWT = function() {
    return jwt.sign({ userId: this._id, name: this.username, email: this.email }, process.env.JWT_SECRET, { expiresIn: process.env.JWT_LIFETIME, })
}
module.exports = mongoose.model('User', userSchema)