addEventListeners();
document.getElementById("rock").focus();

function computerPlay() {
  let options = ["rock", "paper", "scissor"];
  return options[Math.floor(Math.random() * options.length)];
}

/*
  returns 1 for player win, 0 for draw and -1 for computer win
*/
function decideWinner(playerSelection, computerSelection) {
  if (playerSelection == computerSelection) return 0;
  if (
    (playerSelection == "rock" && computerSelection == "scissor") ||
    (playerSelection == "paper" && computerSelection == "rock") ||
    (playerSelection == "scissor" && computerSelection == "paper")
  ) {
    return 1;
  } else {
    return -1;
  }
}

function addEventListeners() {
  let buttons = document.getElementsByClassName("game-button");
  for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", playRound);
  }
  document.getElementById("button-ok").addEventListener("click", newRound);
}

function playRound(evt) {
  let selection = evt.target.id;
  let computerSelection = computerPlay();

  let playerLabel = document.getElementById("player-selection");
  playerLabel.textContent = selection;
  playerLabel.classList.add("animate-left");

  let computerLabel = document.getElementById("computer-selection");
  computerLabel.textContent = computerSelection;
  computerLabel.classList.add("animate-right");

  toggleGameButtonsEnable();

  let result = decideWinner(selection, computerSelection);
  displayResults(result);
}

function toggleGameButtonsEnable() {
  let buttons = document.getElementsByClassName("game-button");
  for (let i = 0; i < buttons.length; i++) {
    buttons[i].toggleAttribute("disabled");
  }
}

function displayResults(result) {
  let resultText;
  let winner;
  setTimeout(() => {
    switch (result) {
      case 1:
        resultText = "You WIN!";
        winner = "player";
        document
          .getElementById("player-selection")
          .classList.toggle("color-winner");
        document
          .getElementById("computer-selection")
          .classList.toggle("color-loser");

        break;
      case 0:
        resultText = "DRAW!";
        winner = "";
        break;
      case -1:
        resultText = "You LOSE!";
        winner = "computer";
        document
          .getElementById("player-selection")
          .classList.toggle("color-loser");
        document
          .getElementById("computer-selection")
          .classList.toggle("color-winner");
        break;
    }
    if (winner) {
      let winnerLabel = document.getElementById(winner + "-score");
      winnerLabel.textContent = +winnerLabel.textContent + 1;
    }
  }, 700);

  setTimeout(() => {
    document.getElementById("result-area").classList.toggle("hidden-item");
    document.getElementById("result").textContent = resultText;
    document.getElementById("button-ok").focus();
  }, 800);
}

function newRound() {
  document.getElementById("result-area").classList.toggle("hidden-item");
  toggleGameButtonsEnable();
  let playerLabel = document.getElementById("player-selection");
  playerLabel.textContent = "";
  playerLabel.classList.remove("animate-left", "color-winner", "color-loser");

  let computerLabel = document.getElementById("computer-selection");
  computerLabel.textContent = "";
  computerLabel.classList.remove(
    "animate-right",
    "color-winner",
    "color-loser"
  );

  document.getElementById("rock").focus();
}
