const { StatusCodes } = require('http-status-codes')

const uploadProduct = async(req, res) => {
    res.send('upload product image')
}


module.exports = { uploadProduct }