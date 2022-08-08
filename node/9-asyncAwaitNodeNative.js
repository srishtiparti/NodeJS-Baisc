// // by using util
// const { readFile, writeFile } = require('fs');
// const util = require('util');
// // lets use built in function for promise
// const readFilePromise = util.promisify(readFile)
// const writeFilePromise = util.promisify(writeFile)

// by using node native option -> 
const { readFile, writeFile } = require('fs').promises;



// use async await to wait for promise to be settled
const start = async() => {
    try {
        const first = await readFile('./content/first.txt', 'utf8')
        const second = await readFile('./content/second.txt', 'utf8')
        await writeFile('./content/result-mind-grenade', `This is awesome ${first}  ${second}`, { flag: 'a' })
        console.log(first, second)
    } catch (error) {
        console.log(error)
    }
}
start()

// lets create a function for promise
// const getText = (path) => {
//     return new Promise((resolve, reject) => {
//         readFile(path, 'utf8', (err, data) => {
//             if (err) {
//                 reject(err)
//             } else {
//                 resolve(data)
//             }
//         })
//     })
// }