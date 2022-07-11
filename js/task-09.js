function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const bodyRef = document.querySelector('body');
const textRef = document.querySelector('.color');
const buttonRef = document.querySelector('.change-color');

buttonRef.addEventListener('click', () => {
  let color = getRandomHexColor();
  bodyRef.style.backgroundColor = color;
  textRef.textContent = color;
});
