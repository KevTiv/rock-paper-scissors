function computerPlay(){
    const nbChoice = 3; //Number of choices available to the computer
    const minimChoice = 1; //The computer has to atleast make 1 choice

    /* Generate a number between 1 & 3 to determine computer choice */
    let computerChoice = Math.floor(Math.random() * nbChoice) + minimChoice;

    /* Return computer choice based on random number generated */
    if (computerChoice === 1) return "Paper";
    if (computerChoice === 2) return "Rock";
    if (computerChoice === 3) return "Scissor";
}

function userPlay(){
    let input = prompt("Enter your choice:");
    let userInput = input.toLowerCase();

    if (userInput === "paper") return "Paper";
    if (userInput === "rock") return "Rock";
    if (userInput === "scissor") return "Scissor";
}
let userResult =0;
let compResult = 0;

function setComputerScore(){
    compResult += 1;
    console.log("Computer score: ",compResult);
}
function setUserScore(){
    userResult += 1;
    console.log("User score: ",userResult);
}



function playRound(playerSelection, computerSelection){
    // Computer win con
    if(computerSelection === "Rock" && playerSelection ==="Scissor"){
        setComputerScore();
        return "Computer win! Rock beats scissors";
    }
    if(computerSelection === "Scissor" && playerSelection ==="Paper"){
        setComputerScore();
        return "Computer win! Scissors beats papers";
    }
    if(computerSelection === "Paper" && playerSelection ==="Rock"){
        setComputerScore();
        return "Computer win! Papers beats Rocks";
    }

    // User win con
    if(playerSelection === "Rock" && computerSelection ==="Scissor"){
        setUserScore();
        return "You win! Rock beats scissors";
    }
    if(playerSelection === "Scissor" && computerSelection ==="Paper"){
        setUserScore();
        return "You win! Scissors beats papers";
    }
    if(playerSelection === "Paper" && computerSelection ==="Rock"){
        setUserScore();
        return "You win! Papers beats Rocks";
    }

    // Draw con
    if(playerSelection === "Rock" && computerSelection ==="Rock") return "It's a draw! you both chose rocks";
    if(playerSelection === "Scissor" && computerSelection ==="Scissor") return "It's a draw! you both chose scissors";
    if(playerSelection === "Paper" && computerSelection ==="Paper") return "It's a draw! you both chose papers";
}

function getUserScore(){
    return userResult;
}
function getCompScore(){
    return compResult;
}
//console.log(playRound(playerSelection, computerSelection));
function game(){
    for (let i=0; i< 5; i++){
        const playerSelection = userPlay();
        const computerSelection = computerPlay();
        console.log(playRound(playerSelection, computerSelection));
    }
    const computerScore = getCompScore();
    const userScore = getUserScore();
    if (computerScore > userScore) return "Computer won this game!";
    if (userScore > computerScore) return "You won this game!";
    if (computerScore === userScore) return "It's a draw";
}

console.log(game());