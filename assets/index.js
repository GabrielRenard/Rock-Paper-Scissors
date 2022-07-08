const choices = document.querySelectorAll("img");
const userSelectionDisplay = document.querySelector("#user-selection");
const computerSelectionDisplay = document.querySelector("#computer-selection");
const result = document.querySelectorAll(".result");

const choicesArr = ["rock", "paper", "scissors"];

let userChoice;
let computerChoice;
let finalResult;

choices.forEach(choice =>
  choice.addEventListener("click", e => {
    userChoice = e.target.id;
    userSelectionDisplay.innerHTML = `<img src="./assets/Images/${userChoice}.png"/>`;
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
    computerChoice = "scissors";
  }
  computerSelectionDisplay.innerHTML = `<img src="./assets/Images/${computerChoice}.png"/>`;
}

function endResult() {
  if (computerChoice === userChoice) {
    finalResult = "Its a tie!";
  } else if (computerChoice === "rock" && userChoice === "paper") {
    finalResult = "You win!";
  } else if (computerChoice === "scissors" && userChoice === "rock") {
    finalResult = "You win!";
  } else if (computerChoice === "paper" && userChoice === "scissors") {
    finalResult = "You win!";
  } else {
    finalResult = "You lost!";
  }
  result.forEach(item => {
    item.innerText = finalResult;
  });
}
