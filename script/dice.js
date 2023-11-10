class Dice {
  constructor() {
    this.faces = [1, 2, 3, 4, 5, 6];
    this.currentFace;
  }
  rollDice() {
    let randomNumber = Math.floor(Math.random() * 6);
    return this.faces[randomNumber];
  }
}
