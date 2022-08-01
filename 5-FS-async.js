const { readFile, writeFile } = require('fs')

console.log('start')
readFile('./content/first.txt', 'utf8', (err, result) => {
    if (err) {
        console.log(err)
        return
    }
    const first = result;
    readFile('./content/first.txt', 'utf8', (err, result) => {
        if (err) {
            console.log(err)
            return
        }
        const second = result;
        writeFile('./content/resuly-asunc.txt', `\nHere is the result: ${first}\n${second}\n`, { flag: 'a' }, (err, result) => {
            if (err) {
                console.log(err)
                return
            }
            console.log('Asyn file created. Done with this task')
        })
    })
})
console.log('starting next task')