/* 
Types - Data Types

- Strings
- Boolean (truthy and falsey)
- Numbers
*/

/* 
Strings
- are datatypes used to represent text and are wrapped in single quotes, double quotes, or backticks
-
*/
var stringOne = "double quotes";
// prettier-ignore
var stringTwo = 'single quotes';

var stringThree = `back ticks`;

// use a comma to seperate two variables for printing to the console
console.log(stringOne, stringTwo);
// ! Adding strings together
// Example of putting together two strings
// !Problem is they are smashed together
console.log(stringOne + stringTwo); // output: double quotessingle quotes
// ! The Fix
console.log(stringOne + " " + stringTwo);
// Using Backticks
console.log(`${stringOne} ${stringTwo}`); //output: double quotes single quotes

// ! CHALLENGE STRING
// ? Declare and Initialize a variable called greeting set it equal to "Good Afternoon"
// ? Declare and Initialize a variable called  firstName set it equal to your name
// ? using backticks console log the following "Good Afternoon Rob" with proper spacing


var greeting = "Good Afternoon";
var firstName = "Julia";
console.log(`${greeting} ${firstName}`);

// ! If you want to find out what type the variable is you can use typeof

console.log(typeof firstName);

var moneyOne = "20";
var moneyTwo = "10";

console.log(moneyOne + moneyTwo);
//  Combining two or  strings is called concatenation.

/* 
Numbers

*/

let currentTemp = 23;
console.log("currentTemp:", currentTemp);

let calculatedTip = 50 * .25;
console.log(calculatedTip.toFixed(2));
// toFixed tells how many decimals 
let numbersAreHard = (0.2 * 10 + 0.1 * 10) / 10;
console.log("numbersAreHard", numbersAreHard);
// knows order of operations in math. 

// ! Convert Strings to Numbers
// Way Number 1
// Number()

console.log(
  "Converting String to Number:",
  Number(moneyOne) + Number(moneyTwo)
);
// now it adds them together because they are numbers and not strings

// output is 30 rather than 2010

// Way Number 2
//  add a plus to the start of the variable
// ex: +moneyOne

console.log(+moneyOne + +moneyTwo);
// output again 30 rather than 2010

/* 
Booleans:
- Only has two possible values
 true or false
*/

var isOver21 = true;
console.log("isOver21", isOver21);
var isTeenager = false;
console.log("isTeenager", isTeenager);
console.log("typeof", typeof isOver21);


/* 
Null
- Null is an empty value.
- Think of it as we have an empty container - nothing is in it but it exists as space to fill later on.
*/
// in a mathematic equation evaluated as 0 

var isLoggedIn = null


/* 
Undefined
- No value is assigned and does not act as an empty container
undefined can't be evaluted in a numerical addition get NaN

*/

var myName;
//  because we did not assign a value the default is undefinded

var myLastName = undefined;
var myAddress = "123 main";
console.log("typeof myAddress", typeof myAddress);
var notNumber = "name" / "15";
// Using Boolean we can check to see if a variable contains data
// undefined, null, 0, NaN, empty string quotes will all produce a false
// these outputs will all be false because there is no data assigned to them. until we put in an address then it will show true. 
// Nan will also be false 
// 0 will also be false
// empty string will be false, address example

console.log("myLastName", Boolean(myLastName));
console.log(Boolean(isLoggedIn));
console.log(Boolean(myAddress));
console.log(Boolean(notNumber));
console.log(Boolean(0));

// if true is added to a number it is evaluated as 1 and false is 0