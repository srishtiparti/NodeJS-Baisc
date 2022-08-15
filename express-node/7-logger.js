const logger = (req, res, next) => {
    const method = req.method
    const url = req.url
    const time = new Date().getFullYear()
    console.log(method, url, time)
        // res.send('Testing') // we don't want to display this on though
    next() //lets pass it to next response
}

module.exports = logger