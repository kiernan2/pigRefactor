import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import Game from './game.js';

// UI Logic
$(document).ready(function(event) {
  let game = new Game;
  document.getElementById("roll").onclick = function() {scoreDisplay(game.scoreReader(game.d6()))};
  document.getElementById("pass").onclick = function() {endRound(game)};
}); 

function scoreDisplay(game, score) {
  const roundScoreIndicator = $("h3#roundScore");
  const scoreValue = "Score: " + score;
  roundScoreIndicator.text(scoreValue);
  game.scoreReader(score);
}

function endGame() {
  document.getElementById("roll").disabled = true;
  document.getElementById("pass").disabled = true;
}

function endRound(game) {
  const turnIndicator = $("h2#turnIndicator");
  const winner = $("h1#winner");
  const roundScoreIndicator = $("h3#roundScore");
  if (game.playerTurn === true) {
    game.updateScore();
    turnIndicator.text("Player2");
  } else if (game.playerTurn === false) {
    game.updateScore();
    turnIndicator.text("Player1");
  }
  const scoreValue = "Score: " + game.roundScore;
  roundScoreIndicator.text(scoreValue);
  scoreDisplay(game.playerScore, game.cpuScore);
  if (game.playerScore >= 100) {
    winner.text("Winner Player1");
    endGame();
  }
  if (cpuScore >= 100) {
    winner.text("Winner Player2");
    endGame();
  }
  game.endRound();
}

function scoreDisplay(playerScore, cpuScore) {
  const scoreCard = $("h2#score");
  const scoreValue = "Player1: " + playerScore +" Player2 " + cpuScore;
  scoreCard.text(scoreValue);
}