const ingredients = ['Potatoes', 'Mushrooms', 'Garlic', 'Tomatos', 'Herbs', 'Condiments'];

// Створюємо масив зі всіма елементами
let ingridientItem = [];

for (let ingredient of ingredients) {
  // Створюємо елементи <li>
  const element = document.createElement('li');
  // Записуємо контент в елемент
  element.textContent = ingredient;
  // Додаємо елементу клас item.
  element.classList.add('item');

  // Закидаємо в масив
  ingridientItem.push(element);
}

// Додаємо масив елементів за одну операцію
document.querySelector('#ingredients').append(...ingridientItem);
