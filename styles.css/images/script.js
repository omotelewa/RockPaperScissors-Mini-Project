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

if (!isOver && e.target.className !== "occupied") {
  isOver = true;
  currentPlayer = currentPlayer == playerOne ? playerTwo : playerOne;
  turnCount++;
  switch (currentPlayer.name) {
    case "player one":
      player1Turn(e.target.id);
  }
}

// function to handle player one's plays
function player1Turn(position) {
  // function to handle player one's turn
  const player1Turn = (position) => {
    const rowIndex = Math.floor(parseInt(position) / 3);
    const colIndex = parseInt(position) % 3;
    //check if position is already occupied or not
    if (gameBoard[rowIndex][colIndex] != null) {
      alert(`Sorry, ${currentPlayer.name}, this spot is already taken!`);
      return false;
    }
    //update the game board with X
    gameBoard[rowIndex][colIndex] = "X";
    updateDisplay();
    checkForWin();
  };

  // function to handle player two's turn
  const player2Turn = (position) => {};
  // function to handle end of game
  const endOfGame = () => {
    alert("The Game has ended");
  };
  // function to check for win condition
  const checkForWin = () => {
    let winningCombination = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    //running a for loop to check for the winning combination  display endo of game with current player scores
    for (let i = 0; i < winningCombination.length; i++) {
      if (
        gameBoard[winningCombination[i][0]] ===
          gameBoard[winningCombination[i][1]] &&
        gameBoard[winningCombination[i][0]] ===
          gameBoard[winningCombination[i][2]] &&
        gameBoard[winningCombination[i][0]] !== null
      ) {
        currentPlayer.score += 1;
        document.getElementById(
          "score"
        ).innerHTML = `Score: ${currentPlayer.score}`;
        endOfGame();
      }
    }
  };

  // function to switch between players
  //const switchPlayers = () => {
}