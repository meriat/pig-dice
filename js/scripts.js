function Player(id) {
  this.id = id;
  this.totalScore = 0;
  this.turnScore = 0;
}
function Dice() {
  this.diceValue = 0;
}
Dice.prototype.rollDice= function() {
  this.diceValue = Math.floor(Math.random()* 6) +1;
}
Player.prototype.getTurnScore = function () {
  this.turnScore = (newDice.diceValue === 1) ? (this.turnScore = 0) : (this.turnScore += newDice.diceValue);
}
Player.prototype.getTotalScore = function () {
  this.totalScore += this.turnScore;
  this.turnScore = 0;
}
var playerOne = new Player("1");
var playerTwo = new Player("2");
var newDice = new Dice();
$(document).ready(function() {
  $("#rollDiceOne").click(function() {
    newDice.rollDice();
    if (newDice.diceValue === 1) {
      $("#rollDiceOne").hide();
      $("#rollDiceTwo").show();
    }
    playerOne.getTurnScore();
    $("#diceValues").text(newDice.diceValue);
    $("#playerOneTurn").text(playerOne.turnScore);
  });
  $("#rollDiceTwo").click(function() {
    newDice.rollDice();
    if (newDice.diceValue === 1) {
      $("#rollDiceOne").show();
      $("#rollDiceTwo").hide();
    }
    playerTwo.getTurnScore();
    $("#diceValues").text(newDice.diceValue);
    $("#playerTwoTurn").text(playerTwo.turnScore);
  });
  $("#hold").click(function() {
    if (playerOne.turnScore === 0) {
      playerTwo.getTotalScore();
      if (playerTwo.totalScore >= 20) {alert ("Player Two Won!" )}
      $("#rollDiceOne").show();
      $("#rollDiceTwo").hide();
      $("#playerTwoTotal").text(playerTwo.totalScore);
    }
    else {
      playerOne.getTotalScore();
      if (playerOne.totalScore >= 20) {alert ("Player One Won!" )}
      $("#rollDiceOne").hide();
      $("#rollDiceTwo").show();
      $("#playerOneTotal").text(playerOne.totalScore);
    }
  });


});
