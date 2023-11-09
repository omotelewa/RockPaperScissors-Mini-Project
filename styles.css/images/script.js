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
let createTable = (rows) => {
  const table = document.createElement("table");
  table.setAttribute("class", "board");
  Object.keys(rows).forEach((key) => {
    const tr = document.createElement("tr");
    rows[key].forEach((value) => {
      const td = document.createElement("td");
      td.textContent = value;
      tr.appendChild(td);
    });
    table.appendChild(tr);
  });
  return table;
};

document.body.appendChild(createTable(gameBoard));

document.body.append(table);

displaygameBoard();

//create players
const playerOne = { name: "player one" };
const playerTwo = { name: "player two" };

//function to display game board on screen
const displayGameBoard = () => {
  let output = "";
  
  //iterate through each element in the game board
  for (let i = 0; i < gameBoard.length; i++) {
    for (let j = 0; j < gameBoard[i].length; j++) {
      if (gameBoard[i][j] === null) {
        output += `<div class="box empty"></div>`;
      } else {
        output += `<div class="box occupied">${gameBoard[i][j]}</div>`;
      }
    }
    output += "</br>";
  }
  document.getElementById("output").innerHTML = output;
};
// function to handle click events
const handleClicks = (e) => {
    console.log(e.target.id);
  if (!isOver && e.target.className !== "occupied") {
    isOver = true;
    currentPlayer = currentPlayer == playerOne ? playerTwo : playerOne;
    turnCount++;
    switch (currentPlayer.name) {
      case "player one":
        player1Turn(e.target.id);





