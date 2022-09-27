const User = require('../models/User')
const { StatusCodes } = require("http-status-codes")
const { BadRequestError } = require('../errors')
const bcrypt = require('bcryptjs')

const register = async(req, res) => {
    /*
    // hashing in the body
    const { username, email, password } = req.body

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt)

    const tempUser = { username, email, password: hashedPassword }

    // const user = await User.create(req.body)
    // for mongoose to do validation
    const user = await User.create({...tempUser }) */

    const user = await User.create({...req.body })

    res.status(StatusCodes.CREATED).json(user)
}

const login = async(req, res) => {
    res.send('login user')
}

module.exports = {
    register,
    login
}