function randomNumber() {
  return Math.floor(Math.random() * 100);
}

function guessGame(userGuess) {
  let secretNumber = randomNumber();
  let numberOfGuesses = 0;

  function checkGuess(userGuess) {
      if (userGuess === secretNumber) {
          console.log('Congratulations! You guessed the correct number in ${numberOfGuesses} guesses.');
      } else if (userGuess < secretNumber) {
          console.log('Too low! Try again.');
      } else {
          console.log('Too high! Try again.');
      }
  }

  if ( userGuess < 1 || userGuess > 100) {
      console.log('Invalid input. Please enter a number between 1 and 100.');
  } else {
      numberOfGuesses++;
      checkGuess(userGuess);
  }
}
guessGame(100);
guessGame(20);