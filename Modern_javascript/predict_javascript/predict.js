/* Problem 1 Why did the code produce that output? If applicable, how would you get the index value that did not output?*/
const cars = ['Tesla', 'Mercedes', 'Honda']
const [ randomCar ] = cars
const [ ,otherRandomCar ] = cars
//Predict the output
console.log(randomCar)
console.log(otherRandomCar)

/*  1 predicting the output
console.log(randomCar) will return :  Tesla
/* console.log(otherRandomCar) will return : Mercedes*/

/* 2 reason of the output
we did decustruct the array cars thats why we can consol log each element */

/* 3 get the index value that did not output :*/
const [, , lastcar] = cars
console.log(lastcar)


/* problem 2 Why did the code produce that output? If applicable, what would you need to do to solve any potential problems?*/ 

const employee = {
    employeeName: 'Elon',
    age: 47,
    company: 'Tesla'
}
const { employeeName: otherName } = employee;
//Predict the output*/
console.log(otherName);
/*console.log(employeeName);

/* 1 predicting the output
console.log(otherName); will return Elon
console.log(employeeName); will be undefined*/

/* 2 reason 
when we did decunstruct our object we indexed employeeName : otherName / emplyeeName does not exist out of the object by itself */ 

/* fix 
we do have console.log(otherName) wich do the job 
if we want to use employeeName as index we can do one of the following : 

a - use employeeName to decustruct , but it can confuse us with object parameter
const { employeeName } = employee; in this use case we can console.log(employeeName);

b- console.log(employee.employeeName); will not execute an error */



/* Problem 3 Why did the code produce that output? If applicable, how would you alter this code without changing either console.log?*/ 

const person = {
    name: 'Phil Smith',
    age: 47,
    height: '6 feet',
    
}
const password = '12345';
const {password: hashedPassword } = person;  
//Predict the output*/
console.log(password);
console.log(hashedPassword);

/*Why did the code produce that output? password is not defined inside of person 

/* fix :
const person = {
    name: 'Phil Smith',
    age: 47,
    height: '6 feet'
    password: '12345'
}*/


//problem 4 Why did the code produce that output? Declare a new variable for the value at the 4th index of the array and console.log it.// 

const numbers = [8, 2, 3, 5, 6, 1, 67, 12, 2];
const [,first] = numbers;
const [,,,second] = numbers;
const [,,,,,,,,third] = numbers;
//Predict the output
console.log(first === second); /*false */
console.log(first === third); /*true */

// console.log(first === second);  we compared first and second wich value is 2 and 5 thats why we get false 
// console.log(first === third); we compared first and third  wich value is 2 and 2 thats why we get true
// const [,,,,fourth]= numbers ;
//console.log(fourth);

//Problem 5
//Why did the code produce that output? Console.log the last value in the secondKey property's array.

const lastTest = {
    key: 'value',
    secondKey: [1, 5, 1, 8, 3, 3]
}
const { key } = lastTest;
const { secondKey } = lastTest;
const [ ,willThisWork] = secondKey;
//Predict the output
console.log(key);
console.log(secondKey);
console.log(secondKey[0]);
console.log(willThisWork);

// we have decustruct the first parameter of lastTest(key) and the second parameter (secondKey) wich is and array 
//than we decunstruct the second element of the array (second key)
// our output  : 
//value
//[ 1, 5, 1, 8, 3, 3 ]
//1
//5


//Console.log the last value in the secondKey property's array.

//const [,,,,,lastValue]= secondKey;
//console.log(lastValue)

//Problem 6
//First, how many scopes does the following code block contain? Define each scope and guess what the output will be.

var beatles = ['Paul', 'George', 'John', 'Ringo'];
function printNames(names) {
  function actuallyPrintingNames() {
    for (var index = 0; index < names.length; index++) {
      var name = names[index];
      console.log(name + ' was found at index ' + index);
    }
    console.log('name and index after loop is ' + name + ':' + index);
  }
  actuallyPrintingNames();
}
printNames(beatles);

// we do have 3 scopes 
// we have global scope and local scope printNames function than inner local scope at actuallyPrintingNames function
//Paul was found at index 0
// George was found at index 1
// John was found at index 2
// Ringo was found at index 3
//name and index after loop is Ringo : 4



//Problem 7
//Why did the code produce that output?

function actuallyPrintingNames() {
    for (let index = 0; index < names.length; index++) {
      let name = names[index];
      console.log(name + ' was found at index ' + index);
    }
    console.log('name and index after loop is ' + name + ':' + index);
  }     

  // we did not invoke the function actuallyPrintingNames(); and if we do it wont work because it does not have access to the var names wich is in the function printNames(names)
  

  //Problem 8
//Why did the code produce that output? Explain the output, including any possible errors and why they occurred. 
// If there are no errors, explain the justification for each keyword used to declare variables.

const beatles = ['Paul', 'George', 'John', 'Ringo'];
function printNames(names) {
  function actuallyPrintingNames() {
    for (let index = 0; index < names.length; index++) {
      const name = names[index];
      console.log(name + ' was found at index ' + index);
    }
  }
  actuallyPrintingNames();
}
printNames(beatles);

