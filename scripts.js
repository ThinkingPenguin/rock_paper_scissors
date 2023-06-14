let counterPlayer = 0;
let counterComputer = 0;

// Initializing variable for sentence part
const containerSentence = document.querySelector('.sentence-container');
const sentence = document.createElement('p');
sentence.classList.add('sentence');
sentence.style.fontSize = '50px';

// initializing variable to display score for human
const human = document.querySelector('.left-side');
const humanScore = document.createElement('p');
humanScore.classList.add('human-score');
humanScore.style.fontSize = '50px';

// initializing variable to display score for computer
const computer = document.querySelector('.right-side');
const computerScore = document.createElement('p');
computerScore.classList.add('computer-score');
computerScore.style.fontSize = '50px';

// initializing variable to display who won point
const whoWonContainer = document.querySelector('.who-wins-container');
const whoWon = document.createElement('p');
whoWon.classList.add('who-won');
whoWon.style.fontSize = '50px';

function countPoint(){
    if (counterPlayer > counterComputer) {
        whoWonContainer.appendChild(whoWon);
        whoWon.textContent = `You won! Player : ${counterPlayer}  ||   
        Computer : ${counterComputer}`;
        
        
    } else if (counterComputer > counterPlayer){
        whoWonContainer.appendChild(whoWon);
        whoWon.textContent = `You lose! Player : ${counterPlayer} || 
        Computer : ${counterComputer}`;
        
    } else {
        whoWonContainer.appendChild(whoWon);
        whoWon.textContent = `It's a draw! Player : ${counterPlayer} || 
        Computer : ${counterComputer}`;
        
    }
    human.appendChild(humanScore);
    humanScore.textContent = `${counterPlayer}`;

    computer.appendChild(computerScore);
    computerScore.textContent = `${counterComputer}`;

}


function showChoices(playerChoice, computerChoice){
    const sentenceContent = `Human choose ${playerChoice} and computer 
    choose ${computerChoice}`;
    containerSentence.appendChild(sentence);
    return sentence.textContent = sentenceContent;

}


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

    showChoices(playerSelection, computerSelection);
    countPoint();
    if (counterComputer >= 5 && counterComputer > counterPlayer) {
        alert('You lose !');
        counterComputer = 0;
        counterPlayer = 0
    } else if (counterPlayer >= 5 && counterPlayer > counterComputer){
        alert('You won !');
        counterComputer = 0;
        counterPlayer = 0
    }
    
}

function game(){
    //let playerSelection = prompt("Choose between rock, paper and scissors: ");
    const buttons = document.querySelectorAll('button');
    buttons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            let computerChoice = getComputerChoice();
            let playerSelection = e.target.getAttribute('data-class');
            playRound(playerSelection, computerChoice);
    })
    
});
        
}

game();





