const product = require('../models/product')
const Product = require('../models/product')

const getAllProductsStatic = async(req, res) => {
    const search = 'bar'
    const products = await Product.find({ price: { $gt: 30 } }).sort('price')
        .select('name price')
        .limit(10)
        .skip(1)
    res.status(200).json({ products, nbHits: product.length })

}

const getAllProducts = async(req, res) => {
    const { featured, company, name, sort, fields, numericFilters } = req.query
    const queryObject = {}
    if (featured) {
        queryObject.featured = featured === 'true' ? true : false
    }
    if (company) {
        queryObject.company = company
    }
    if (name) {
        queryObject.name = { $regex: name, $options: 'i' }
    }
    if (numericFilters) {
        const operatorMap = {
            '>': '$gt',
            '>=': '$gte',
            '=': '$eq',
            '<': '$lt',
            '<=': '$lte',
        }
        const regEx = /\b(<|>|>=|=|<|<=)\b/g
        let filters = numericFilters.replace(
            regEx,
            (match) => `-${operatorMap[match]}-`)
        const options = ['price', 'rating'];
        filters = filters.split(',').forEach((item) => {
            const [field, operator, value] = item.split('-')
            if (options.includes(fields)) {
                queryObject[field] = {
                    [operator]: Number(value)
                }
            }
        })
    }
    let result = Product.find(queryObject)
        // Sorting
    if (sort) {
        const sortList = sort.split(',').join(' ')
        result = result.sort(sortList)
    } else {
        result = result.sort('createdAt')
    }

    // Selecting the data that needs to be shown
    if (fields) {
        const fieldList = fields.split(',').join(' ')
        result = result.select(fieldList)
    }
    const page = Number(req.query.page) || 1
    const limit = Number(req.query.limit) || 10
    const skip = (page - 1) * limit

    result = result.skip(skip).limit(limit)

    //  we have 23 items and the limit is 7
    // There will be 4 pages with items 7,7,7,2

    const products = await result
    res.status(200).json({ products, nbHits: product.length })

}

module.exports = { getAllProducts, getAllProductsStatic }