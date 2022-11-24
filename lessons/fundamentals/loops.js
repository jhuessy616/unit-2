/* 
Loops
- They offer a quick and easy way to do something repeatedly.
- There are many many kinds of loops.
    - For Statements
    - Do While Statements
    - While Statements

*/

// ! DANGER: there is a danger in being stuck in an infinite loop
/* 

1. sets the variable before the loop starts
2. defines the condition of the loop to run (ex: it's going to continue until i reaches 10)
3. Increases the value of i each time the code block is executed in the loop

*/
//     (1) .      (2) .   (3)
for (let i = 0; i <= 10; i++) {
  console.log(i);
}

let city = "Indianapolis";
console.log(city[0]);
console.log(city[1]);
console.log(city[2]);
console.log(city.length);
for (let i = 0; i < city.length; i++) {
  console.log(city[i]);
}

// ? Create a for loop that starts at 1 goes to 100 and console logs (i)
// ? Create an if statement inside the for loop to only console log (i) if it is even

for (let i = 1; i <= 100; i++) {
  if (i % 2 == 0) {
  
    console.log(i);
  }
}
for (let i = 0; i <= 100; i=i + 2) {
  console.log(i);
}

// ! While Loop

/* 
This will loop through the code the code block as long as the condition is true
1. Keyword while
2. Conditional
*/
let i = 0;
// (1)   (2)
while (i <= 10) {
  console.log(i);
  i++;
}

/* 
December has 31 days in it. Create a while loop that will loop through 1-31
- inside the while loop keep track of a total (value of the i's added up each go around)
*/

i = 1;
let total = 0;
while (i <= 31) {
  total = total + i;
  i++;
}

console.log("total money collected:", total);

