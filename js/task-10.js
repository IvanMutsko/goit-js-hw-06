// генератор кольору
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

// посилання на елементи розмітки
const meny = document.querySelector('#controls');
const boxOfElements = document.querySelector('#boxes');
const inputQuantity = document.querySelector('#controls > input');
const createBtn = document.querySelector('[data-create]');
const destroyBtn = document.querySelector('[data-destroy]');

// ==========Створення блоків=============

let boxesArr = [];
let size = 20;

// слухач кнопки створення блоків
createBtn.addEventListener('click', () => {
  // значення інпута, max/min значення атрибутів
  const inputValue = inputQuantity.value * 1;
  const minValue = inputQuantity.getAttribute('min');
  const maxValue = inputQuantity.getAttribute('max');
  // перевірка введеного значення
  if (inputValue >= minValue && inputValue <= maxValue) {
    // виклик функції створення
    createBoxes(inputValue);
  } else {
    // попередження при невалідних значеннях
    alert(`Значення має знаходитись в діапазоні від ${minValue} до ${maxValue}`);
  }
  // очистка масуву з шаблоном створюваних елементів і скидання значення в інпуті, скидання кінцевого розміру бокса
  boxesArr.length = 0;
  inputQuantity.value = '';
  size = 20;
});

// функція створення боксів
function createBoxes(amount) {
  // створює масив шаблону з необхідною кількістю елементів
  for (let i = 1; i <= amount; i += 1) {
    size += 10;
    boxesArr.push(
      `<div class="box" style="display: inline-block; background-color: ${getRandomHexColor()}; width: ${size}px; height: ${size}px;"></div>`
    );
  }
  // додаємо елементи в розмітку
  boxOfElements.insertAdjacentHTML('beforeend', boxesArr.join(''));
}

// ==========Видалення блоків=============

// слухач кнопки очищення
destroyBtn.addEventListener('click', destroyBoxes);

// функція очищення
function destroyBoxes() {
  // пошук всіх елементів з необхідним класом
  const destroyArr = document.querySelectorAll('.box');
  // перебір масиву елементів з необхідним класом
  for (let element of destroyArr) {
    // видалення кожного елемента розмітки
    element.remove();
  }
}
