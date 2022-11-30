/* 
Conditionals
- Conditionals are used for descision making
- Tools we have available are the following:
   - if statement
   - if else statement
   - if else if statement
   - switch
   - ternary
*/

// Example of if statement

var currentTime = 9;

if (currentTime < 12) {
  //  block of code that gets executed if the conditional is true
  console.log("Good Morning");
}

console.log("after the if statement");

//  / ! Example of if - else

var currentTime = 9;
if (currentTime < 12) {
  //  block of code that gets executed if the conditional is true
  console.log("Good Morning");
} else {
  // block of code gets executed if it is not true
  console.log("Good Afternoon");
}

console.log("after the if-else statement");

// using variables

var currentTime = 18;
var greeting = "";
if (currentTime < 12) {
  //  block of code that gets executed if the conditional is true
  greeting = "Good Morning";
}

console.log("after the if statement using variables");

// ! Example of if - else
if (currentTime < 12) {
  //  block of code that gets executed if the conditional is true
  greeting = "Good Morning";
} else {
  // block of code gets executed if it is not true
  greeting = "Good Afternoon";
}

console.log("after the if-else statement using variables");

console.log(greeting);

// ! Example of if - else if
// TODO: between the hours of 12-17 store in greeting "Good Afternoon" Anything above 17 greeting is "Good Evening"
if (currentTime < 12) {
  //  block of code that gets executed if the conditional is true
  greeting = "Good Morning";
} else if (currentTime >= 12 && currentTime <= 17) {
  // block of code gets executed if it is not true
  greeting = "Good Afternoon";
} else {
  // your final else statement can be viewed as a default condition if nothing matches
  greeting = "Good Evening";
}
console.log(greeting);

// Code Refactoring

var isLightBulbOn = true;

if (isLightBulbOn === true) {
  console.log("Yes the light bulb is on!");
}

// Refactored code

if (isLightBulbOn) {
  console.log("refactored - Yes the light bulb is on");
}
// If the light bulb is off using NOT

if (isLightBulbOn !== true) {
  console.log("The light bulb is off");
}
// Refactored code
if (!isLightBulbOn) {
  console.log("refactored - The light bulb is off");
}

// !How rob has his page
/* 
Conditionals
- Conditionals are used for descision making
- Tools we have available are the following:
   - if statement
   - if else statement
   - if else if statement
   - switch
   - ternary
*/

// ! Example of if statement

var currentTime = 20;
var greeting = "";
if (currentTime < 12) {
  //  block of code that gets executed if the conditional is true
  greeting = "Good Morning";
}

// ! Example of if - else
if (currentTime < 12) {
  //  block of code that gets executed if the conditional is true
  greeting = "Good Morning";
} else {
  // block of code gets executed if it is not true
  greeting = "Good Afternoon";
}

// ! Example of if - else if
// TODO: between the hours of 12-17 store in greeting "Good Afternoon" Anything above 17 greeting is "Good Evening"
if (currentTime < 12) {
  //  block of code that gets executed if the conditional is true
  greeting = "Good Morning";
} else if (currentTime >= 12 && currentTime <= 17) {
  // block of code gets executed if it is not true
  greeting = "Good Afternoon";
} else {
  // your final else statement can be viewed as a default condition if nothing matches
  greeting = "Good Evening";
}

console.log(greeting);

// Code Refactoring

var isLightBulbOn = false;

if (isLightBulbOn == true) {
  console.log("Yes the light bulb is on!");
}

// Refactored code

if (isLightBulbOn) {
  console.log("refactored - Yes the light bulb is on");
}

// If the light bulb is off using NOT

if (isLightBulbOn != true) {
  console.log("The light bulb is off");
}

// Refactored code
if (!isLightBulbOn) {
  console.log("refactored - The light bulb is off");
}

var today = new Date();
console.log(today.getSeconds());

var currentSeconds = today.getSeconds();

// ? Write an if statement to determine if the current seconds are odd or even.
// ? If even - console.log ex: "The current seconds is 22 and is even"

// ? If odd - console.log ex: "The current seconds is 23 and is odd"

//  5/2 R 1
//  22/2 R 0
console.log("Remainder from the division", currentSeconds % 2);

if (currentSeconds % 2 === 0) {
  console.log(`The current second is ${currentSeconds} and it is even`);
} else {
  console.log(`The current second is ${currentSeconds} and it is odd`);
}

// var birthDate = new Date("12-05-1990");
// console.log(birthDate);
// attempting to get age from date of birth didn't do it

var age = 20;

if (age >= 18) {
  console.log("you can vote");
} else {
  console.log("you can not vote");
}
// 1. Conditional
// 2. What you want to happen if it is true
// 3. What you want to happen if it is false
// (1)         (2)                                    (3)
age >= 18 ? console.log("T: you can vote") : console.log("T: you can not vote");

// ! Switch Statement

let month = "Jan";
let totalNumberofDays = 0;
switch (month) {
  case "Dec":
  case "Jan":
    totalNumberofDays = 31;
    break;
  // case "Jan":
  //   totalNumberofDays = 31; can combine all numbers with the same b=number of days
  //   break;
  case "Feb":
    totalNumberofDays = 28;
    break;
  default:
    totalNumberofDays = "Month did not match";
}

console.log(totalNumberofDays);

// ? Ternary React Conditional Component

let flag = true;

// conditional is always asking if something is true if want to check if something is false add ! infront of it.
if (flag) {
  console.log("<Signup />");
} else {
  console.log("<Login />");
}

// Ternary Syntax
//  condition ? statement if true : statement if false
// for reaCT YOU MUST USE THIS SYNTAX
flag ? console.log("<Signup />") : console.log("<Login />");

// can have an if without an else
// ? If/else allows for if-only conditional
if (true) {
  console.log("true condition");
}
// ? Ternaries do not. There needs to be a null for the falsey condition
// for ternaries you need a else. can be null if you don't care
true ? console.log("ternary true condition") : null;

// ? Chaining ternaries
// ? : else if ? condition if true
// multiple conditions syntax
let temp = 45;

if (temp >= 72) {
  console.log("it's summer");
} else if (temp >= 62) {
  console.log("it's fall");
}

// prettier-ignore
temp >= 72 ? console.log("It's summer")
  : temp >= 62 ? console.log("It's Fall")
    : temp >= 32 ? console.log("It's winter")
      : null;
