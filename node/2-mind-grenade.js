// We won't call any modules/ element. 
//When we import module, we invoke it
// it is not just exports it, it enwraps it in  function that is executed


const num1 = 13
const num2 = 15

function addValue() {
    console.log(`sum is ${num1+num2}`)
}

addValue()