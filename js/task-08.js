const formRef = document.querySelector('.login-form');

formRef.addEventListener('submit', event => {
  event.preventDefault();
  const {
    elements: { email, password },
  } = event.currentTarget;
  if (email.value === '' || password.value === '') {
    return alert('Введи дані');
  }
  console.log(`Email: ${email.value}, password:  ${password.value}`);
  event.currentTarget.reset();
});
