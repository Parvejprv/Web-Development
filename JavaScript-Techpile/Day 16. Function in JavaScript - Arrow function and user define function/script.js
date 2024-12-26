/* 
Function in JavaScript 
============================
- A Function in JavaScript is a block of code designed to perform a particular task. A JavaScript funtion is executed when it invoked(called).

Note: A JavaScript function is defined using the function keyword, followed by the function name, followed by the parentheses ().


Example:

function greet(name) {
  console.log('Hello, ' + name) + "!";
} 

// Calling the function
greet("Alice");   // Output: Hello, Alice!



Feature of Functions i JavaScript:
1. Modularity: Function allow you to devide your code into reusable pieces.
2. Reusability: Once defined, a function can be used as many times as needed.
3. Parameterization: Function can take parameters to operate on different inputs.


Types of Functions:
1. Function Declaration:
A function declaration defines a named function. A declared function is "hoisted", meaning it can be called before it is defined.


function add(a, b) {
    return a + b;
}

console.log(add(2, 3)); // Output: 5
2. Function Expression:
A function expression defines a function inside an expression instead of a separate statement. It can be anonymous (unnamed) or named. Function expressions are not hoisted.


const subtract = function(a, b) {
    return a - b;
};


Write the function in JavaScript, definition and example and other features and type of function in JS, in details
Functions in JavaScript
A function in JavaScript is a block of code designed to perform a particular task. A JavaScript function is executed when it is invoked (called).

Definition:
A JavaScript function is defined with the function keyword, followed by a name, followed by parentheses ().

Example:

function greet(name) {
    console.log("Hello, " + name + "!");
}

// Calling the function
greet("Alice"); // Output: Hello, Alice!



Example 2. 
function printMsg() {
  console.log("Hello, Welcome to the JavaScript Learning!");
}

printMsg();


Example 3. 
// Function with parameter
function add(x, y, z) {
  console.log(x+y+z);
}

add(3, 5, 6);


Features of Functions in JavaScript:
---------------------------------------
Modularity: Functions allow you to divide your code into reusable pieces.

Reusability: Once defined, a function can be used as many times as needed.

Parameterization: Functions can take parameters to operate on different inputs.

Types of Functions:
1. Function Declaration:
A function declaration defines a named function. A declared function is "hoisted", meaning it can be called before it is defined.


function add(a, b) {
    return a + b;
}

console.log(add(2, 3)); // Output: 5



2. Function Expression:
A function expression defines a function inside an expression instead of a separate statement. It can be anonymous (unnamed) or named. Function expressions are not hoisted.


const subtract = function(a, b) {
    return a - b;
};

console.log(subtract(5, 2)); // Output: 3


3. Arrow Function:
Introduced in ES6, arrow functions provide a shorter syntax and lexically bind the this value.


const multiply = (a, b) => a * b;

console.log(multiply(3, 4)); // Output: 12


4. Immediately Invoked Function Expression (IIFE):
An IIFE is a function that runs as soon as it is defined.


(function() {
    console.log("This function runs immediately!");
})();
5. Higher-Order Function:
Functions that take other functions as arguments or return functions as their result.


function applyOperation(a, b, operation) {
    return operation(a, b);
}

const result = applyOperation(2, 3, add); console.log(result); // Output: 5 (using the previously defined 'add' function)


Additional Concepts:
1. Function Scope:
Variables declared inside a function are local to that function and cannot be accessed outside.


function scopeExample() {
    let message = "Hello, World!";
    console.log(message);
}

scopeExample(); // Output: Hello, World!
// console.log(message); // Error: message is not defined
2. Closures:
A closure is a function that retains access to its lexical scope, even when the function is executed outside that scope.


function createCounter() {
    let count = 0;
    return function() {
        count++;
        return count;
    };
}

const counter = createCounter();
console.log(counter()); // Output: 1
console.log(counter()); // Output: 2

3. Default Parameters:
Functions can have default parameter values.


function greet(name = "Guest") {
    console.log("Hello, " + name + "!");
}

greet(); // Output: Hello, Guest!
greet("Bob");  // Output: Hello, Bob


Example 2.

// Function with default parameter
let additon = (x = 40, y = 50) => {
  console.log(`Sum = ${x+y}`);
}

// additon();    // Output: 90
additon(60, 90);    // Output: 150


// Note: 
// 1). If we don't pass any parameter to this function this will gone execute with the default parameter that is x = 40 and y = 50


// Rest Operator in JavaScript:
// ==================================

// Rest Operator | variable argument
function demo(...x){
  console.log(x);
}

demo(1);    // x=[1]
demo(1, 2);    // x=[1, 2]
demo(1, 2, 3);    // x=[1, 2, 3]
demo(1, 2, 3, 4);    // x=[1, 2, 3, 4]
demo(1, 2, 3, 4, 50, 60);    // x=[1, 2, 3, 4, 50, 60]



Note: Rest Operator always used in the last if function has many parameter.



// Addition using the var args | variable length argument
function sum(...args) {
  var sum = 0;
  for(let x of args) {
    sum += x;
  }
  console.log(`sum = ${sum}`);
  // console.log(args);
}

sum(10, 20);    // 30
sum(10, 20, 30);    // 60
sum(10, 20, 30, 40);    // 100
sum(10, 20, 30, 40, 50);    // 150
sum(10, 20, 30, 40, 50, 60);    // 210
sum(10, 20, 30, 40, 50, 60, 70);    // 280
sum(10, 20, 30, 40, 50, 60, 70, 80);    // 360
sum(10, 20, 30, 40, 50, 60, 70, 80, 90);    // 450
sum(10, 20, 30, 40, 50, 60, 70, 80, 90, 100);   // 550



// Multiplication using the variable length argument

function mult(...args) {
  var product = 1;
  for(let x of args) {
    product *= x;
  }
  console.log(`multiplication = ${product}`);
  // console.log(args);
}

mult(10, 20);    // 200
mult(10, 20, 30);    // 6000
mult(10, 20, 30, 40);    // 24000
mult(10, 20, 30, 40, 50);    // 12000000


*/












