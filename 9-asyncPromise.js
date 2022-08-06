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

getText('./content/first.txt')
    .then((result) => console.log(result))
    .catch((err) => console.log(err))


// as can be seen this is executed first and then the call back function
getText('.../content/first.txt')
    .then((result) => console.log(result))
    .catch((err) => console.log(err))