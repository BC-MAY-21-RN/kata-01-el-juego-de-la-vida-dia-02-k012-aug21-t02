import { Cell } from "./cell.js";
import { Grid } from "./grid.js";
import { GameOfLife } from "./gameOfLife.js";

var firstGeneration = [
  [".", ".", ".", ".", ".", ".", ".", "."],
  [".", ".", ".", ".", "*", ".", ".", "."],
  [".", ".", ".", "*", "*", ".", ".", "."],
  [".", ".", ".", ".", ".", ".", ".", "."],
];

function start(evt) {

  firstGeneration.forEach((row, x) => {
    row.forEach((col, y) => {
      firstGeneration[x][y] = new Cell(col);
    });
  });

  const grid = new Grid(firstGeneration);
  const gameController = new GameOfLife(grid);
  const newGeneration = gameController.getNextGeneration();

  console.log('Nueva generación:');
  printGrid(newGeneration);
}

function printGrid(grid) {
  let print = '';
  grid.forEach(row => {
    row.forEach(col => {
      print += col.getState();
    });
    print += '\n';
  });
  console.log(print);
}

document.getElementById('start-btn').addEventListener('click', start);