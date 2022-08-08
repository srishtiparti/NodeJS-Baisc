// Lets's create a big file first -> 11->create big file
const { writeFileSync } = require('fs');
for (let i = 0; i < 100000; i++) {
    writeFileSync('./content/big.txt', `Say ${i} Say \n`, { flag: 'a' })
}