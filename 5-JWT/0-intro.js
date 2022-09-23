// Check for username, password in post (login) request
//  if exist create new JWT
// send back to front-end
//  only the request with jwt can access the dashboard

// JSON Web Token (JWT) is an open standard (RFC 7519) that defines a compact and self-contained way 
// for securely transmitting information between parties as a JSON object. This information can be 
// verified and trusted because it is digitally signed.
// through JWT, the user can access routes, services and resources that are permitted with that token
// Single Sign On is a feature that widely uses JWT nowadays, because of its small overhead and 
// its ability to be easily used across different domains.

// How to check for validation
// mongo-validation
// Joi
// check in controller -basic
// check important info on JWT in jwt.io
// we store data in payload which is encoded (when sent to front-end) and decoded
// JTW has 3 parts - header,payload and secret
//JSON Web Token (JWT) is an open standard (RFC 7519) that defines a compact and 
//self-contained way for securely transmitting information between parties as a JSON object. 
// npm install jsonwebtoken
// write token in your controller
// In env define secret
// const token = jwt.sign({payload},secret,options) in your post login request eg-
// const token = jwt.sign({ id, username }, process.env.JWT_SECRET, { expiresIn: '30d' })
// this is how we are getting the tokens
// Whenever the user wants to access a protected route or resource, the user agent should send
// the JWT, typically in the authorization header using the **bearer** scheme
// The content of the header should look like-
// Authorization: Bearer <token>
// On front end, we are storing this token somewhere
// We are passing the username and password to post request of axios.
// If successful 
// In this project it is being stored in local storage  -> localStorage.setItem('token',data.token)
// In network -dashboard- headers -> request header -> authorization: bearer- token

// In postman -
// for dashboard - set header as 
// Key=Authorization value = Bearer token_value
// in the get request, look for req.headers
// 401 is authentication error

// To get token!!
// In get token look for authorization in header (req.headers.authorization)
// Split the token after bearer and just take the second half (req.headers.authorization.split(' ')[1])

// verify token
// decode it first using try catch
// const decoded = jwt.verify(token, process.env.JWT_SECRET)
// if decoded - show data

// Auth middleware - multiple codes will use this functionality
// Therefore, it's important to have this as a middleware, so that it can be reused
// In the auth middleware we require jsonwebtoken and customAPIError
// We get the token from auth header = req.headers.authorization
// Check if its empty or if doesn't start with bearer - throw error with status code 401
// try to decode the token using - jwt.verify(token, process.env.JWT_SECRET)
// Store the decoded data in new object (user/variable) = req.object/req.user
// In case the token is incorrect, catch the error and throw 401
// next() // very important or it won't go to the next middleware

// Create error classes by inheriting CustomAPIErrors for different error codes

// *********************Install http-status-codes*********************