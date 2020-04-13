function computerPlay() {
  let options = ["rock", "paper", "scissor"];
  return options[Math.floor(Math.random() * options.length)];
}

function playRound(playerSelection, computerSelection) {
  let options = ["rock", "paper", "scissor"];
  playerSelection = playerSelection.toLowerCase().trim();

  if (!options.some((item) => item == playerSelection)) {
    return "Please enter a valid option (rock, paper, scissor)";
  }
  return evaluateBattle(playerSelection, computerSelection);
}

function evaluateBattle(playerSelection, computerSelection) {
  let matchTemplate = `${playerSelection} vs ${computerSelection}!`;
  let winTemplate = `${matchTemplate} You WIN!`;
  let loseTemplase = `${matchTemplate} You LOSE!`;
  let drawTemplate = `${matchTemplate} DRAW!`;

  if (playerSelection == computerSelection) return drawTemplate;
  if (
    (playerSelection == "rock" && computerSelection == "scissor") ||
    (playerSelection == "paper" && computerSelection == "rock") ||
    (playerSelection == "scissor" && computerSelection == "paper")
  ) {
    return winTemplate;
  } else {
    return loseTemplase;
  }
}
