const choices = document.querySelectorAll("button");
const userSelectionDisplay = document.querySelector("#user-selection");
const computerSelectionDisplay = document.querySelector("#computer-selection");
const result = document.querySelector("#result");

const choicesArr = ["rock", "paper", "scissors"];

let userChoice;
let computerChoice;
let finalResult;

choices.forEach(choice =>
  choice.addEventListener("click", e => {
    userChoice = e.target.id;
    userSelectionDisplay.innerHTML = userChoice;
    computerSelection();
    endResult();
  })
);

function computerSelection() {
  const randomIndex = Math.floor(Math.random() * choicesArr.length);
  computerChoice = choicesArr[randomIndex];
  if (randomIndex === 0) {
    computerChoice = "rock";
  } else if (randomIndex === 1) {
    computerChoice = "paper";
  } else {
    computerChoice = "scissor";
  }
  computerSelectionDisplay.innerHTML = computerChoice;
}

function endResult() {
  if (computerChoice === userChoice) {
    finalResult = "Its a tie!";
  } else if (computerChoice === "rock" && userChoice === "paper") {
    finalResult = "You win!";
  } else if (computerChoice === "scissor" && userChoice === "rock") {
    finalResult = "You win!";
  } else if (computerChoice === "paper" && userChoice === "scissor") {
    finalResult = "You win!";
  } else {
    finalResult = "You lost!";
  }
  result.innerHTML = finalResult;
}
