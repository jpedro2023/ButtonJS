import { fontFamilies } from "./fontFamily.js";

const presentCount = document.getElementById("count");
const button = document.getElementById("button");
const mainContent = document.main;
const bodyContent = document.body;
let accumulator = { count: 0 };

function generateColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";

  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }

  return color;
}

function changeColor() {
  mainContent.style.color = generateColor();
  bodyContent.style.backgroundColor = generateColor();
  presentCount.style.color = generateColor();
  presentCount.textContent = accumulator.count;
}

function changeStyle() {
  mainContent.style.fontFamily =
    fontFamilies[Math.floor(Math.random() * fontFamilies.length)];
  presentCount.fontFamily =
    fontFamilies[Math.floor(Math.random() * fontFamilies.length)];
}

function buttonPressed() {
  accumulator.count++;
  changeColor();
  changeStyle();
  button.className = `button-${Math.floor(Math.random() * 9) + 1}`;
}

button.addEventListener("click", buttonPressed);
