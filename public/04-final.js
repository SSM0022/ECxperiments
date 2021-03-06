// Original exercise by github.com/mpalmr
/**
 * @see https://devdocs.io/javascript/global_objects/array/foreach
 */

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

/**
 * "incrementedNumbers" must have the each item in "numbers" plus one
 */

let incrementedNumbers = [];

// "forEach" below
numbers.forEach(function(a) {
  incrementedNumbers.push(a + 1);
});

console.log('incrementedNumbers:', incrementedNumbers);

console.log('\n===\n');

/**
 * Separate all "numbers" from 5 upwards into "bigNumbers"
 * All other "numbers" should go in "smallNumbers"
 */

let bigNumbers = [];
let smallNumbers = [];

// "forEach" below
numbers.forEach(function(a) {
  if (a >= 5) {
    bigNumbers.push(a);
  } else {
    smallNumbers.push(a);
  }
});

console.log('bigNumbers:', bigNumbers); // [5, 6, 7, 8, 9]
console.log('smallNumbers:', smallNumbers); // [1, 2, 3, 4]

console.log('\n===\n');

/**
 * Calculate the sum of all the "numbers" from the last exercise with a forEach loop
 */

let sum = 0;

// "forEach" below
numbers.forEach(function(a) {
  sum += a;
});

console.log('sum:', sum); // 45

console.log('\n===\n');

/**
 * Calculate the sum of "numbers" greater than 7 using a forEach loop
 */

let filteredSum = 0;

// "forEach" below
numbers.forEach(function(a) {
  if (a > 7) {
    filteredSum += a;
  }
});

console.log('sum2:', filteredSum);
