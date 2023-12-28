
export default class piece {
  constructor(player) {
    this.steps = 1;
    if (player === 'human') {
      this.shape = 'hourse';
      this.pos = [11, 9];
      this.value = "1";
    }
    else {
      this.shape = 'soldier';
      this.pos = [7, 9];
      this.value = "2";
    }
  }
}