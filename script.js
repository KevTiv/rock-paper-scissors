function computerPlay(){
    const nbChoice = 3; //Number of choices available to the computer
    const minimChoice = 1; //The computer has to at least make 1 choice

    /* Generate a number between 1 & 3 to determine computer choice */
    let computerChoice = Math.floor(Math.random() * nbChoice) + minimChoice;

    /* Return computer choice based on random number generated */
    if (computerChoice === 1) return "Paper";
    if (computerChoice === 2) return "Rock";
    if (computerChoice === 3) return "Scissor";
}

const rockBtn = document.querySelector('#rockButton');
rockBtn.addEventListener('click',()=>{
    console.log("Rock button pressed!");
    game(userPlay("rock"));
});

const paperBtn = document.querySelector('#paperButton');
paperBtn.addEventListener('click',()=>{
    console.log("Paper button pressed!");
    game(userPlay("paper"));
});

const scissorBtn = document.querySelector('#scissorButton');
scissorBtn.addEventListener('click',()=>{
    console.log("Scissor button pressed!");
    game(userPlay("scissor"));
});

function userPlay(userInput){

  if (userInput === "paper") return "Paper";
  if (userInput === "rock") return "Rock";
  if (userInput === "scissor") return "Scissor";
}

let userResult =0;
let compResult = 0;

function setComputerScore(){
    compResult += 1;
    console.log("Computer score: ",compResult);
    if(compResult === 5){
        let winner = winCheck();
        alert(winner);
        location.reload();
    }
}
function setUserScore(){
    userResult += 1;
    console.log("User score: ",userResult);
    if(userResult === 5){
        let winner = winCheck();
        alert(winner);
        location.reload();
    }
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

const userEmoji = document.querySelector('#humanEmoji');
const compEmoji = document.querySelector('#computerEmoji');

const paper = "????";
const rock = "????";
const scissor = "????";

function setHumanEmojiChoice(choice){
    if(choice === "Paper") return userEmoji.textContent = paper;

    if(choice === "Rock") return userEmoji.textContent = rock;

    if(choice === "Scissor") return userEmoji.textContent = scissor;
}
function setComputerEmojiChoice(choice){
    if(choice === "Paper") return compEmoji.textContent = paper;

    if(choice === "Rock") return compEmoji.textContent = rock;

    if(choice === "Scissor") return compEmoji.textContent = scissor;
}
//console.log(playRound(playerSelection, computerSelection));
const winText = document.querySelector('.winnerText');
const currentUserScore = document.querySelector('#userScore');
const currentCompResult = document.querySelector('#compScore');

function game(userChoice){

    const computerSelection = computerPlay();
    const playerSelection = userChoice;
    setHumanEmojiChoice(playerSelection);
    setComputerEmojiChoice(computerSelection);
    winText.textContent = playRound(playerSelection, computerSelection);

    currentUserScore.textContent = "User score: "+ getUserScore();
    currentCompResult.textContent = "Computer score: "+ getCompScore();
}

function winCheck(){

    const computerScore = getCompScore();
    const userScore = getUserScore();

    if (computerScore > userScore) return ("Computer won this game!" + "\n\nFinal Score" +
    "\nYour score: " + getUserScore() + "\t\tComputer Score: " + getCompScore());

    if (userScore > computerScore) return ("You won this game!"+ "\n\nFinal Score" +
    "\nYour score: " + getUserScore() + "\t\tComputer Score: " + getCompScore());
    //if (computerScore === userScore) return "This game is a draw";
}


//console.log(game());
