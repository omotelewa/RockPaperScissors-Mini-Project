let boardUi = document.querySelector("#game-board");
let boardData = new Grid();
function displayBoard() {
  for (let i = 0; i < boardData.grid.length; i++) {
    let rowContainer = document.createElement("div");
    rowContainer.className = "row";
    for (let j = 0; j < boardData.grid[0].length; j++) {
      let cell = document.createElement("p");
      cell.className = "cell";
      cell.textContent = boardData.grid[i][j];
      rowContainer.appendChild(cell);
    }
    boardUi.appendChild(rowContainer);
  }
}
console.log(boardUi);
console.log(boardData.grid);
displayBoard();
