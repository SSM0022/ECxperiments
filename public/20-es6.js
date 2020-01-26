'use strict';
/* 
 Let vs. Var:
 With the var keyword you can overwrite variable declarations without an error.
 When using let, a variable with the same name can only be declared once.  
 */
var a = 1;
var a = 2; // Overwrites variable
let b = 1;
let b = 2; // SyntaxError: Identifier 'b' has already been declared

/*
Var vs. Let Scope;
The Var Keyword: declares a variable globally or locally if declared inside a function.
The Let keyword: behaves the same but inside a block, statement, or expression, 
its scope is limited to that block, statement, or expression.
*/

function checkScope() {
  var i = 'function scope';
  console.log('Function scope i is: ', i);
  if (true) {
    i = 'block scope';
    console.log('Block scope i is: ', i);
  }
  console.log('Function scope i is: ', i);
  return i;
}

function checkScope() {
  let i = 'function scope';
  if (true) {
    let i = 'block scope';
    console.log('Block scope i is: ', i);
  }
  console.log('Function scope i is: ', i);
  return i;
}

/* 
Const: All features of let, but read-only variables that cannot be reassigned 
       Used for variables that won't change
*/

const FAV_PET = 'Cats';
FAV_PET = 'Dogs'; // returns error

function printManyTimes(str) {
  const SENTENCE = str + ' World';
  for (let i = 0; i < str.length; i += 2) {
    console.log(SENTENCE);
  }
}
printManyTimes('Hello');

/* 
Mutability of a Const Variable; 
Objects (including arrays and functions) assigned to a variable using const are still mutable.
The const declaration only prevents reassignment of the variable identifier.
*/

const s = [5, 7, 2];
function editInPlace() {
  // s = [2, 5, 7]; <- error: variable identifier 's' cannot point to a different array
  s[0] = 2;
  s[1] = 5;
  s[2] = 7;
  // Like all arrays the elements in s are mutable
}
editInPlace(); // const s = [2, 5, 7]

/*
Prevent Object Mutation:
Const functions dont prevent mutation of objects
Javascript provides Object.freeze to prevent data mutation
Once the object is frozen, you can no longer add, update, or delete properties from it
*/

function freezeObj() {
  const MATH_CONSTANTS = {
    PI: 3.14,
  };
  Object.freeze(MATH_CONSTANTS);
  try {
    MATH_CONSTANTS.PI = 99;
  } catch (ex) {
    console.log(ex);
  }
  return MATH_CONSTANTS.PI;
}
const PI = freezeObj();

/* 
Arrow Functions:
When there is no function body, and only a return value, 
arrow function syntax allows you to omit the keyword return 
& the brackets surrounding the code

Anonymous Functions (functions that won't be reused);
*/

// Vanilla
const myFunc = function() {
  const myVar = 'value';
  return myVar;
};

var magic = function() {
  return new Date();
};

// Arrow
const myFunc = () => 'value';

const magic = () => new Date();

/* 
Arrow Functions with Parameters:
*/

// single argument functions, written without parentheses surrounding argument
const doubler = item => item * 2;

// arrow function with multiple arguments
const multiplier = (item, multi) => item * multi;

const myConcat = (arr1, arr2) => arr1.concat(arr2);
console.log(myConcat([1, 2], [3, 4, 5]));

/*
Default parameters for functions:
the default parameter kicks in when the argument is not specified (it is undefined)
*/
const greeting = (name = 'Anonymous') => 'Hello ' + name;

console.log(greeting('John')); // Hello John
console.log(greeting()); // Hello Anonymous

const increment = (number, value = 1) => number + value;

console.log(increment(5, 2)); // returns 7
console.log(increment(5)); // returns 6

/* 
Rest Parameters for Functions:
creates functions that take a variable number of arguments
the arguments are stored in a parameter array which can be accessed inside the function
allows us to apply map(), filter() and reduce() on the parameters array
*/
const howMany = (...args) => 'You have passed ' + args.length + ' arguments.';

console.log(howMany(0, 1, 2)); // You have passed 3 arguments.
console.log(howMany('string', null, [1, 2, 3], {})); // You have passed 4 arguments.

const sum = (...args) => args.reduce((a, b) => a + b, 0);
console.log(sum(1, 2, 3)); // 6

/* 
Spread Operator: 
expand arrays and other expressions where multiple parameters or elements are expected 
*/

// Vanilla
var arr = [6, 89, 3, 45];
var maximus = Math.max.apply(null, arr); // returns 89

// ES6
const arr = [6, 89, 3, 45];
const maximus = Math.max(...arr); // returns 89

const arr1 = ['JAN', 'FEB', 'MAR', 'APR', 'MAY'];
let arr2 = [...arr1];
console.log(arr2);
