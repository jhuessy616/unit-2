console.log("Promises Async Await Lesson")

// ? Why do we need asynchronous programming?

function getInfo() {
    // ? Works because return is immediate
    return "Paul Niemczyk, DOB: 6/15, SSN: 123-55-1289"
    
    // ? Doesn't work because return occurs 3 seconds after
    // setTimeout(() => {
    //     return "Paul Niemczyk, DOB: 6/15, SSN: 123-55-1289"
    // }, 3000);
    // console.log("Code after timeout")
}

let data = getInfo()
console.log(typeof data, data)

// ? Promises

/* 
    * An object that may produce a singular value in the future

    * Three States:
        * Pending (Unfinished)
        * Fulfilled (Completed)
        * Rejected (Error)
*/
let someValue

let myPromise = new Promise((resolve, reject) => {
    // let sum = 1 + 2
    // sum == 3 ? resolve("Success") : reject("Failed")
    setTimeout(() => {
        let sum = 1 + 2
        sum == 3 ? resolve(someValue = sum) : reject("Failed")
    }, 4000);
})

console.log(typeof myPromise, myPromise)

// myPromise
//     .then(valueIfResolved => {
//         console.log(valueIfResolved)
//     })
//     .catch(msg => {
//         console.log(msg)
//     })
//     .finally(() => {
//         console.log("Code after completion of the promise")
//     })
   
// ? Promise using fx declaration

// myPromise
//     .then(function (valueIfResolved) {
//         console.log(valueIfResolved)
//     })
//     .catch(function (msg) {
//         console.log(msg)
//     })
//     .finally(function () {
//         console.log("Code after completion of the promise.")
//     })

// ? Asynchronous Functions

/* 
    * Introduced in ES8
    * A different way to write asynchronous code
    * Uses async/await syntax to replace Promise resolve & reject
    
    ! Async function ALWAYS RETURNS A PROMISE

    ? Async Function Syntax:

    * async function myFx() { }
    * let myFx = async function() { }
    * let myFx = async () => { }
*/

function theOGFunction() {
    return "OG Function Value"
}

let resultOfOGFunction = theOGFunction()
console.log(resultOfOGFunction)

async function asyncFx() {
    return "Async fx value"
}

let resultOfAsyncFx = asyncFx()

resultOfAsyncFx.then(data => console.log(data))

// ? AWAIT

/* 
    ? Await

    * Tells our function that a value being returned is a promise
    * Tells our function that we must wait until the promise is fulfilled
*/
let db = "SSN: 223-12-5555"

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

async function displayData() {
    try {
        let dbResult = await dbCall
        console.log(dbResult)

        // Real life use
        // const h1 = document.createElement("h1")
        // console.log(h1)
        // h1.innerText = dbResult
        // document.body.appendChild(h1)
    } catch (err) {
        console.log(err)
    }
}

displayData()