// об'єкт елементів форми
const elemForm = {
  submitBtn: document.querySelector('.login-form > button'),
  mailInput: document.querySelector('[name="email"]'),
  passInput: document.querySelector('[name="password"]'),
};
// об'єкти прийнятих значень
const userData = [];
// слухач кнопки форми
elemForm.submitBtn.addEventListener('click', event => {
  // скидаємо налаштування на оновлення сторінки
  event.preventDefault();
  // перевірка заповнення форми
  if (elemForm.mailInput.value === '' || elemForm.passInput.value === '') {
    alert("Всі поля обов'язкові до заповнення");
  } else {
    //   запис значень форм в об'єкт
    const dataObj = {
      email: elemForm.mailInput.value,
      password: elemForm.passInput.value,
    };
    //   відправка об'єкта в контейнер
    userData.push(dataObj);
    //   очистка форми
    document.querySelector('.login-form').reset();
  }
  // вивід масиву об'єктів даних
  console.table(userData);
});
