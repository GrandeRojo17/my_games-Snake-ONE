import {
  update as updateSnake,
  draw as drawSnake,
  SNAKE_SPEED,
} from "./snakey.js";
//don't forger to export aswell from the file you are importing from.
// const SNAKE_SPEED = 1 ;
import { update as updateFood, draw as drawFood } from "./food.js";
let lastRenderTime = 0;
const gameBoard = document.getElementById("game-board");
function main(currentTime) {
  window.requestAnimationFrame(main);
  const sslr = (currentTime - lastRenderTime) / 1000;
  if (sslr < 1 / SNAKE_SPEED) {
    return;
    console.log("If seconds last rendered");
  } else {
    console.log("hey there");
  }
  lastRenderTime = currentTime;

  update();
  draw();
}

window.requestAnimationFrame(main);

function update() {
  updateSnake();
}
function draw() {
  gameBoard.innerHTML = "";
  drawSnake(gameBoard);
  drawFood(gameBoard);
  updateFood(gameBoard);
}
