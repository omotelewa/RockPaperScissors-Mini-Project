const i = 6;
const matrixArry = [];

const ladderPath = {
  3: 11,
  5: 23,
  7: 15,
  21: 33,
  26: 31,
};

const snakePath = {
  13: 6,
  9: 4,
  19: 2,
  34: 22,
  29: 16,
};

function createMatrix(i) {
  let block = i * i + 1;
  for (let column = 1; column <= i; column++) {
    let rows = [];
    if (column % 2 === 0) {
      block = block - i;
      let val = block;
      for (let row = 1; row <= i; row++) {
        rows.push({ block });
        val++;
      }
    } else {
      for (let row = 1; row <= i; row++) {
        block = block - 1;
        rows.push(block);
      }
    }
    matrixArry.push(rows);
  }

  return matrixArry;
}

console.log(createMatrix(6));

//creating board

// creating the game board
function creategameBoard() {
  const matrixArry = createMatrix(i);
  const board = document.querySelector(".gameBoard");
  let str = "";
  matrixArry.map((row) => {
    str += `
                <div class="row">`;
    row.map((block) => {
      str += `

                    <div
                        class="block ${
                          block === 1 ? "active " : ""
                        } value=${block}>
                        ${block}
                        </div>
                        `;
    });

    str += "</div>";
  });
  board.innerHTML = str;
}

// function creaateGameBoard() {
//   const matrixArry = createMatrix(i);
//   const board = document.querySelector(".gameBoard");
//   let str = "";

//   matrixArry.map((row) => {
//     str += `
//                 <div class = "row"> `;
//     row.map((block) => {
//       str += `

//                 <div

//                 class=block $(ladderPath[block] ? LADDER_CLASS : ' '} ${
//                   snakePath[block] ? SnakeClass : ""
//                 } $(block ===1 ?
//                 'active' : ''} " data-value=${block}>
//                 ${block}
//                     </div>
//                     `;
//     });

//     str += "</div>";
//   });

//   board.innerHTML = str;
// }
