//creating a function for the dice roll.
window.diceRoll = () => {
  let max = 10;
  let roll = Math.cell(Math.random() * max);
  console.log("Dice Roll to start the game");
};

// Creating game board with multidimensional array.
let width = 8;
let height = 8;
let gameBoard = [];

//using for loop
for (let i = 0; i < height; i++) {
  let row = [];
  gameBoard.push(row);
  for (let j = 0; j < width; j++) {
    row.push({ i, j, filled: null });
  }
}
console.log(gameBoard);

//creating table with rows and columns - table rows and table data
const displaygameBoard = ()=>{
    const table = document.createElement('table');
  for (let i=0;i<height;i++){
    const tr = document.createElement('tr')
        for (let j=0;j<width;j++){
            const td = document.createElement('td');
                if (!gameBoard[i][j].filled){

}

//Using nested for loop
//for (let j = 0; j < height; j++) {
// for (i = 0; i < width; i++) {
//   if ((j % 2 == 0 && i % 2 == 1) || (j % 2 != 0 && i)) gameBoard[j][i] = "X";
//   else gameBoard[j][i] = "O";
// }
//}
//Printing out the gameboard
for (let k = 0; k < gameBoard.length; k++) console.log(gameBoard[k]);

//creating function for Printing the gameboard
function printGameBoard() {
  for (let l = 0; l < gameBoard.length; l++) console.log(gameBoard[l]);
}
printGameBoard();
