import { onSnake, expandSnake } from "./snakey.js";
let food = { x: 5, y: 0 };
const EXPANSION_RATE = 1;

const snakeBody = [
  { x: 11, y: 11 },
  { x: 12, y: 11 },
  { x: 13, y: 11 },
];

export function update() {
  if (onSnake(food)) {
    expandSnake(EXPANSION_RATE);
    food = { x: 20, y: 14 };
  }
}
export function draw(gameBoard) {
  const foodElement = document.createElement("div");
  foodElement.style.gridRowStart = food.y;
  foodElement.style.gridColumnStart = food.x;
  foodElement.classList.add("food");
  gameBoard.appendChild(foodElement);
}

