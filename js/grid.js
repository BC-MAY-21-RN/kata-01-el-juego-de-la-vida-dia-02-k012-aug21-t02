export class Grid {
  constructor(matrix){
    this.matrix = matrix;
    this.rows = matrix.length;
    this.cols = matrix[0].length;
  }

  getMatrix() {
    return this.matrix;
  }

  getCell(row, col) {
    return this.matrix[row][col];
  }

  getNeighbors(row, col) {
    return [
      [row - 1, col - 1],
      [row - 1, col],
      [row - 1, col + 1],
      [row, col - 1],
      [row, col + 1],
      [row + 1, col - 1],
      [row + 1, col],
      [row + 1, col + 1],
    ]
  }

  isOnBoard(x, y) {
    const xIsValid = (x >= 0) && (x < this.rows);
    const yIsValid = (y >= 0) && (y < this.cols);

    return xIsValid && yIsValid;
  }

  countLiveNeighbours(x, y){
    const liveNeighbours = this.getNeighbors(x, y);
    let neighboursCounter = 0;
    liveNeighbours.forEach(coord => {
      const [x, y] = coord;
      if(this.isOnBoard(x, y) && this.matrix[x][y].isAlive()){
        neighboursCounter += 1;
      }
    });
    return neighboursCounter;
  }

}