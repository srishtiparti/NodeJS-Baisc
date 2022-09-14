// Filter and sort the database

/******************************    express-async-errors   *********************************************************/

// For async wrapper we used - express-async-errors
// npm install express-async-errors
// import it in app.js
// require(express-async-errors)

/******************************    enum  *********************************************************/


// When we only want input from a fixed number of values we use enum
// eg -     company: {
//     type: string,
//     enum: {
//         values: ['ikea', 'marcos', 'liddy', 'caressa'],
//         message: '{VALUE} is not supported'
//     },
// }

/******************************    Populate the DB  *********************************************************/
// add all the data at once by using create
// const start = async() => {
//     try {
//         await connectDB(process.env.MONGO_URI);
//         await Product.deleteMany();
//         await Product.create(jsonProducts)
//         console.log('Success')
//         process.exit(0)
// //     }
// import the database and dotenv
//  Import connect and the data that needs to be sent.. check populate.js
// Basic find


/******************************    Basic Find *********************************************************/
// const products = await Product.find({ featured: true })
// res.status(200).json({ products, nbHits: product.length })

// using query params from url ->
// const products = await Product.find(req.query)
// In old mongodb, we used get errors if the key wasn't part of schema
// so we used to create query object
// if the queryObject was empty, we would return all values
//  however, if the key isn't present, mongoDB skips that element
// const { featured } = req.query
// const queryObject = {}
// if (featured) {
//     queryObject.featured = featured === 'true' ? true : false
// }

// const products = await Product.find(queryObject)

// ********* Name Query ******
// When entering someting, we want to return something that is clode, so we use MongoDb query operator (google it)
// we'll use regex -$regex case insensitive -    const search = 'a'
// const products = await Product.find({ name: { $regex: search, $options: 'i' } })

// ************* Sort ************************
// When sorting (ascending) = {{URL}}/products?sort=name
// When sorting (opposite) = {{URL}}/products?sort=-name
// When sorting more than one option - {{URL}}/products?sort=name,price
// In the code we'll use queries from mongoose
// Person.
//   find({
//     occupation: /host/,
//     'name.last': 'Ghost',
//     age: { $gt: 17, $lt: 66 },
//     likes: { $in: ['vaporizing', 'talking'] }
//   }).
//   limit(10).
//   sort({ occupation: -1 }).
//   select({ name: 1, occupation: 1 }).
//   exec(callback);

// When we want to sort, they are called together by user with the output object.
// We are awaiting output object first though
// Option 1- we'll have to remove the await
//     let result = Product.find(queryObject)
// if(sort){
//     products = product.sort()
// }
// const products = await result
// await gives back instant result, we don't want that, we want to sort first
// sort needs to be in the end
// let result = Product.find(queryObject)
// if (sort) {
//     const sortList = sort.split(',').join(' ')
//     result = result.sort(sortList)
// } else {
//     result = result.sort('createdAt')
// }
// const products = await result

/********************** Select Options ************************/
// Select fields -Only want to see certain fields
// const products = await Product.find({}).select('name price')
//     if (fields) {
//     const fieldList = fields.split(',').join(' ')
//     result = result.select(fieldList)
// }

/********************** Skip and limits ************************/
//  const products = await Product.find({}).sort('name')
// .select('name price')
// .limit(10)
// .skip(1)
//  Pagination - skipping to that page (we'll use skip and pagination)
//  This is how we create pages

/**********************  Numeric filter  *********************/