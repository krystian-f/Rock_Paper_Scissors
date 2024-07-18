"use strict";
const movesImgs = ['./img/rock.png', './img/paper.png', './img/scissors.png'];
const playerMove = [...document.querySelectorAll('.player__move')];
const gameResult = document.querySelector('.game-result');
const roundResult = document.querySelector('.round-result');
const roundResultImgs = [...document.querySelectorAll('.round-moves-img')];
const playersScore =[...document.querySelectorAll('.players__header_score')];
let gameResetBtn = document.querySelector('.game-reset');
let playerScore = 0;
let computerScore = 0;

// Game functions
let numberGenerator = function randomNumberGenerator() {
  let number = Math.floor(Math.random() * 3);
  return number;
} 

let game = function gameFunctions(player, computer) {
   if(player === 0 && computer === 0) {
      roundResult.textContent = `It's a tie`;
   } 

   if(player === 1 && computer === 1) {
      roundResult.textContent = `It's a tie`;
    }

    if(player === 2 && computer === 2) {
      roundResult.textContent = `It's a tie`;
    }

   if(player === 1 && computer === 0) {
      roundResult.textContent = `Player won this round`;
      playerScore++;
   } 

   if(player === 2 && computer === 0) {
      roundResult.textContent = `Computer won this round`;
      computerScore++;
   } 

   if(player === 0 && computer === 1) {
      roundResult.textContent = `Computer won this round`;
      computerScore++;
    } 

   if(player === 0 && computer === 2) {
      roundResult.textContent = `Player won this round`;
      playerScore++;
   } 

   if(player === 2 && computer === 1) {
      roundResult.textContent = `Player won this round`;
      playerScore++;  
    }

    if(player === 1 && computer === 2) {
      roundResult.textContent = `Computer won this round`;
      computerScore++;
    } 

   playersScore[0].textContent = playerScore;
   playersScore[1].textContent = computerScore;
}

let resetGame = function () {
  gameResetBtn.classList.add('active');
  gameResetBtn.addEventListener('click', () => {
    playerScore = 0;
    computerScore = 0;
    
    gameResult.innerText = '';
    roundResult.innerText = '';

    roundResultImgs[0].src = movesImgs[playerScore];
    roundResultImgs[1].src = movesImgs[computerScore];

    playersScore[0].textContent = playerScore;
    playersScore[1].textContent = computerScore;

    playerMove.forEach(move => move.addEventListener('click', playerMoveHandler));

    gameResetBtn.classList.remove('active');
  })  
}


let printGameWinner = function printGameWinner(){
  if(playerScore === 3 && computerScore <3) {
    gameResult.innerText = 'You have won the game';
  } else if (playerScore < 3 && computerScore === 3) {
    gameResult.innerText = 'Computer won the game';
  } 

  playerMove.forEach(move => move.removeEventListener('click', playerMoveHandler));
}


//Call Functions
let playerMoveHandler = function() {
  let playerValue = parseInt(this.dataset.value);  
  roundResultImgs[0].src = movesImgs[playerValue];
  let computerValue = numberGenerator();
  roundResultImgs[1].src = movesImgs[computerValue];
  game(playerValue, computerValue);   
  
  if(playerScore === 3 || computerScore === 3){
    printGameWinner();
    resetGame();
  }            
} 

  playerMove.forEach((move) => {    
    move.addEventListener('click', playerMoveHandler);
  });
