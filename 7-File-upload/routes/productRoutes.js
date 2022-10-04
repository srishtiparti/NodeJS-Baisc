const express = require('express')
const routes = express.Router()

const { createProduct, getAllProducts } = require('../controllers/productController')
const { uploadProduct } = require('../controllers/uploadsController')

routes.route('/').get(getAllProducts).post(createProduct)
routes.route('/uploads').post(uploadProduct)

module.exports = routes