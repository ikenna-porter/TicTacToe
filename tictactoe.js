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

//Conditions to determine winner
function playRound (playerSelection, computerSelection) {
    if (playerSelection === 'rock' && computerSelection === 'scissors') {
        return `${playerSelection} beats ${computerSelection}. You win!`
    } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
        return `${playerSelection} beats ${computerSelection}. You win!`
    } else if (playerSelection === 'paper' && computerSelection === 'rock') {
        return `${playerSelection} beats ${computerSelection}. You win!`
    } else if (playerSelection === computerSelection) {
        return "It's a tie. Play another round."
    } else {
        return `${computerSelection} beats ${playerSelection}. You lose!`
    }
}

console.log(playRound(playerPlay(), computerPlay()));