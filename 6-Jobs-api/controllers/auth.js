const User = require('../models/User')
const { StatusCodes } = require("http-status-codes")
const { BadRequestError, UnauthenticatedError } = require('../errors')

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

    // Token
    const user = await User.create({...req.body })
    const token = user.createJWT()

    res.status(StatusCodes.CREATED).json({ user: { name: user.username }, token })
}

const login = async(req, res) => {
    const { email, password } = req.body
    if (!email || !password) {
        throw new BadRequestError('Please provide email and password')
    }
    const user = await User.findOne({ email: email })
    if (!user) {
        throw new UnauthenticatedError('Invalid Credentials')
    }
    const token = user.createJWT();
    res.status(StatusCodes.CREATED).json({ user: { name: user.username }, token })

}

module.exports = {
    register,
    login
}