// The Grid class represents the grid that contains the gameboard values and locations for snakes and ladders

class Grid {
  constructor() {
    this.grid = [];
    let value = 100;
    for (let i = 10; i > 0; i--) {
      let row = [];
      for (let j = 10; j > 0; j--) {
        row.push(value);
        value--;
      }
      this.grid.push(row);
    }
    this.snakes = {
      90: new Snake(38),
      74: new Snake(35),
    };
    this.ladders = {
      67: new Ladder(86),
      51: new Ladder(64),
      14: new Ladder(36),
    };
  }
  // This method checks if a location contains a snake and returns its tail position.
  checkSnake(location) {
    if (location in this.snakes) {
      console.log(this.snakes[location].tailLocation);

      return this.snakes[location].tailLocation;
    }
    return -1;
  }
  // This method checks if a location contains a ladder and returns its head position.
  
  checkLadder(location) {
    if (location in this.ladders) {
      console.log(this.ladders[location].topLocation);
      return this.ladders[location].topLocation;
    }
    return -1;
  }
}

