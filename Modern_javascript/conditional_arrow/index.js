// problem 1


const checkage =age =>  age > 18 ? 'You are good to go!' : 'Sorry! You must be 18 or older!'

console.log(checkage(8));

// problem 2 


const checkrain = weather => weather === 'raining' ? 'Get your rain jacket!' : "No rain on today's forecast!"
console.log(checkrain('raining'))

//problem 3

const checkeven = num => num % 2 ===0 ? "That's an even number!" : "That's an odd number!"
console.log(checkeven(3))

//problem 4 


const balance = (num1,num2)=> num1 > num2
    ? `${num1} is more than  ${num2}`
    : `${num1} is less than  ${num2}`


console.log(balance(5,20))