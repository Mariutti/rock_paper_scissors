// creating a function where the computer gets a choice to play the game
function getComputerChoice(){
    const gameOptions = ["rock", "paper", "scissors"]
    return gameOptions[Math.floor(Math.random()*3)]
}


// creating a var where we kept the player choice. I used a function to return the result:
function choseOne() {
    return window.prompt("rock, paper or scissors!").toLowerCase();
}


// creating a function to play a single round of the game
function playRound(playerSelection, computerSelection){
    console.log("Computer gets " + computerSelection)
    console.log("You chose " + playerSelection);

    //analyzing all results to win - to lose - to tie
    //showing a message with the round result
    //returning a single word with the result
    if ((playerSelection == "rock" && computerSelection == "scissors") ||
        (playerSelection == "paper" && computerSelection == "rock") || 
        (playerSelection == "scissors" && computerSelection == "paper")){
        console.log("You WIN!!! " + playerSelection +" beats " +  computerSelection+ " !!!");
        return "player"

    } else if ((playerSelection == "rock" && computerSelection == "paper") || 
            (playerSelection == "paper" && computerSelection == "scissors") || 
            (playerSelection == "scissors" && computerSelection == "rock")){
        console.log("You Lose! "+ computerSelection+" beats " + playerSelection +" !");
        return "computer"

    } else if (playerSelection == computerSelection){
        console.log("It's a tie! Nobody wins!");
        return "tie"
    }
}

// creating a function to play a game with five round
function game(){
    //creating a var to count the rounds
    let rounds = 1;
    //creating a var to count the player points
    let playerPoints = 0;
    //creating a ver to count the computer points
    let computerPoints = 0;

    // creating a loop of five rounds to play the function playRound
    for (let i = 0; i < 5; i++){
        // creating a var to keep the result o the function playRound()
        let gameResult = playRound(choseOne(), getComputerChoice());
        
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
        console.log("Round "+ rounds +" results: Player: " + playerPoints + " ---- Computer: " + computerPoints);
        rounds++;

        //it's a five round game, so if someone gets 3 points, we have a winner and don't need to play to the end of rounds
        if (playerPoints == 3){
            return window.alert("You won 3 rounds and you're the winner!!!")
        } else if (computerPoints == 3) {
            return window.alert("Computer won 3 rounds, you lose the game!")
        }
    }

    //if nobody gets 3 points till the end of loop, we will compare the results do declare the winner (or tie,)
    if (playerPoints > computerPoints){
        return window.alert("You won "+ playerPoints +" rounds and you're the winner!!!")
    } else if (playerPoints < computerPoints){
        return window.alert("Computer won "+ computerPoints +" rounds, you lose the game!")
    } else {
        return window.alert("It's a tie, nobody won.")
    }

}
game();