const jwt = require('jsonwebtoken')
const { UnauthenticatedError } = require('../errors')


const authorization = async(req, res, next) => {
    const authHeader = req.headers.authorization
    if (!authHeader || authHeader.split(' ')[0] !== 'Bearer') {
        throw new UnauthenticatedError('Unauthorized route')
    }
    const token = authHeader.split(' ')[1]

    try {
        const payload = jwt.verify(token, process.env.JWT_SECRET)
            // check the model to see what jwt token has for payload
        req.user = { userId: payload.userId, username: payload.name }
    } catch (error) {
        throw new UnauthenticatedError('Unauthorized route')

    }
    next()
}

module.exports = authorization