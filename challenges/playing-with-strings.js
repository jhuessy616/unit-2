// Every string also has a length property, that tells you how many characters are in that string. e.g.

console.log("banana".length);
// 6
var dogs ="all dogs are good dogs";
console.log(dogs.length);
// ^ if you wanted to set variables but this is a string length

console.log("All dogs are good dogs".length);
// 22 counts spaces as well as letters for string length

console.log("titanic".toUpperCase());
// TITANIC

console.log("QUIETLY".toLowerCase());
// quietly

console.log("Java".repeat(10));
// JavaJavaJava (ten times)

console.log("berry".charAt(1));
// e asking for position starts at 0

console.log("berry".charAt(0));
// b

console.log("banana".includes("nan"));
// true 

console.log("banana".endsWith("ana"));
// true

console.log("blueberry".replace("blue", "black"));
// blackberry

console.log("drive" + "way");
// driveway

console.log('Java' + "Script");
// JavaScript

console.log("Bert's pal Ernie" + ' sings "Rubber Duckie"');
// Bert's pal Ernie sings "Rubber Duckie" 
// Can use whatever mixture you like but if one inside the other it will be printed. example is "Rubber Duckies"

console.log(`Two plus two is ${2 + 2}`);
// Two plus two is 4
/* If you use backticks as your quotations you have created a template string. One of the benefits of template strings is that you can use special characters ${} to escape back to JavaScript so that you can insert expressions directly into your strings. */

//! Casing matters


let firstName, lastName, age
firstName = "Bill"
lastName = "Hader"
age= 42
console.log(`My name is ${firstName} ${lastName} and I am ${age}!`)

