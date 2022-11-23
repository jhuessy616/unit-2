/* 
!BRONZE
Write two variables. One of those variables will store your name. The other variable will store the name of a friend.

Find out what property you can use to check how long their name is, as well as your own.

Goal: console.log how many letters each of the names are...
*/

var myName = "Julia";
var myFriendsName = "Marce";

console.log(myName.length);
console.log(myFriendsName.length);

/*
!SILVER

Write a conditional to see who has the longer name.
    -Use string interpolation to console.log whose name is longer
    -Ex: My name is longer than Adam's

*/
if (myName.length > myFriendsName.length) {
  console.log("My name is longer than " + myFriendsName + "'s");
} else if (myName.length == myFriendsName.length) {
  console.log("Our names are the same length!");
} else {
  console.log(myFriendsName + "'s name is longer");
}

/*
!GOLD
In the console include how many letters difference there are between the names.

Example: Adam's name is shorter than mine by 4 letters. 

*There is also one additional case that should be handled that has not been mentioned so far. See if you can add that to your conditional.

*/
var difference = (myName.length - myFriendsName.length);
if (difference > 0)
 { console.log("My name is longer than " + myFriendsName + "'s by " + difference);
}
else if (difference == 0) {
  console.log("Our names are the same length!");
} 
else {
  console.log(myFriendsName + "'s name is longer by " + Math.abs(difference));
}

