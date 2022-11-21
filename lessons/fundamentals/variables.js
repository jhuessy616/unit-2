/* 
Variables:

- Variables are named containers for storing data and values.
- We can name variables anything with a few exceptions.
- We use these variables to reference them at a later time.
*/
/* 


You can start the declaration process with a var, let, or const
- Variable Names in javascript should be Camel Cased: starts off lowercase each word after in upper case
ex. currrentLivingAddress, currentHour, currentWeather, age, location
*/
// prettier-ignore
var   firstName   =    "Julia";
//(1)   (2)       (3)        (4)

/* 
1.  Javascript Keyword to denote the creation of variable (var, let, const)
2. The name of the variable that the developer will reference in order to grab the value that is stored.
3. Assignment Operator
4. Initial Value
*/

console.log("Hello from console.log line: 26");

// ! To Run a Javascript file in terminal - use command : node [filename.js]
// ! Example: node variables.js
console.log(firstName);
console.log("Variable firstName:", firstName);

/* 
Variable Declaration:
- The declaration is to the left side of the assignment operator
- This is where the variable is created - it's not assigned a value yet.
- If no value assigned to it become

*/
// Just declared not assigned a value
var lastName;
console.log("Variable lastName", lastName);
// Value is assigned
lastName = "Vanarsdall";
console.log("Variable lastName", lastName);
// Changed Value
lastName = "Smith"
console.log("Variable lastName", lastName);

let fruit = "Apple";
let snack = fruit;

console.log("fruit", fruit);

console.log("snack", snack);
fruit = "orange";

console.log("snack2", snack);

// still saying apple even though said fruit=orange
// because last time we assinged snack to fruit fruit was apple so it will continue to say apple

console.log("snack2", fruit);
// this recongizes orange. 

// test for github
