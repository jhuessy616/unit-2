const readline = require('readline');
const readlineInterface = readline.createInterface(
  process.stdin,
  process.stdout
);

function ask(questionText) {
  return new Promise((resolve, reject) => {
    readlineInterface.question(questionText, resolve);
  });
}

let enemyList = ['darth vader', 'voldemort', 'palatine', 'lex luthor'];

async function respond() {
  let name= await ask ("What is your name?");
  if (name.toLowerCase()=== "darth vader")
  {console.log("Noooooo! That's impossible!");
  }
   else if (enemyList.includes(name.toLowerCase())) {
    console.log("GET AWAY!");
  }
  else {
    console.log("Hi " + name + " it's so good to see you!");
  }
  // your code here
  // remember to use `await`
}
respond();

// other way of doing it 
// (name == "darth vader" ||name== "voldemort"|| name== "palatine" || name== "lex luthor")

// !WAY WE DID IT IN CLASS 


// const readline = require("readline")

// const rl = readline.createInterface({ input: process.stdin, output: process.stdout })

// function ask(questionText) {
//     return new Promise((resolve, reject) => {
//         rl.question(questionText, resolve)
//     })
// }

// let enemyList = ["darth vader", "voldemort", "palpatine", "lex luthor"]

// async function respond() {
//     let answer = await ask("What is your name?")
//     answer.toLowerCase().trim()
    
//     // if answer matches "darth vader" say "No that's impossible"
//     // if answer matches items in array, say Go Away
//     // else, interpolate "Hello <name>"
//     if (enemyList[0].includes(answer)) {
//         // (answer == "darth vader")
//         console.log(`${answer}... No, that's impossible!`)
//     } else if (enemyList.includes(answer)) {
//         console.log(`Go away, ${answer}`)
//     } else {
//         console.log(`Hello, ${answer}`)
//     }
//      rl.close()
// }

// respond()

//  !in arrow function 
// let respond = async () => { 

//     all that if and else stuff 
// }


// !Callback that fires respond only if some flag is set to true?
// callback is a function calling on another function
// let fire = false

// let callback = () => {
//     fire ? respond() : null
// }



// callback()

setTimeout(() => {
    respond()
}, 5000);



