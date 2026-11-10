// scripts/rockPaperScissors.js — yours to write.
//
// The markers below name requirements from README.md, so the brief, your
// Issues, the agent and this file all use the same words. Nothing reads them.

// FR005 — Rock Paper Scissors.
// Read the player's move from process.argv, generate a random move for the
// computer, decide the winner (or a draw) by the rules of the game, and print
// the result to the console.
//
// node scripts/rockPaperScissors.js rock
// # You chose rock. Computer chose scissors. You win!

// FR008 — Reject an invalid or missing move.
// If no move is given, or it isn't one of rock, paper or scissors, print a
// usage message instead of letting the program crash or silently guess.

const args = process.argv.slice(2);

const playerMove = args[0];

if (playerMove === undefined) {
    console.log('Please choose rock, paper or scissors.');
    return;
}

const validMoves = ['rock', 'paper', 'scissors'];

const move = playerMove.toLowerCase();
const isValid = validMoves.includes(move);

if (isValid === false) {
    console.log('Invalid move. Please choose rock, paper or scissors.');
    return;
}

const randomIndex = Math.floor(Math.random() * validMoves.length);

const computerMove = validMoves[randomIndex];

let result = ('')

if (move === computerMove) {
    result = 'Draw!';
} else if (move === 'rock' && computerMove === 'scissors') {
    result = 'You win!';
} else if (move === 'paper' && computerMove === 'rock') {
    result = 'You win!';
} else if (move === 'scissors' && computerMove === 'paper') {
    result = 'You win!';
} else { result = 'You lose!' }

console.log(`You chose ${move}. Computer chose ${computerMove}. ${result}`);
