/*
Regular expressions;
patterns used to match character combinations in strings. 
In JavaScript, regular expressions are also objects.
*/

/*
(1). Test method
Executes a search for a match between a regular expression and a specified string. 
Returns true or false.
*/

let myString = 'Hello, World!';
let myRegex = /Hello/;
let result = myRegex.test(myString); // returns true

/*
(2).
Alternation / OR Operator = | ;
search for multiple patterns
*/

let cString = 'Jen likes the colour red.';
let cRegex = /red|blue|green|pink|black/; // Change this line
let result = cRegex.test(cString);
