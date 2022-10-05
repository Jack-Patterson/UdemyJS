'use strict';

document.querySelector('.check').addEventListener('click', () => {
  const guess = Number(document.querySelector('.guess').value);
  if (hasGuesses) {
    guessOutput(guess);
  }
});

document.querySelector('.again').addEventListener('click', () => {
  resetValues();
  secretNo = genRandomNo();
  hasGuesses = true;
});

const guessOutput = guess => {
  if (!guess) {
    document.querySelector('.message').textContent = 'No number input!';
  } else if (guess > secretNo) {
    document.querySelector('.message').textContent = 'Guess is too high!';
    decrementScore();
  } else if (guess < secretNo) {
    document.querySelector('.message').textContent = 'Guess is too low!';
    decrementScore();
  } else if (guess === secretNo) {
    winGame();
  }
};

const decrementScore = () => {
  if (document.querySelector('.score').textContent > 0) {
    document.querySelector('.score').textContent--;
  }
  if (Number(document.querySelector('.score').textContent) === 0) {
    loseGame();
  }
};

const loseGame = () => {
  document.querySelector('.message').textContent = 'Out of guesses! You lose!';
  hasGuesses = false;
};

const winGame = () => {
  document.querySelector('.message').textContent = 'Correct Number!';
  document.querySelector('.number').textContent = secretNo;
  document.querySelector('.number').style.width = '30rem';
  document.querySelector('body').style.backgroundColor = '#60b347';
  if (Number(document.querySelector('.score').textContent) > highScore) {
    highScore = Number(document.querySelector('.score').textContent);
    document.querySelector('.highscore').textContent = highScore;
  }
};

const genRandomNo = () => {
  const secretNo = Math.trunc(Math.random() * 20) + 1;
  console.log(secretNo);
  return secretNo;
};

const resetValues = () => {
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.score').textContent = 20;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
};

let secretNo = genRandomNo();
let hasGuesses = true;
let highScore = 0;
