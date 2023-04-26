// how many rounds do they want to play
let numRounds = parseInt (prompt("How many rounds do you want to play?"));


// Initialize global variables for wins, losses, and ties
let wins = 0 ;
let ties = 0 ;
let losses = 0 ;


for (let i = 0; i < numRounds; i++) 
{

  // (rock, paper,or scissors)

  let userChoice = prompt ("Enter your choice: (r)ock, (p)aper, or (s)cissors")

  // Generate a random number between 0 and 2 to represent the computer's choice
  let computerChoice = Math.floor(Math.random() * 3); // 0 = rock, 1 = paper, 2 = scissors

  // the users result 
  if  (userChoice === 'r') {
    if  (computerChoice === 0) {
      ties++;
      alert("It's a tie!");
    } else if (computerChoice === 1) {
      wins++;
      alert("You win!");
      losses++;
      alert("You lose!");
    } else {


    }

  } else if  (userChoice === 'p') {
    if  (computerChoice === 0) {
      wins++;
      alert("You win!");
    } else if  (computerChoice === 1) {
      ties++;
      alert("It's a tie!");
    } else {
      losses++;
      alert("You lose!");
    }

  } else if (userChoice === 's') {
    if  (computerChoice === 0) {
      losses++;
      alert ("You lose!");
    } else if (computerChoice === 1) {
      wins++;
      alert ("You win!");
    } else {
      ties++;
      alert ("It's a tie!");
    }

  } else {
    alert ("Invalid choice!");
    i--; 
  }
}



// result 
alert (`You won ${wins} times, tied ${ties} times, and lost ${losses} times.`);