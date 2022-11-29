I fucked up somewhere 


// IO and callbacks

//  * Process is on an event that currently runs in the foreground or background of your local zoom

// * Node js allowa acces to its processes via a process object

// Import statement 

let process = require("process")

 console.log(process.pid)

/* Callback 
A "Listener" function that waits for an event and executes a function when it occurs.
Takes two parametes: 
* event upin which to execute a function 
    *function to be executed  */ 

// console.log("App Running")
// process.stdin.once("data", function (input) {
//     console.log(`This is our input being repeated ${input.toString()}`)
//     // Exits us out of the listener
//     process.exit()
// })

process.stdin.on("data", function (input) {
    console.log(input.toString())
    // if add process exit will only run once 
    process.exit()
})

// process.stdin.once("data", (input) => {
//     console.log("This is our inout being repeated", input.toString())

// })

// Back to function event 

// Function Declaration
// hoisted

function nameOfFunction(parameter) {
    return parameter
}

// Function expressions 
// not hoisted 

let fxExpression = function (parameter) {
    return parameter
}

// Arrow function Expression

// ES6 version of concisely writing functions 
// not hoisted, not bound to .this or apply

let arrowFunction = parameter => console.log("arrow function")

arrowFunction()


// Concise body arrow function. 
let arrowFunction = ()) => console.log("arrow function")
arrowFunction()

let arrowFxOneParam = para => console.log("this fx has one param"

let arrowFXManyParams = (param1, param2) => console.log("this fx has many params")

process.stdin.on("data", input => console.log(input.toString()))

// Block Body Arrow Function 

let blockBodyFx = () = {
    console.log("Line 1")
    console.log("Line 2"))
}