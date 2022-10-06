const path = require('path')
const { StatusCodes } = require('http-status-codes')
const CustomError = require('../errors')
const cloudinary = require('cloudinary').v2
const fs = require('fs')

const uploadProductLocal = async(req, res) => {
    if (!req.files) {
        throw new CustomError.BadRequestError('No file Uploaded')
    }
    let productImage = req.files.image;
    if (!productImage.mimetype.startsWith('image')) {
        throw new CustomError.BadRequestError('Please upload an image')
    }
    const maxSize = 1024 * 1024
    if (productImage.size > maxSize) {
        throw new CustomError.BadRequestError('Please upload smaller image')
    }
    console.log(req.files.image)
    const imagePath = path.join(__dirname, '../public/uploads/' + `${productImage.name}`)
    await productImage.mv(imagePath)
    res.status(StatusCodes.OK)
        .json({ image: { src: `uploads/${productImage.name}` } })
}

const uploadProduct = async(req, res) => {
    let productImage = req.files.image;
    const imagePath = path.join(__dirname, '../public/uploads/' + `${productImage.name}`)
    await productImage.mv(imagePath)
    const result = await cloudinary.uploader.upload(imagePath, {
            use_filename: true
        })
        // not storing in the local anymore
    fs.unlinkSync(imagePath)
    return res.status(StatusCodes.OK).json({ image: { src: result.secure_url } })
}

module.exports = { uploadProduct }