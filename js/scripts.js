function Player(id) {
  this.id = id;
  this.totalScore = 0;
  this.currentScore = 0;
  this.turnScore = 0;
}
function Dice() {
  this.diceValue = 0;
}
Dice.prototype.rollDice= function() {
  this.diceValue = Math.floor(Math.random()* 6) +1;
}

var playerOne = new Player("1");
var playerTwo = new Player("2");
var newDice = new Dice();

$(document).ready(function() {
  $("#rollDice").click(function() {
    newDice.rollDice();
    console.log(newDice.diceValue);
  });
});
