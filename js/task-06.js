// пошук елемента в розмітці
const inputForm = document.querySelector('#validation-input');
// слухач події на зникнення фокусу
inputForm.addEventListener('blur', onElementsValue);

function onElementsValue(event) {
  // змінні для отримання значення введених символів та значення з атрибуту форми
  const atrValue = Number(inputForm.getAttribute('data-length'));
  const inputLength = inputForm.value.length;

  // перевірка на правильну кількість символів
  if (atrValue !== inputLength) {
    //   додає червону рамку якщо не вірна кільксть символів
    inputForm.classList.add('invalid');
  } else {
    // видаляє попередній стиль і додає новий
    inputForm.classList.remove('invalid');
    inputForm.classList.add('valid');
  }
}
