let playerSelection;
let computerSelection;
const choices = ["rock", "paper", "scissors"];

//Function call to run 5 rounds of the game and display the result
game();

/**
 * Returns a string based on randomly generated array index.
 *
 * @param {array object} choices The array containing rock, paper, and scissors.
 * @return {string} string "rock", "paper", or "scissors"
 */
function computerPlay(choices) {
    const index = Math.floor(Math.random() * choices.length);
    return choices[index];
}

/**
 * Returns the result of a single round of game
 * 
 * @param {string} playerSelection 
 * @param {string} computerSelection 
 * @returns {string} result of a single round of game
 */
function playRound(playerSelection, computerSelection) {
    let result;
    if (playerSelection == "rock") {
        if (computerSelection == "scissors") {
            result = `You Win! ${playerSelection} beats ${computerSelection}`;
        }
        else if (computerSelection == "paper") {
            result = `You Lose! ${computerSelection} beats ${playerSelection}`;
        }
        else {
            result = "It is a tie!";
        }
    }
    else if (playerSelection == "paper") {
        if (computerSelection == "rock") {
            result = `You Win! ${playerSelection} beats ${computerSelection}`;
        }
        else if (computerSelection == "scissors") {
            result = `You Lose! ${computerSelection} beats ${playerSelection}`;
        }
        else {
            result = "It is a tie!";
        }
    }
    else if (playerSelection == "scissors") {
        if (computerSelection == "paper") {
            result = `You Win! ${playerSelection} beats ${computerSelection}`;
        }
        else if (computerSelection == 'rock') {
            result = `You Lose! ${computerSelection} beats ${playerSelection}`;
        }
        else {
            result = "It is a tie!";
        }
    }

    return result;
}

/**
 * Returns the result of a game that has been converted to a shorter string
 * @param {string} result 
 * @returns {string} shortened result of a single game
 */
function calcResult(result) {
    if (result == `You Win! ${playerSelection} beats ${computerSelection}`) {
        result = "win";
    }
    else if (result == `You Lose! ${computerSelection} beats ${playerSelection}`) {
        result = "lose";
    }
    else if(result=="It is a tie!"){
        result="tie";
    }
    return result
}

//Checks user input for variable playerSelection
function inputValidation() {
    let sentinal=true;
    
    if (playerSelection == "rock" || playerSelection == "paper" || playerSelection == "scissors") {
        sentinal = false;
    }
    
    while (sentinal) {
        if (playerSelection != "rock" && playerSelection != "paper" & playerSelection != "scissors") {
            playerSelection = (prompt("Invalid input. Choose rock, paper or scissors")).toLowerCase();
        }
        else {
            sentinal = false;
        }
    }
}

//Runs 5 iteration of hte game and display finaly result
function game() {
    let result;
    let countWin = 0;
    let countLose = 0;
    let countTie=0;

    for (let i = 0; i < 5; i++) {
        console.log(`Starting game number ${i + 1}`);
        //ask for player input
        playerSelection = prompt("Choose rock, paper or scissors");
        //Checks if player clicked "Cancel" on the input prompt
        if(playerSelection==null){
            console.log("You chose to exit the game")
            return;
        }
        else{
            playerSelection=playerSelection.toLowerCase();
        }
        //Function call to validate user input
        inputValidation();
        console.log(`You used ${playerSelection}`);
        
        computerSelection = computerPlay(choices);
        console.log(`Computer used ${computerSelection}`);

        //Function call to run a single game and store the result
        result = playRound(playerSelection, computerSelection);
        console.log(result);

        //Function call to convert the result to a shorter string and store the updated result
        result = calcResult(result);
        if (result == "win") {
            countWin++;
        }
        else if (result == "lose") {
            countLose++;
        }
        else if(result=="tie"){
            countTie++;
        }
    }

    if (countWin > countLose) {
        console.log(`Final Score: \nYou: ${countWin}, Computer: ${countLose}, Tied: ${countTie}. You are the winner!`)
    }
    else if (countWin < countLose) {
        console.log(`Final Score: \nYou: ${countWin}, Computer: ${countLose}, Tied: ${countTie}. You've lost to the computer!`)
    }
    else {
        console.log("Final Score: \nIt's a tie!")
    }
}