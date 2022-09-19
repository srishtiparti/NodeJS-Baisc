// Check for username, password in post (login) request
//  if exist create new JWT
// send back to front-end
//  only the request with jwt can access the dashboard

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