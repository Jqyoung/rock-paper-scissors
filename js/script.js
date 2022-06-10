let playerSelection;
let computerSelection;
let playerScore = 0;
let computerScore = 0;
const choices = ["rock", "paper", "scissors"];

//Adds event listener to buttons
const buttons = document.querySelectorAll('.btn');
buttons.forEach((button) => {
    button.addEventListener('click', playRound)
})

const playerChoice=document.createElement('div');
const compChoice = document.createElement('div');
const roundResult = document.querySelector('.result');
const pScore = document.querySelector('.playerScore');
const cScore = document.querySelector('.computerScore');
const finalMessage = document.createElement('div');

//Function call to run 5 rounds of the game and display the result
//game();


//Returns a string based on randomly generated array index.
function computerPlay(choices) {
    const index = Math.floor(Math.random() * choices.length);
    return choices[index];
}


//Determines the result of 1 round of game
function playRound(e) {
    playerSelection = e.target.textContent.toLowerCase();
    computerSelection = computerPlay(choices);

    playerChoice.textContent=`Player chooses: ${playerSelection}`;
    document.body.insertBefore(playerChoice, roundResult);
    compChoice.textContent = `Computer chooses: ${computerSelection}`;
    document.body.insertBefore(compChoice, roundResult);

    let result;
    if (playerSelection == "rock") {
        if (computerSelection == "scissors") {
            result = `You Win! ${playerSelection} beats ${computerSelection}`;
        } else if (computerSelection == "paper") {
            result = `You Lose! ${computerSelection} beats ${playerSelection}`;
        } else {
            result = "It is a tie!";
        }
    } else if (playerSelection == "paper") {
        if (computerSelection == "rock") {
            result = `You Win! ${playerSelection} beats ${computerSelection}`;
        } else if (computerSelection == "scissors") {
            result = `You Lose! ${computerSelection} beats ${playerSelection}`;
        } else {
            result = "It is a tie!";
        }
    } else if (playerSelection == "scissors") {
        if (computerSelection == "paper") {
            result = `You Win! ${playerSelection} beats ${computerSelection}`;
        } else if (computerSelection == 'rock') {
            result = `You Lose! ${computerSelection} beats ${playerSelection}`;
        } else {
            result = "It is a tie!";
        }
    }

    roundResult.textContent = result;
    trackScore(result);
}

//Tracks the overall score and outcome of the game
function trackScore(result) {
    result = calcResult(result);

    if (playerScore == 0 && computerScore == 0) {
        pScore.textContent = `Your score: ${playerScore}`;
        cScore.textContent = `Computer score: ${computerScore}`;
    }


    if (result == 'win') {
        playerScore++;
        pScore.textContent = `Your score: ${playerScore}`;
    } else if (result == 'lose') {
        computerScore++;
        cScore.textContent = `Computer score: ${computerScore}`;    
    }
    if (playerScore == 5 || computerScore == 5) {  
        const restart = document.createElement('button'); 
        restart.textContent = 'Restart';
        document.body.appendChild(restart);
        buttons.forEach((button)=>{
            button.style.display='none'
        })
        playerChoice.textContent='';
        compChoice.textContent='';
        roundResult.textContent='';
        restart.addEventListener('click',()=>{
            buttons.forEach((button)=>{
                button.style.display='';
            })
            pScore.textContent='';
            cScore.textContent='';
            finalMessage.textContent='';
            restart.style.display='none';
        })
        
        if (playerScore == 5) {
            finalMessage.textContent = 'You are the final winner!'
            document.body.insertBefore(finalMessage,restart);
            playerScore = 0;
            computerScore = 0;
        }
        else if (computerScore == 5) {
            finalMessage.textContent='Computer is the final winner!'
            document.body.insertBefore(finalMessage,restart);
            computerScore = 0;
            playerScore = 0;
        }

    }
}




//Returns the result of a game that has been converted to a shorter string
function calcResult(result) {
    if (result == `You Win! ${playerSelection} beats ${computerSelection}`) {
        result = "win";
    } else if (result == `You Lose! ${computerSelection} beats ${playerSelection}`) {
        result = "lose";
    } else if (result == "It is a tie!") {
        result = "tie";
    }
    return result
}

// //Checks user input for variable playerSelection
// function inputValidation() {
//     let sentinal=true;

//     if (playerSelection == "rock" || playerSelection == "paper" || playerSelection == "scissors") {
//         sentinal = false;
//     }

//     while (sentinal) {
//         if (playerSelection != "rock" && playerSelection != "paper" & playerSelection != "scissors") {
//             playerSelection = (prompt("Invalid input. Choose rock, paper or scissors")).toLowerCase();
//         }
//         else {
//             sentinal = false;
//         }
//     }
// }

//Runs 5 iteration of the game and display finaly result
// function game() {
//     let result;
//     let countWin = 0;
//     let countLose = 0;
//     let countTie=0;

//     for (let i = 0; i < 5; i++) {
//         console.log(`Starting game number ${i + 1}`);
//         //ask for player input
//         playerSelection = prompt("Choose rock, paper or scissors");
//         //Checks if player clicked "Cancel" on the input prompt
//         if(playerSelection==null){
//             console.log("You chose to exit the game")
//             return;
//         }
//         else{
//             playerSelection=playerSelection.toLowerCase();
//         }
//         //Function call to validate user input
//         inputValidation();
//         console.log(`You used ${playerSelection}`);

//         computerSelection = computerPlay(choices);
//         console.log(`Computer used ${computerSelection}`);

//         //Function call to run a single game and store the result
//         result = playRound(playerSelection, computerSelection);
//         console.log(result);

//         //Function call to convert the result to a shorter string and store the updated result
//         result = calcResult(result);
//         if (result == "win") {
//             countWin++;
//         }
//         else if (result == "lose") {
//             countLose++;
//         }
//         else if(result=="tie"){
//             countTie++;
//         }
//     }

//     if (countWin > countLose) {
//         console.log(`Final Score: \nYou: ${countWin}, Computer: ${countLose}, Tied: ${countTie}. You are the winner!`)
//     }
//     else if (countWin < countLose) {
//         console.log(`Final Score: \nYou: ${countWin}, Computer: ${countLose}, Tied: ${countTie}. You've lost to the computer!`)
//     }
//     else {
//         console.log("Final Score: \nIt's a tie!")
//     }
// }