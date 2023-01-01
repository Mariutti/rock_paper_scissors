const points = document.querySelector("#points");
//creating a var to count the rounds
let rounds = 1;
//creating a var to count the player points
let playerPoints = 0;
//creating a ver to count the computer points
let computerPoints = 0;

const pOnePoints = document.querySelector("#pOnePoints");
const pTwoPoints = document.querySelector("#pTwoPoints");
pOnePoints.innerText = playerPoints;
pTwoPoints.innerText = computerPoints;

const paraResult = document.querySelector("#results");
paraResult.innerText = "Scoreboard";

const paraPoints = document.querySelector("#points");

const btnRock = document.querySelector(".buttonRock");
const btnPaper = document.querySelector(".buttonPaper");
const btnScissors = document.querySelector(".buttonScissors");

btnRock.addEventListener("click", () => {
  let playerChoice = "rock";
  game(playerChoice);
});

btnPaper.addEventListener("click", () => {
  let playerChoice = "paper";
  game(playerChoice);
});

btnScissors.addEventListener("click", () => {
  let playerChoice = "scissors";
  game(playerChoice);
});

// creating a function where the computer gets a choice to play the game
function getComputerChoice() {
  const gameOptions = ["rock", "paper", "scissors"];
  return gameOptions[Math.floor(Math.random() * 3)];
}

// creating a var where we kept the player choice:
// function playerChoice() {
//   return window.prompt("rock, paper or scissors!").toLowerCase();
// }

// creating a function to play a single round of the game
function playRound(playerSelection, computerSelection) {
  if (rounds > 5) {
    rounds = 1;
    //creating a var to count the player points
    playerPoints = 0;
    //creating a ver to count the computer points
    computerPoints = 0;
  }
  paraResult.innerText = "You chose " + playerSelection;
  paraResult.innerText += "\nComputer gets " + computerSelection;

  //analyzing all results to win - to lose - to tie
  //showing a message with the round result
  //returning a single word with the result
  if (
    (playerSelection == "rock" && computerSelection == "scissors") ||
    (playerSelection == "paper" && computerSelection == "rock") ||
    (playerSelection == "scissors" && computerSelection == "paper")
  ) {
    paraResult.innerText +=
      "\nResultado do jogo: You WIN!!! " +
      playerSelection +
      " beats " +
      computerSelection +
      " !!!";
    return "player";
  } else if (
    (playerSelection == "rock" && computerSelection == "paper") ||
    (playerSelection == "paper" && computerSelection == "scissors") ||
    (playerSelection == "scissors" && computerSelection == "rock")
  ) {
    paraResult.innerText +=
      "\nResultado do jogo: You Lose! " +
      computerSelection +
      " beats " +
      playerSelection +
      " !";
    return "computer";
  } else if (playerSelection == computerSelection) {
    paraResult.innerText += "\nResultado do jogo: It's a tie! Nobody wins!";
    return "tie";
  }
}
// creating a function to play a game with five round
function game(playerChoice) {
  // creating a var to keep the result of the function playRound()
  let gameResult = playRound(playerChoice, getComputerChoice());

  //giving the points of the winner
  switch (gameResult) {
    case "player":
      playerPoints += 1;
      break;

    case "computer":
      computerPoints += 1;
      break;

    default:
      break;
  }
  //showing the round number and the result of rounds till there
  paraPoints.innerText =
    "Round " +
    rounds +
    " results: Player: " +
    playerPoints +
    " ---- Computer: " +
    computerPoints +
    "\n";

  pOnePoints.innerText = playerPoints;
  pTwoPoints.innerText = computerPoints;
  //it's a five round game, so if someone gets 3 points, we have a winner and don't need to play to the end of rounds
  if (playerPoints == 3 && rounds >= 3) {
    paraPoints.innerText += "You won 3 rounds and you're the winner!!!";
    rounds = 0;
    //creating a var to count the player points
    playerPoints = 0;
    //creating a ver to count the computer points
    computerPoints = 0;
  } else if (computerPoints == 3 && rounds >= 3) {
    paraPoints.innerText += "Computer won 3 rounds, you lose the game!";
    rounds = 0;
    //creating a var to count the player points
    playerPoints = 0;
    //creating a ver to count the computer points
    computerPoints = 0;
  }

  //if nobody gets 3 points till the end of loop, we will compare the results do declare the winner (or tie,)
  if (rounds == 5 && playerPoints > computerPoints) {
    paraPoints.innerText +=
      "You won " + playerPoints + " rounds and you're the winner!!!";
  } else if (rounds == 5 && playerPoints < computerPoints) {
    paraPoints.innerText +=
      "Computer won " + computerPoints + " rounds, you lose the game!";
  } else if (rounds == 5 && playerPoints == computerPoints) {
    paraPoints.innerText += "It's a tie, nobody won.";
  }
  rounds++;
}
