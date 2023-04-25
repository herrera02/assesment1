// Part 1
// Declare 3 variables
let userChoice, randomNumber, computerChoice;


// Ask the user 
userChoice = prompt("Choose heads or tails: ");


// Generate random number and computer choice
randomNumber = Math.floor(Math.random() * 1);
if (randomNumber === 0) {
  computerChoice = "heads";
} else {
  computerChoice = "tails";
}


// Compare choices and display result
if (userChoice === computerChoice) {
  alert("You guessed right! The coin flip landed on " + userChoice);
} else {
  alert("Sorry, the coin flip landed on " + computerChoice);
}


// Part 2
let birthYear = prompt("Enter your birth year:");
let age = new Date().getFullYear() - birthYear;

if (age > 21) {
  alert("You are old enough to drink in the US");
} else if (age === 21) {
  alert("You are old enough to drink in the US...barely");
} else {
  alert("Sorry, you are not old enough to drink in the US");
}