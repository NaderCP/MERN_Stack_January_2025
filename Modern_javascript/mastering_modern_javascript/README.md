
//? 🎯 Assignment: Mastering Modern JavaScript 

//! 🔷 Objective 🔷: Predict the results of code blocks using modern syntaxes such as destructuring, spread operator, 
//!    conditional arrow functions, ternary operator, scope, and hoisting.

//* Part 🅰️: Destructuring and Spread Operator
   //* 1️⃣ Destructuring with a complex array :
        const fruits = ['apple', 'banana', ['orange', 'grape'], 'cherry', { type: 'pear', color: 'green' }];
        const [first, , [third, fourth], , { type }] = fruits;
        console.log(first);  //* Predict what will be logged
        console.log(third);  //* Predict what will be logged
        console.log(fourth); //* Predict what will be logged
        console.log(type);   //* Predict what will be logged

    //* 2️⃣ Destructuring with a complex object :
        const user = { name: 'Alice', age: 25, location: { city: 'Paris', country: 'France' } };
        const { name, location: { city } } = user;
        console.log(name);  //* Predict what will be logged
        console.log(city);  //* Predict what will be logged

    //* 3️⃣ Spread Operator with an object and array:
        const car = { brand: 'Tesla', model: 'Model S', color: 'red' };
        const newCar = { ...car, year: 2021 };
        console.log(newCar);  //* Predict what will be logged

        const numbers = [1, 2, 3];
        const newNumbers = [...numbers, 3, 2, 1];
        console.log(newNumbers);  //* Predict what will be logged

//* Part 🅱️: Conditional Arrow Functions and Ternary Operator
    //* 1️⃣ Conditional Arrow Function (arrow function)
        const greet = name => name ? `Hello, ${name}` : 'Hello, Guest';
        console.log(greet('Alice'));  //* Predict what will be logged
        console.log(greet());  //* Predict what will be logged

    //* 2️⃣ Ternary Operator
        const age = 18;
        const result = age >= 18 ? 'Adult' : 'Minor';
        console.log(result);  //* Predict what will be logged
    
//* Part 🅲️ : Scope and Hoisting
    //* 1️⃣ Hoisting with `var` and `let`
        console.log(x); //* Predict what will be logged
        var x = 10;
        
        console.log(y); //* Predict what will be logged
        let y = 20;
    //* 2️⃣ Scope with `var`, `let`, and `const`
        function scopeTest() {
            var a = 1;
            let b = 2;
            const c = 3;
        
            if (true) {
                var a = 4; //* var a is redefined
                let b = 5; //* let b stays local to this block
                const c = 6; //* const c stays local to this block
            }
        
            console.log(a); //* Predict what will be logged
            console.log(b); //* Predict what will be logged
            console.log(c); //* Predict what will be logged
        }
        
        scopeTest();

//* Part 🅳 : Destructuring and Default Parameters
    //* 1️⃣ Destructuring with default values
        const book = { title: 'JavaScript: The Good Parts' };
        const { title, author = 'Unknown' } = book;
        console.log(title);  //* Predict what will be logged
        console.log(author); //* Predict what will be logged

    //* 2️⃣ Destructuring with a nested array
        const data = ['apple', ['banana', 'mango'], 'grape'];
        const [firstOne, [secondOne, thirdOne]] = data;
        console.log(firstOne);   //* Predict what will be logged
        console.log(secondOne);  //* Predict what will be logged
        console.log(thirdOne);   //* Predict what will be logged

//* Part 🅴 : Arrow Function and Spread with a Nested Array
    //* 1️⃣ Arrow Function with Conditional Return
        const isAdult = age => age >= 18 ? 'Adult' : 'Minor';
        console.log(isAdult(18));  //* Predict what will be logged
        console.log(isAdult(16));  //* Predict what will be logged
    
    //* 2️⃣ Spread Operator with a nested array
        const array1 = [1, 2, [3, 4], 5];
        const array2 = [...array1, 6, 7];
        console.log(array2); //* Predict what will be logged




