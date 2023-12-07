function randomNumber() {
  return Math.floor(Math.random(0.5) * 100);
}

function guessNum(userGuess) {
  let secretNumber = 50;
  let numberOfGuesses = 0;

  function checkGuess(userGuess) {
      if (userGuess === secretNumber) {
          console.log('Congratulations! You guessed the correct');
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
guessNum(50);
guessNum(20);
guessNum(60);
