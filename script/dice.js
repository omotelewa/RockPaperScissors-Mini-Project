// This class represents dice in the game
class Dice {
  constructor() {
    this.faces = [1, 2, 3, 4, 5, 6];
    this.currentFace;
  }
  // This method rolls the dice by generating a random number
  rollDice() {
    let randomNumber = Math.floor(Math.random() * 6);
    this.currentFace = this.faces[randomNumber];
  }
}


