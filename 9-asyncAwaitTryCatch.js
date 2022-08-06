// much cleaner than FS-async.js

const { readFile } = require('fs');


// lets create a function for promise
const getText = (path) => {
    return new Promise((resolve, reject) => {
        readFile(path, 'utf8', (err, data) => {
            if (err) {
                reject(err)
            } else {
                resolve(data)
            }
        })
    })
}

// use async await to wait for promise to be settled
const start = async() => {
    try {
        const first = await getText('./content/first.txt')
        const second = await getText('./content/second.txt')
        console.log(first, second)
    } catch (error) {
        console.log(error)
    }
}

start()