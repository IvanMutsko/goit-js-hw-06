// Рахуємо кількість категорій в ul#categories

const categories = document.querySelectorAll('.item');

console.log(`Number of categories: ${categories.length}`);

// Для кожного элемента виводимо в консоль текст заголовку елемента і кількість елементів в категорії

const dateOfCategory = categories.forEach(element => {
  console.log('');
  // порожній рядок для відокремлення

  console.log(`Category: ${element.firstElementChild.textContent}`);

  console.log(`Elements: ${element.lastElementChild.querySelectorAll('li').length}`);
});
