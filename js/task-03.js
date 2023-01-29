const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const imgElements = images.map(
  img => `<li class="item"><img src="${img.url}" alt="${img.alt}" width="300px"></li>`
);

const galleryList = document.querySelector('.gallery');

galleryList.insertAdjacentHTML('beforeend', imgElements.join(''));

// Стилізація
galleryList.style.listStyle = 'none';
galleryList.style.display = 'flex';
galleryList.style.flexDirection = 'column';
galleryList.style.gap = '20px';
galleryList.style.alignItems = 'center';

// ====================================
// Перший варіант без оптимізації
// ====================================
// // Створюємо масив нових елементів
// const imageElementsArray = [];

// // перебираємо масив зображень
// images.forEach(image => {
//   // Створюємо елементи зображень
//   const imageEl = `<li class="item"><img src="${image.url}" alt="${image.alt}"></li>`;
//   // Перекидаємо елементи в масив
//   imageElementsArray.push(imageEl);
// });

// const galleryList = document.querySelector('.gallery');
// // Створюємо розмітку метод insertAdjacentHTML()
// galleryList.insertAdjacentHTML('beforeend', imageElementsArray.join(''));
