// Streams
// Used for reading and writing sequencially
// 4 different type of streams
// Writeable
// Readable
// Duplex
// Transform

// Read File
// When reading files, we are reading the whole file, 
// if we have a big file so we can't store everything in  a variable
// It will give an error that the file is too big
// solution - streamRead

// Lets's create a big file first -> 11->create big file
const { writeFileSync } = require('fs');
for (let i = 0; i < 10000; i++) {
    writeFileSync('./content/big.txt', `Say ${i} Say \n`, { flag: 'a' })
}

/********** createReadStream **************/

const { createReadStream } = require('fs');
const stream = createReadStream('./content/big.txt', { highWaterMark: 9000, encoding: 'utf-8' })
    // stream.on('data', (result) => {
    //     console.log(result)
    // })

// We are reading data in chunks 64kb each time
// default 65kb
// last buffer - remainer
// highWaterMark - control size

const stream1 = createReadStream('../content/big.txt', { highWaterMark: 9000, encoding: 'utf-8' })
stream1.on('error', (err) => {
    console.log(err)
})