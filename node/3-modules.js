const names = require('./2-name')
const myName = require('./2-function')


console.log(names.items.ella)
require('./2-mind-grenade')
myName('cory')
myName(names.karen.name)
myName(names.items.ella)


// When adding require, when you're adding the code you also revoke it, i.e node js executes it

require('./2-ExecuteCode')