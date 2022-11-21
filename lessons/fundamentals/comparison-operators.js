var helicopter1 = "BlackHawk";
var helicopter2 = "bLaCkHawk";

var stringThree = "3"
var numberThree = 3

console.log(helicopter1 == helicopter2);
// output: false because different by letters

console.log(helicopter1.toUpperCase() == helicopter2.toUpperCase());
// true because made all upercase

console.log(stringThree == numberThree);
// true strings and number three 

// Double equal signs will compare the value and doesn't care about the data type
console.log(
  "stringThree and numberThree with two equal",
  stringThree == numberThree
); // true with two equal signs same value

// 3 equals signs will compare Type and Value
console.log(
  "stringThree and numberThree with three equal",
  stringThree === numberThree
); // false three equals look for data type, very specic type and value

//  Not Operator
//  != only looks at teh value and doesn't care about the data type
console.log("Not equal helicopter", helicopter1 != helicopter2);
// output: true because not equal 

console.log("Not equal stringThree and numberThree", stringThree !== numberThree)
// output:true because they are different tyoes 

console.log("Not equal stringThree and numberThree", stringThree != numberThree) //output: false because same value and only looking at value 

// / greater than

console.log("greater than", 10 > 2); // output: true

// less than 

console.log("less than", 10 < 2); // output: false

//greater than or equal >=

console.log("greater than or equal", 4 >= 4); //output: true

//  less than or equal <=
console.log("less than or equal", 4 <= 4); //output: true
// > or < must go before =

//  what if we throw in a string... still works 
console.log("less than or equal", "4" <= 4); //output: true

// Logical Operators

var num1 = 6
var num2 = 3

console.log("And Operator");
// want multiple things &&
console.log(num1 < 10 && num2 > 1); // output: true

console.log("Or Operator"); // One or the other must match.
console.log(num1 === 4 || num2 === 6); // output: false
console.log(num1 === 6 || num2 === 6); // output: true

