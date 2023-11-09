window.diceRoll = () => {
  let max = 6;
  let roll = Math.random(0 * max);
  console.log("Dice Roll to start the game");
};

// Using array to create the gameboard
let width = 8;
let height = 8;
let board = [];

//using for loop
for (let i = 0; i < width; i++) {
  let row = [];
  gameBoard.push(row);
  //console.log(gameBoard)
}

//Using nested for loop
for (let j = 0; j < height; j++) {
  for (i = 0; i < width; i++) {
    if ((j % 2 == 0 && i % 2 == 1) || (j % 2 != 0 && i)) gameBoard[j][i] = "X";
    else gameBoard[j][i] = "O";
  }
}
//Printing out the gameboard
for (let k = 0; k < gameBoard.length; k++) console.log(gameBoard[k]);

//creating function for Printing the gameboard
function printGameBoard() {
  for (let l = 0; l < gameBoard.length; l++) console.log(gameBoard[l]);
}
printGameBoard();
