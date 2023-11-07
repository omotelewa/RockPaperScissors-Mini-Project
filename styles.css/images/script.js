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

function createMatrix(i){
    let block = (i * i) + 1;
    for(let column=1;column<=icolumn++){
        let rows = [];
            if(column % 2 === 0){
                block = block - i;
                let val = block;
                for(let row = 1; row<=n;row++){
                    rows.push({val});
                    val++
                }
            } else{
                for(let row=1;row<=n;row++){
                    block = - 1;
                    rows.push(block);
                }
            }
        matrixArry.push(rows);
        }
        
createMatrix(i);
}

//creating board 
function creategameBoard(){
    // creating the game board
    let htmlString = '';
    for(let r=0;r<matrixArry[0].length;r++){
        htmlString += '<tr>';
        for(let c=0;c<matrixArry.length;c++){
            htmlString += `<td>${matrixArry[c][r]}</td>`;
            }
        htmlString += '</tr>'
        }
        document.getElementById('board').innerHTML = htmlString;
        }

// function to update score and position of snake on the board  
function updateScoresAndPositioningOfSnakeOnGameBoard() {
    const headX = snakeHead.x;
    const headY = snakeHead.y;
    // updating scores
    document.querySelector('.score-container span').textContent = `Score: ${snakeLength}`;
    // updating positions of snake on the board
    document.querySelectorAll(`#board tr td`).forEach((cell)=>{
        cell.classList.remove("head", "body");
        });
        document.querySelector(`#board tr:nth-child(${headY+1}) td:nth-child(${headX+1
            })`)?.classList.add("head");
        snakeBody.forEach(segment => {
            document.querySelector(`#board tr:nth-child(${segment.y+1}) td:nth-child(${segment.x
        
    });

//snake movement
function moveSnake() {
    
    document.getElementById('board').innerHTML = htmlString;
    }
    
    document.getElementById('board').innerHTML = htmlString;
        }
    

}