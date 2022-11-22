console.log("Hello World")


// creating a function where the computer gets a choice to play the game
function getComputerChoice(){
    const gameOptions = ["rock", "paper", "scissors"]
    return gameOptions[Math.floor(Math.random()*3)]
}
console.log(getComputerChoice())

// creaating a var where we kept the player choice:
const playerChoice = window.prompt("rock, paper or scissors!").toLowerCase();
console.log(playerChoice);


// creating a function to play a single round of the game
function playOneRound(playerSelection, computerSelection){
    switch (playerSelection) {
        case "rock":
            switch (computerSelection) {
                case "rock":
                    return "There's a tie! Nobody wins!"
                    break;
                case "paper":
                    return "You Lose! "+ computerSelection+" beats " + playerSelection +" !"
                    break;
                case "scissors":
                    return "You WIN!!! " + playerSelection +" beats " +  computerSelection+ " !!!"
                    break;
            
                default:
                    break;
            }
            
            break;
        case "paper":
            switch (computerSelection) {
                case "rock":
                    return "You WIN!!! " + playerSelection +" beats " +  computerSelection+ " !!!"
                    break;
                case "paper":
                    return "There's a tie! Nobody wins!"
                    break;
                case "scissors":
                    return "You Lose! "+ computerSelection+" beats " + playerSelection +" !"
                    break;
            
                default:
                    break;
            }
                
            break;  
                
        case "scissors":
            switch (computerSelection) {
                case "rock":
                    return "You Lose! "+ computerSelection+" beats " + playerSelection +" !"
                    break;
                case "paper":
                    return "You WIN!!! " + playerSelection +" beats " +  computerSelection+ " !!!"
                    break;
                case "scissors":
                    return "There's a tie! Nobody wins!"
                    break;
            
                default:
                    break;
            }            
            break;                
    
        default:
            break;
    }
}

console.log(playOneRound(playerChoice, getComputerChoice()))
