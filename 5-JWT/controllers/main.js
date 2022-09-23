const jwt = require('jsonwebtoken')
const { BadRequestError, UnauthenticatedError } = require('../errors')

const login = async(req, res) => {
    const { username, password } = req.body
    if (!username || !password) {
        throw new BadRequestError('Please provide email and password')
    }
    // provided by DB
    const id = new Date().getDate()
        // payload/object - what we want to display - try to keep payload small
        // the secret needs to be long and complex, hard to guess
    const token = jwt.sign({ id, username }, process.env.JWT_SECRET, { expiresIn: '30d' })

    res.status(200).json({ msg: "user created", token })
}

const dashboard = async(req, res) => {
    console.log(req.user)
    const luckyNumber = Math.floor(Math.random() * 100)
    res.status(200).json({ msg: `Hello ${req.user.username}`, secret: `Your secret number is ${luckyNumber}` })


}

module.exports = { login, dashboard }