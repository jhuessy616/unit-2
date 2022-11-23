/* 
/* 
Var vs Let
- with the introduction of ES6 we now have keywords to use for variables "let" & "const"

- You can not reference a variable before it is initialized using LET
- When you reference a variable using VAR you are able to use it but you get undefined

-Const is pretty straight forward; it is a constant that cannot be re-expressed.

- Var and Let seem to operate the same. But while they do have a lot of the same functionality (they both allow us to declare and initialize a variable), they also behave differently.

- Var is scoped to the nearest function block and Let is scoped to the nearest enclosing block
*/
console.log("Before it is initialized", age);
var firstName = "Rob";
var age = 42;
let hairColor = "brown";

if (firstName == "Rob") {
  console.log(age);
  //   let age = 33;
  console.log(age);
}

console.log("AGE OUTSIDE OF IF STATEMENT", age);

// ! Another Example of Scope

const greeting = "Hello";

if (true) {
  const greeting = "Good Bye";
  console.log(greeting);
}

console.log(greeting);