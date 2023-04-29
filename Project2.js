let wins = 0;

let losses = 0;

let ties = 0;

function computerChoice() {

  const choices = ["rock", "paper", "scissors"];

  const randomIndex = Math.floor(Math.random() * 3);

  return choices[randomIndex];
}

function playRound(userChoice) {

  const computer = computerChoice();

  let result;

  if (userChoice === "rock") {

    if (computer === "scissors") {

      result = "win";

    } else if (computer === "paper") {
    
      result = "lose";

    } else {
      result = "tie";
    }
  } else if (userChoice === "paper") {

    if (computer === "rock") {
      result = "win";

      result = "lose";

    } else {
      result = "tie";}

  } else if (userChoice === "scissors") {

    if (computer === "paper") {
      result = "win";
    } else if (computer === "rock") {

      result = "lose";
    } else {
      result = "tie";}}
      
  if (result === "win") {

    wins++;

  } else if (result === "lose") {

    losses++;

  } else {

    ties++; }

  document.getElementById("wins").innerHTML = wins;

  document.getElementById("ties").innerHTML = ties;

  document.getElementById("losses").innerHTML = losses;}

document.getElementById("rock").addEventListener("click", function() {
  playRound("rock");});

document.getElementById("paper").addEventListener("click", function() {
  playRound("paper");});

document.getElementById("scissors").addEventListener("click", function() {
  playRound("scissors");});
