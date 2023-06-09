let counterPlayer = 0;
let counterComputer = 0;

function getComputerChoice(){
    let choiceRockPaperScissors = ["Rock", "Paper", "Scissors"];
    let randomNumber = Math.floor(Math.random() * 3);
    return choiceRockPaperScissors[randomNumber].toLowerCase();
}

function playRound(playerSelection, computerSelection){
    playerSelection.toLowerCase();
    computerSelection.toLowerCase();
    if (playerSelection === computerSelection){
        console.log("Draw");
    } 
    else if (playerSelection == "rock"){
        if (computerSelection == "paper"){
            console.log("You lose");
            counterComputer++;
        } else {
            console.log("You won");
            counterPlayer++;
        }
    } 
    
    else if (playerSelection == "scissors"){
        if (computerSelection == "rock"){
            console.log("You lose");
            counterComputer++;
        } else {
            console.log("You won");
            counterPlayer++;
        }
    } 
    
    else if (playerSelection == "paper"){
        if (computerSelection == "scissors"){
            console.log("You lose");
            counterComputer++;
        } else {
            console.log("You won");
            counterPlayer++;
        }
    }

    console.log(playerSelection, computerSelection);
    console.log(`Player : ${counterPlayer}, Computer : ${counterComputer}`)

}

function game(){
    let playerSelection = prompt("Choose between rock, paper and scissors: ");
    let computerSelection = getComputerChoice();
    let i = 0;
    console.log(playRound(playerSelection, computerSelection));
    


}

for (let index = 0; index < 5; index++) {
    game();
    
}

if (counterPlayer > counterComputer) {
    console.log(`You won! Player : ${counterPlayer}, 
    Computer : ${counterComputer}`);
    
    
} else if (counterComputer > counterPlayer){
    console.log(`You lose! Computer : ${counterComputer}, 
    Player : ${counterPlayer}`);
    
} else {
    console.log(`It's a draw! Computer : ${counterComputer}, 
    Player : ${counterPlayer}`);
    
}


