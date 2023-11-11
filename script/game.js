let boardUi = document.querySelector("#game-board");
let boardData = new Grid();
let player1 = new Player("player1", "Red");
let player2 = new Player("player2", "Green");
function displayBoard() {
  for (let i = 0; i < boardData.grid.length; i++) {
    let rowContainer = document.createElement("div");
    rowContainer.className = "row";
    for (let j = 0; j < boardData.grid[0].length; j++) {
      let playerContainer = document.createElement("div");
      playerContainer.className = "playerContainer";
      let cell = document.createElement("div");
      cell.className = "cell";
      cell.textContent = boardData.grid[i][j];
      cell.appendChild(playerContainer);
      rowContainer.appendChild(cell);
    }
    boardUi.appendChild(rowContainer);
  }
}
function displayPlayers(num, color) {
  let rows = document.querySelectorAll(".row");
  console.log(rows);

  for (let i = 0; i < boardData.grid.length; i++) {
    let found = false;
    for (let j = 0; j < boardData.grid[0].lenght; j++) {
      if (boardData.grid[i][j] == num) {
        found = true;
        let cell = rows[i].querySelectorAll("div")[j];
        console.log(cell);
        break;
      }
    }
    if (found) {
      break;
    }
  }
}
displayBoard();
displayPlayers(25, "red");
displayPlayers(14, "red");
displayPlayers(93, "red");
