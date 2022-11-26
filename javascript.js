console.log("Hello World")


// creating a function where the computer gets a choice to play the game
function getComputerChoice(){
    const gameOptions = ["rock", "paper", "scissors"]
    return gameOptions[Math.floor(Math.random()*3)]
}


// creating a var where we kept the player choice:
function choseOne() {
    const playerChoice = window.prompt("rock, paper or scissors!").toLowerCase();
    return playerChoice;
}


// creating a function to play a single round of the game
function playRound(playerSelection, computerSelection){
    console.log("Computer gets " + computerSelection)
    console.log("You chose " + playerSelection);

    switch (playerSelection) {
        case "rock":
            switch (computerSelection) {
                case "rock":
                    console.log("It's a tie! Nobody wins!");
                    return "tie"
                    break;
                case "paper":
                    console.log("You Lose! "+ computerSelection+" beats " + playerSelection +" !");
                    return "computer"
                    break;
                case "scissors":
                    console.log("You WIN!!! " + playerSelection +" beats " +  computerSelection+ " !!!");
                    return "player"
                    break;
            
                default:
                    break;
            }
            
            break;
        case "paper":
            switch (computerSelection) {
                case "rock":
                    console.log("You WIN!!! " + playerSelection +" beats " +  computerSelection+ " !!!");
                    return "player"
                    break;
                case "paper": 
                    console.log("It's a tie! Nobody wins!");
                    return "tie"
                    break;
                case "scissors":
                    cconsole.log("You Lose! "+ computerSelection+" beats " + playerSelection +" !");
                    return "computer"
                    break;
            
                default:
                    break;
            }
                
            break;  
                
        case "scissors":
            switch (computerSelection) {
                case "rock":
                    console.log("You Lose! "+ computerSelection+" beats " + playerSelection +" !");
                    return "computer"
                    break;
                case "paper":
                    console.log("You WIN!!! " + playerSelection +" beats " +  computerSelection+ " !!!");
                    return "player"
                    break;
                case "scissors":
                    console.log("It's a tie! Nobody wins!");
                    return "tie"
                    break;
            
                default:
                    break;
            }            
            break;                
    
        default:
            break;
    }
}


function game(){
    let rounds = 1;
    let playerPoints = 0;
    let computerPoints = 0;
    for (let i = 0; i < 5; i++){
        
        let gameResult = playRound(choseOne(), getComputerChoice());
        // console.log(gameResult)

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

        console.log("Round "+ rounds +" results: Player: " + playerPoints + " ---- Computer: " + computerPoints);
        rounds++;

        if (playerPoints == 3){
            return window.alert("You won 3 rounds and you're the winner!!!")
        } else if (computerPoints == 3) {
            return window.alert("Computer won 3 rounds, you lose the game!")
        }
    }

    if (playerPoints > computerPoints){
        return window.alert("You won "+ playerPoints +" rounds and you're the winner!!!")
    } else if (playerPoints < computerPoints){
        return window.alert("Computer won "+ computerPoints +" rounds, you lose the game!")
    } else {
        return window.alert("It's a tie, nobody won.")
    }

}
game();