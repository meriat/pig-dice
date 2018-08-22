function Player(id) {
  this.id = id;
  this.totalScore = 0;
  this.turnScore = 0;
}
function Dice() {
  this.diceValue = 0;
}
Dice.prototype.rollDice= function(playerId) {
  this.diceValue = Math.floor(Math.random()* 6) +1;
}

Player.prototype.getTurnScore = function () {
  this.turnScore = (newDice.diceValue === 1) ? (this.turnScore = 0) : (this.turnScore += newDice.diceValue);
}
Player.prototype.getCurrentScore = function () {
playerOne.totalScore += playerOne.turnScore;
}
var playerOne = new Player("1");
var playerTwo = new Player("2");
var newDice = new Dice();

$(document).ready(function() {
  $("#rollDice").click(function() {
    newDice.rollDice();
    playerOne.getTurnScore();
    console.log(newDice.diceValue)
    console.log(playerOne.turnScore);
  });
  $("#hold").click(function() {
    playerOne.getCurrentScore();
    console.log(playerOne.totalScore);
  });
});
