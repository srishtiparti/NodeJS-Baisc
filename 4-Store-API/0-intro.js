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