const { setDefaultResultOrder } = require("dns");
const { setMaxListeners } = require("events");

console.log("Promises Async Await Lesson")

// ? Why do we need asynchronous programming?

function getInfo() {
    return "Paul Niemczyk, DOB: 6/15, SSN: 123-55-1289"
}

let data = getInfo()
console.log(data)

// ? Why do we need asynchronous programming?

function getInfo() {
    // ? Works because return is immediate
    // return "Paul Niemczyk, DOB: 6/15, SSN: 123-55-1289"
    
    // ? Doesn't work because return occurs 3 seconds after
    setTimeout(() => {
        return "Paul Niemczyk, DOB: 6/15, SSN: 123-55-1289"
    }, 3000);
}

let data = getInfo()
console.log(data)

// ? Promises

/* 
    * An object that may produce a singular value in the future

    * Three States:
        * Pending (Unfinished)
        * Fulfilled (Completed)
        * Rejected (Error)
*/


// This will run finally first 
let myPromise = new Promise((resolve, reject) => {
    // let sum = 1 + 2
    // sum == 3 ? resolve("Success") : reject("Failed")
    setTimeout(() => {
        let sum = 1 + 1
        sum == 3 ? resolve("Success") : reject("Failed")
    }, 4000);
})

console.log(typeof myPromise, myPromise)

myPromise
    .then(valueIfResolved => {
        console.log(valueIfResolved)
    })
    .catch(msg => {
        console.log(msg)
         console.log("Code after resolved")
    })
    .finally(console.log("Code that runs after"))


    // wrap in a callback function so it executes when a promise is settled
    let myPromise = new Promise((resolve, reject) => {
    // let sum = 1 + 2
    // sum == 3 ? resolve("Success") : reject("Failed")
    setTimeout(() => {
        let sum = 1 + 2
        sum == 3 ? resolve(someValue = sum) : reject("Failed")
    }, 4000);
})

console.log(typeof myPromise, myPromise)

myPromise
    .then(valueIfResolved => {
        console.log(valueIfResolved)
    })
    .catch(msg => {
        console.log(msg)
    })
    .finally(() => {
        console.log("Code after completion of the promise")
    })
    
    // without arrow functions using fx declaration

    // myPromise
    // .then(function (valueIfResolved) {
    //     console.log(valueIfResolved)
    // })
    // .catch(function (msg) {
    //     console.log(msg)
    // })
    // .finally(function () {
    //     console.log("Code after completion of the promise.")
    // })

    // example from guess the number
//     const readline = require("readline")

// const rl = readline.createInterface({ input: process.stdin, output: process.stdout })

// function askQuestion(question) {
//     return new Promise((resolve, reject) => {
//         rl.question(question, resolve)
//     })
// }


/* 
    * Introduced in ES8
    * A different way to write asynchronous code
    * Uses async/await syntax to replace Promise resolve & reject

! Async function ALWAYS RETURNS A PROMISE

    ? Async Function Syntax:

    * async function myFx() { }
      * async function myFx() { }
    * let myFx = async function() { }
    * let myFx = async () => { }
*/
// function theOGFunction() {
//     return "OG Function Value"
// }

// console.log(theOGFunction())

function theOGFunction() {
    return "OG Function Value"
}

let resultOfOGFunction = theOGFunction()
console.log(resultOfOGFunction)

async function asyncFx() {
    return "Async fx value"
}

// doesn't work
// let resultOfAsyncFx = asyncFx()

// console.log(resultOfAsyncFx)

let resultOfAsyncFx = asyncFx()

resultOfAsyncFx.then(data => console.log(data))


async function getData() {
    let res = await fetch("https://api.spacexdata.com/v3/capsules")
    let data = await res.json()
    console.log(data)
}


getData()

// ? AWAIT

/* 
    ? Await

    * Tells our function that a value being returned is a promise
    * Tells our function that we must wait until the promise is fulfilled
*/

let db
//  = "SSN: 223-12-5555"

let dbCall = new Promise((resolve, reject) => {
    // db ? resolve(db) : reject("No data found")
    setTimeout(() => {
        if (db) {
            resolve(db)
        } else {
            reject("No data found")
        }
    }, 3000);
})

// dbCall.then(data => console.log(data)).catch(err => console.log(err))

// this doesn't work because we have to await the promise to finish
// function displayData() {
//     console.log("this fx is supposed to display db data to the user")
// }

// displayData()

// this fixes it 
async function displayData() {
    let dbResult = await dbCall
    console.log(dbResult)
}

displayData()

// if things go to shit b/c error. ready for
async function displayData() {
    try {
        let dbResult = await dbCall
        console.log(dbResult)
    } catch (err) {
        console.log(err)
    }
}

displayData()

// how in real life
async function displayData() {
    try {
        let dbResult = await dbCall
        console.log(dbResult)
        const h1 = document.createElement("h1")
        console.log(h1)
        h1.innerText = dbResult
        document.body.appendChild(h1)
    } catch (err) {
        console.log(err)
    }
}

displayData()

const obj = {name: "Paul", age: 27}
obj.name = "John"
console.log(obj)



// object and arrays crap
// let arr = ["Paul", "John", "Adam"]

// let newArr = arr.map(i => i)
// newArr.push("Nick")
// console.log(arr, newArr)