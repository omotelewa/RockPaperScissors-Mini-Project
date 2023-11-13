let boardUi = document.querySelector("#game-board");
let boardData = new Grid();
let dice = new Dice();
let player1 = new Player("player1", "blue");
let player2 = new Player("player2", "red");
let button1 = document.querySelector("#button1");
let button2 = document.querySelector("#button2");
let diceUi = document.querySelector(".dice-face");
button1.addEventListener("click", movePlayer);
button2.addEventListener("click", movePlayer);

// This function checks if the game is won, shows an alert then resets the game
function checkWin() {
  if (player1.location == 100 || player2.location == 100) {
    alert("Game has ended click ok to restart the game");
    player1.location = 1;
    player2.location = 1;
    diceUi.textContent = "";
    button1.disabled = false;
    button2.disabled = true;
    displayUi();
  }
}
// This function moves the players dot depending on the dice roll.  It also checks if the new location is a
// ladder or a snake and changes the player position accordingly.
function movePlayer(event) {
  dice.rollDice();
  let diceNumber = dice.currentFace;
  let buttonId = event.target.id;
  let sum = 0;
  if (buttonId === "button1") {
    sum = player1.location + diceNumber;
    // If button 1 is clicked blue dot will be moved, the location of play1 is calculated and saved in player1 object.
    if (sum <= 100) {
      player1.location = sum;
    }
    // If the new location of player1 has a snake we get the snakes tail position and update player1's location to the snake's tail position.
    let snakeLocation = boardData.checkSnake(sum);
    if (snakeLocation !== -1) {
      player1.location = snakeLocation;
      console.log(player1.location);
    }

    // If the new location of player1 has a ladder we get the ladder top position and update player1's location to the ladder's top position.
    let ladderLocation = boardData.checkLadder(player1.location);
    if (ladderLocation !== -1) {
      player1.location = ladderLocation;
      console.log(player1.location);
    }

    button1.disabled = true;
    button2.disabled = false;
  } else {
    sum = player2.location + diceNumber;

    // If button 2 is clicked blue dot will be moved, the location of play2 is calculated and saved in player2 object.
    if (sum <= 100) {
      player2.location = sum;
    }
    // If the new location of player2 has a snake we get the snakes tail position and update player2's location to the snake's tail position.
    let snakeLocation = boardData.checkSnake(sum);
    if (snakeLocation !== -1) {
      player2.location = snakeLocation;
    }
    // If the new location of player2 has a ladder we get the ladder top position and update player2's location to the ladder's top position.
    let ladderLocation = boardData.checkLadder(player2.location);
    if (ladderLocation !== -1) {
      player2.location = ladderLocation;
      console.log(player2.location);
    }

    button2.disabled = true;
    button1.disabled = false;
  }

  diceUi.textContent = dice.currentFace;
  // Redisplay the UI.
  displayUi();
  // Checks if a player wins
  checkWin();
}
// This function displays the gameboard grid by adding multiple rows and cells which are using flexboxes.
function displayBoard() {
  // Clearing out the board
  boardUi.innerHTML = "";
  for (let i = 0; i < boardData.grid.length; i++) {
    // Creating rows in the board
    let rowContainer = document.createElement("div");
    rowContainer.className = "row";
    for (let j = 0; j < boardData.grid[0].length; j++) {
      // Creating a container to hold the plays dots.
      let playerContainer = document.createElement("div");
      playerContainer.className = "playerContainer";
      // Creating a cell in a row that will have the number and the player container
      let cell = document.createElement("div");
      cell.className = "cell";
      // Setting the number inside the cell.
      cell.textContent = boardData.grid[i][j];
      // Appending the player container to the cell
      cell.appendChild(playerContainer);
      // Appending the cell to the row
      rowContainer.appendChild(cell);
    }
    // Appending the row to the board.
    boardUi.appendChild(rowContainer);
  }
}
// This function displays the players dot based on the players location and the color of the player.
function displayPlayers(num, color) {
  let rows = document.querySelectorAll(".row");

  for (let i = 0; i < boardData.grid.length; i++) {
    let found = false;
    for (let j = 0; j < boardData.grid.length; j++) {
      // Looping each through each cell in the gameboard and finding the current player's location
      if (boardData.grid[i][j] == num) {
        found = true;
        // Getting the player container from the current cell.
        let cell = rows[i].querySelectorAll(".cell")[j];
        let playerContainer = cell.querySelector(".playerContainer");
        // Creating a dot for the current player
        let dot = document.createElement("div");
        dot.className = `dot ${color}`;
        // Appending the dot in the player container
        playerContainer.appendChild(dot);
        break;
      }
    }
    if (found) {
      break;
    }
  }
}
// This funciton displays the whole UI and also updates the UI when called.
function displayUi() {
  //start game logic here
  displayBoard();
  displayPlayers(player1.location, player1.color);
  displayPlayers(player2.location, player2.color);
}
//display the players on the grid based on their numbers
displayUi();
