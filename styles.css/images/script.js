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
let displaygameBoard = () => {
  let htmlString = "";
  gameBoard.forEach((row) => {
    htmlString += "<tr>";
    row.forEach((data) => {
      if (!data.filled) {
        htmlString += `<td class="empty" onclick="fillSquare(${data.i},${data.j})"></td>`;
      } else {
        htmlString += `<td class="${data.filled}" ></td>`;
      }
    });
    htmlString += "</tr>";
  });
  document.querySelector("p")("table").innerHTML = htmlString;
};
displaygameBoard();

const table = document.createElement("table");
for (let i = 0; i < height; i++) {
  const tr = document.createElement("tr");
  for (let j = 0; j < width; j++) {
    const td = document.createElement("td");
    if (!gameBoard[i][j].filled) {
    } else {
      td.textContent = gameBoard[i][j].filled;
    }
    tr.appendChild(td);
  }
  table.appendChild(tr);
}

document.body.append(table);

displaygameBoard();

//creating player objects
