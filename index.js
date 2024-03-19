const choises = ["rock ✊", "paper 🤚", "scissors ✌️"];
const playerDisplay = document.querySelector("#playerDisplay");
const computerDisplay = document.querySelector("#computerDisplay");
const resultDisplay = document.querySelector("#resultDisplay");
let playerCounter = 0;
let computerCounter = 0;

function playGame(playerChoice) {
  const computerChoice = choises[Math.floor(Math.random() * choises.length)];
  let result = "";

  if (playerChoice === computerChoice) {
    result = "It's a tie";
  } else {
    switch (playerChoice) {
      case "rock ✊":
        result = computerChoice === "scissors" ? "you lost" : "you won";
        break;
      case "paper 🤚":
        result = computerChoice === "rock" ? "you lost" : "you won";
        break;
      case "scissors ✌️":
        result = computerChoice === "paper" ? "you lost" : "you won";
        break;
    }
  }

  playerDisplay.textContent = `Player : ${playerChoice} `;
  computerDisplay.textContent = `Computer : ${computerChoice}`;
  resultDisplay.textContent = result;

  resultDisplay.classList.remove("greenText", "redText");

  switch (result) {
    case "you won":
      resultDisplay.classList.add("greenText");
      playerCounter++;
      document.getElementById("playerCounter").textContent = playerCounter;
      break;
    case "you lost":
      resultDisplay.classList.add("redText");
      computerCounter++;
      document.getElementById("computerCounter").textContent = computerCounter;
      break;
  }
}
