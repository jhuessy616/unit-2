/* 
Bronze:
- initialize a variable called coinFlip.
- coinFlip can either be a 0 or a 1
- create an if-else block  - if coinFlip is equal to zero - console log - "Heads" else console log "Tails"

*/
var coinFlip = Math.round(Math.random());
if (coinFlip == 0) {
    console.log("heads");
}
else {
    console.log("tails");
}


/* 
Silver: 
- initialize a variable called headsOrTails and set it to null
- console.log headsOrTails outside and at the end of the if-else block
- if coinFlip is equal to zero - store the value of headsOrTails to "Heads" else it is "Tails"
*/
var headsOrTails = null;

if (coinFlip == 0) {
    headsOrTails= "heads";
}
else {
    headsOrTails= "tails";
}
console.log(headsOrTails);

/* 
Gold:
- instead of making coinFlip a hard-coded value of 0 or 1. Make it a random number using Math.floor and Math.random

*/
// var coinflip = Math.round(Math.random());
