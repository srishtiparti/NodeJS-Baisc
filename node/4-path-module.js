// Why is it important? We'll be using the applications in different environments where
// path is never constant

const { Console } = require('console');
const path = require('path');

// you get the separator - /
console.log(path.sep)

const filePath = path.join('/content', 'text.txt')
console.log(filePath)

const base = path.basename(filePath)
console.log(base)

const absolute = path.resolve(__dirname, 'content', 'test.txt')
console.log(absolute)