// File system Synschronous


// read file
const { readFileSync, writeFileSync } = require('fs')

console.log('start')
const first = readFileSync('./content/first.txt', 'utf8')
const second = readFileSync('./content/second.txt', 'utf-8')

// write files
writeFileSync(
    './content/result-sync.txt',
    `\n Here is the result: ${first}\n${second}\n`, { flag: 'a' }
)

console.log('done with this task')
console.log('Starting new task')