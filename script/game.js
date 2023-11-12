let boardUi = document.querySelector("#game-board");
let boardData = new Grid();
let dice = new Dice();
let player1 = new Player("player1", "blue");
let player2 = new Player("player2", "green");
let button1 = document.querySelector("#button1");
let button2 = document.querySelector("#button2");
let diceUi = document.querySelector(".dice-face");
button1.addEventListener("click", movePlayer);
button2.addEventListener("click", movePlayer);
function checkWin() {
  if (player1.location == 100 || player2.location == 100) {
    alert("Game has ended click ok to restart the game");
    player1 = new Player();
    player2 = new Player();
    dice = new Dice();
    diceUi.textContent = "";
    button1.disabled = false;
    button2.disabled = true;
    displayUi();
  }
}
function movePlayer(event) {
  dice.rollDice();
  let diceNumber = dice.currentFace;
  let buttonId = event.target.id;
  let sum = 0;
  if (buttonId === "button1") {
    sum = player1.location + diceNumber;
    if (sum <= 100) {
      player1.location = sum;
    }
    button1.disabled = true;
    button2.disabled = false;
  } else {
    sum = player2.location + diceNumber;

    if (sum <= 100) {
      player2.location = sum;
    }
    button2.disabled = true;
    button1.disabled = false;
  }

  diceUi.textContent = dice.currentFace;
  displayUi();
  checkWin();
}
function displayboad() {
  boardUi.innerHTML = "";
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

  for (let i = 0; i < boardData.grid.length; i++) {
    let found = false;
    for (let j = 0; j < boardData.grid.length; j++) {
      if (boardData.grid[i][j] == num) {
        found = true;

        let cell = rows[i].querySelectorAll(".cell")[j];
        console.log(cell);
        let playerContainer = cell.querySelector(".playerContainer");
        let dot = document.createElement("div");
        dot.className = `dot ${color}`;
        playerContainer.appendChild(dot);
        break;
      }
    }
    if (found) {
      break;
    }
  }
}
function displayUi() {
  //start game logic here
  displayBoard();
  displayPlayers(player1.location, player1.color);
  displayPlayers(player2.location, player2.color);
}
//display the players on the grid based on their numbers
displayUi();
