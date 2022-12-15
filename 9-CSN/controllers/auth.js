const User = require("../models/User")
const Insurer = require("../models/Insurer")
const jwt = require('jsonwebtoken')

// Checking login credentials 
const login = async(req, res) => {
    try {
        const { username, password, model, insurer } = req.body

        // making sure all fields are present
        if (!username && !password && !model && !insurer) {
            res.status(400).json({ msg: "Please provide all info" })
        }
        // checking if licensee is present
        const user = await User.findOne(({ username: username }))
            // checking password
        if (user && password == user.password) {
            const token = jwt.sign({ username, model, insurer }, process.env.JWT_SECRET, { expiresIn: '20d' })
            res.status(200).json(token)
        } else {
            res.status(401).json({ msg: "Invalid username or password" })
        }
    } catch (error) {
        res.status(500).json({ msg: error })

    }

}

const displayusers = async(req, res) => {
    try {
        const user = await User.find({})
        res.status(200).json({ user })
    } catch (error) {
        res.status(500).json({ msg: error })
    }
}

// Displaying the price for repair
const getInsurers = async(req, res) => {

    // checking if its an authenticated user

    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        res.status(401).json('No Token provided', 401)
    }
    try {

        const token = authHeader.split(' ')[1]
        const decoded = jwt.verify(token, process.env.JWT_SECRET)
        const { username, model, insurer } = decoded
        const licensee = await User.findOne({ username })
        const allModels = String(licensee).split('Certifications:')[1].toLowerCase()

        let data = await Insurer.findOne({ Insurer: insurer })

        // checking if insurer is present in DB
        if (!data) {
            res.status(404).json({ msg: "Please check the insurer" })
        } else {

            // If the licensee does not have a certificate for the model
            if (model.length == 0 || !allModels.includes(model.toLowerCase())) {

                res.status(200).json({ data })
            }

            // If the licensee has certificate for the model
            else {
                const { _id, Paint, Mechanical, Bodywork } = data
                paintPrice = parseFloat(Paint) * 1.10;
                mechanicalPrice = parseFloat(Mechanical) * 1.10;
                bodyworkPrice = parseFloat(Bodywork) * 1.10

                data = {
                    model: model,
                    insurer: insurer,
                    _id: _id,
                    Insurer: insurer,
                    Paint: paintPrice,
                    Mechanical: mechanicalPrice,
                    Bodywork: bodyworkPrice
                }
                res.status(200).json({ data })

            }
        }
    } catch (error) {
        res.status(500).json({ msg: error })

    }

}

const createInsurer = async(req, res) => {
    try {

        const insurer = await Insurer.create(req.body)
        res.status(201).json({ insurer })
    } catch (error) {
        res.status(500).json({ msg: error })
    }

}

module.exports = { login, getInsurers }