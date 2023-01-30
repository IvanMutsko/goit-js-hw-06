// створюємо змінні доступу до елементів
const rangeBar = document.querySelector('#font-size-control');
const text = document.querySelector('#text');

// визначення початкового значення повзунка
let textSize = rangeBar.value;
// встановлення початкового розміру тексту рівним початковому значенню повзунка
text.style.fontSize = `${textSize}px`;
// динамічна зміна розміру шрифта від положення повзунка
rangeBar.addEventListener('input', event => {
  textSize = `${rangeBar.value}px`;
  text.style.fontSize = textSize;
});
