const inputRef = document.querySelector('#validation-input');

inputRef.addEventListener('blur', event => {
  const userInputLength = event.currentTarget.value.length;
  const validInputLength = Number(inputRef.dataset.length);
  if (userInputLength === validInputLength) {
    inputRef.classList.add('valid');
    inputRef.classList.remove('invalid');
  } else {
    inputRef.classList.add('invalid');
    inputRef.classList.remove('valid');
  }
});
