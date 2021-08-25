export class GameOfLife {

  constructor(grid) {
    this.grid = grid;
  }

  getNextGeneration() {
    const matrix = this.grid.getMatrix();
    matrix.forEach((row, x) => {
      row.forEach((_column, y) => {
        const totalLiveNeighbours = this.grid.countLiveNeighbours(x, y);
        this.applyRulesToMatrix(matrix, totalLiveNeighbours, x, y);
      });
    });
    return matrix;
  }

  applyRulesToMatrix(matrix, totalLiveNeighbours, x, y) {
    if (matrix[x][y].isAlive() && (totalLiveNeighbours < 2 || totalLiveNeighbours > 3)) {
      matrix[x][y].die();
    }
    if (!matrix[x][y].isAlive() && totalLiveNeighbours == 3) {
      matrix[x][y].live();
    }
  }

}