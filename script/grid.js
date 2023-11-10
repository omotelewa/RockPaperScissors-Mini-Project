class Grid {
  constructor() {
    this.grid = [];
    let value = 100;
    for (let i = 10; i > 0; i--) {
      let row = [];
      for (let j = 10; j > 0; j--) {
        row.push(value)
        value --

      }
      this.grid.push(row);
    }
    this.snakes = {

    };
    this.ladders = {
        
    };
  }
}
