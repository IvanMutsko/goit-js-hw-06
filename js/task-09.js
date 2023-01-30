// генератор кольорів
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

// пошук елементів сторінки
const colorBtn = document.querySelector('.change-color');
const colorValue = document.querySelector('.color');
const body = document.querySelector('body');

// слухач на клік по кнопці
colorBtn.addEventListener('click', event => {
  // виклик функції генератора кольору
  const newColor = getRandomHexColor();
  // запис значення кольору в спан
  colorValue.textContent = newColor;
  // заміна бекграунду
  body.style.backgroundColor = newColor;
});
