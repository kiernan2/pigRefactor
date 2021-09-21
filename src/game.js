export default function Game() {
  this.roundScore = 0;
  this.playerScore = 0;
  this.cpuScore = 0;
  this.playerTurn = true;
  this.gameRuning = true;
};

Game.prototype.d6 = function() {
  const array = [1,2,3,4,5,6];
  const shuffledArray = array.sort((a,b) => 0.5 - Math.random());
  return(shuffledArray[0]);
};

Game.prototype.scoreReader = function(x) {
  if (x === 1) {
    this.roundScore = 0;
    this.endRound();
  } else {
    this.roundScore += x;
  }
};

Game.prototype.endRound = function() {
  this.playerTurn = !this.playerTurn;
};

Game.prototype.updateScore = function() {
  if (this.playerTurn === true) {
    this.playerScore += this.roundScore;
  } else if (this.playerTurn === false) {
    this.cpuScore += this.roundScore;
  }
  this.roundScore = 0;
};
