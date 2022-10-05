'use strict';

const dice = document.querySelector('.dice');
dice.classList.add('hidden');

let currentScore = 0;
let isGameWon = false;

const btn = {
  new: document.querySelector('.btn--new'),
  roll: document.querySelector('.btn--roll'),
  hold: document.querySelector('.btn--hold'),
};

const player0 = {
  player: document.querySelector('.player--0'),
  name: document.querySelector('#name--0'),
  score: document.querySelector('#score--0'),
  currentScore: document.querySelector('#current--0'),
};
const player1 = {
  player: document.querySelector('.player--1'),
  name: document.querySelector('#name--1'),
  score: document.querySelector('#score--1'),
  currentScore: document.querySelector('#current--1'),
};
let activePlayer = player0;

const setScores = () => {
  player0.score.textContent = 0;
  player1.score.textContent = 0;
  player0.currentScore.textContent = 0;
  player1.currentScore.textContent = 0;
};
setScores();

btn.roll.addEventListener('click', () => {
  if (isGameWon) return;

  const diceRoll = Math.trunc(Math.random() * 6) + 1;

  dice.classList.remove('hidden');
  dice.src = `dice-${diceRoll}.png`;

  if (diceRoll !== 1) {
    currentScore += diceRoll;
    activePlayer.currentScore.textContent = currentScore;
  } else {
    changePlayer();
  }
});

btn.hold.addEventListener('click', () => {
  if (isGameWon) return;

  activePlayer.score.textContent =
    Number(activePlayer.score.textContent) + currentScore;

  if (activePlayer.score.textContent >= 20) {
    endGame();
  } else {
    changePlayer();
  }
});

btn.new.addEventListener('click', () => {
  dice.classList.add('hidden');

  activePlayer.player.classList.remove('player--winner');
  if (activePlayer !== player0) {
    changePlayer();
  }
  setScores();

  isGameWon = false;
  currentScore = 0;
});

const changePlayer = () => {
  currentScore = 0;
  activePlayer.currentScore.textContent = 0;

  if (activePlayer === player0) {
    activePlayer.player.classList.remove('player--active');
    activePlayer = player1;
    activePlayer.player.classList.add('player--active');
  } else {
    activePlayer.player.classList.remove('player--active');
    activePlayer = player0;
    activePlayer.player.classList.add('player--active');
  }
};

const endGame = () => {
  activePlayer.player.classList.add('player--winner');
  isGameWon = true;
};
