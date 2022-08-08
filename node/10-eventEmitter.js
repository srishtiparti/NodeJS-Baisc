// Event Emitter 
// on- listen for an event
// emit - emit an event


const EventEmitter = require('events');


const customemitter = new EventEmitter()



customemitter.on('response', () => {
    console.log('data received')
})

customemitter.on('response', (name) => {
    console.log(`some other thing that i would like to do ${name}`)
})

customemitter.on('response', (name, id) => {
    console.log(`Name is ${name}, and ID is ${id}`)
})

customemitter.emit('response', 'john', 453)