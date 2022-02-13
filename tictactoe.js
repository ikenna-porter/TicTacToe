//Computer's Choice
function computerPlay () {
    const computerTurn = Math.floor(Math.random() * 3 + 1);
    if (computerTurn === 1) {
        return 'rock'
    } else if (computerTurn === 2) {
        return 'paper'
    } else {
        return "scissors"
    }
}

//Player's Choice 
function playerPlay () {
    const playerInput = prompt("Type either 'Rock', 'Paper' or 'Scissors' ").toLowerCase();
    return playerInput;
}

//Establishes conditions to determine winner and counts how many games have a winner
let playerWins = 0;
let computerWins = 0;

function playRound (playerSelection, computerSelection) {
    if (playerSelection === 'rock' && computerSelection === 'scissors') {
        playerWins++;
        return `${playerSelection} beats ${computerSelection}. You win!`
    } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
        playerWins++;
        return `${playerSelection} beat ${computerSelection}. You win!`
    } else if (playerSelection === 'paper' && computerSelection === 'rock') {
        playerWins++;
        return `${playerSelection} beats ${computerSelection}. You win!`
    } else if (playerSelection === computerSelection) {
        return "It's a tie. Play another round."
    } else {
        computerWins++;
        return `${computerSelection} beats ${playerSelection}. You lose!`
    }
}


//Game with 5 rounds. Determines winner of 5 rounds.
function game(round) {

    while (playerWins + computerWins < 5) {
        console.log(playRound(playerPlay(), computerPlay()));
    }

    if (playerWins > computerWins) {
        console.log("Congrats! You've won the game!!!")
    } else {
        console.log("Uh oh...you've lost the game. Try again.")
    }

}

game(playRound(playerPlay(), computerPlay()));