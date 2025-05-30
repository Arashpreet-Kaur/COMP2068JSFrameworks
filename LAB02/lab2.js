// Import the prompt package
const prompt = require('prompt');

// Start the prompt
prompt.start();

// Ask the user for their choice
prompt.get(['userSelection'], function (err, result) {
  if (err) {
    console.error(err);
    return;
  }

  let userSelection = result.userSelection.toUpperCase();
  console.log(`User selected: ${userSelection}`);

  // Generate computer choice
  let random = Math.random();
  let computerSelection = '';

  if (random <= 0.34) {
    computerSelection = 'PAPER';
  } else if (random <= 0.67) {
    computerSelection = 'SCISSORS';
  } else {
    computerSelection = 'ROCK';
  }

  console.log(`Computer selected: ${computerSelection}`);

  // Determine the winner
  if (userSelection === computerSelection) {
    console.log("It's a tie!");
  } else if (
    (userSelection === 'ROCK' && computerSelection === 'SCISSORS') ||
    (userSelection === 'PAPER' && computerSelection === 'ROCK') ||
    (userSelection === 'SCISSORS' && computerSelection === 'PAPER')
  ) {
    console.log("User Wins!");
  } else {
    console.log("Computer Wins!");
  }
});

