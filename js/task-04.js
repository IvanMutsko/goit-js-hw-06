// змінна для запису значення
let counterValue = 0;

// пошук елементів в HTML
let counter = document.querySelector('#value');
const btnDecrement = document.querySelector('#counter [data-action="decrement"]');
const btnIncrement = document.querySelector('#counter [data-action="increment"]');

// створення слухачів подій та виконання функцій

btnDecrement.addEventListener('click', () => {
  counterValue -= 1;
  counter.textContent = counterValue;
});

btnIncrement.addEventListener('click', () => {
  counterValue += 1;
  counter.textContent = counterValue;
});
