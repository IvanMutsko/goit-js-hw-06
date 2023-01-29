const inputForm = document.querySelector('#name-input');
const outputText = document.querySelector('#name-output');

inputForm.addEventListener('input', onInputText);

function onInputText(event) {
  outputText.textContent = event.currentTarget.value;

  if (inputForm.value === '') {
    outputText.textContent = 'Anonymous';
  }
}
