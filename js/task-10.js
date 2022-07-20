function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
// Беру посилання на HTML елементи
const inputRef = document.querySelector('input');
const createBtnRef = inputRef.nextElementSibling;
const destroyBtnRef = createBtnRef.nextElementSibling;
const boxesRef = document.querySelector('#boxes');

// Додаю слухача подій
createBtnRef.addEventListener('click', createBoxes);
destroyBtnRef.addEventListener('click', destroy);

let width = 20;
let height = 20;
function createBoxes() {
  // Створюю змінні щоб тримати значення ширини і висоти
  // Створюю порожній масив, щоб додати до нього всі діви на кожній ітерації, а потім вивести його з циклу і джойном зробити рядок
  let divs = [];
  // Беру значення інпута
  let inputValue = inputRef.value;

  // Зробив цикл з лічильником
  for (let i = 1; i <= inputValue; i += 1) {
    // На кожнай ітерації додаю по 10px до ширини і висоти
    width += 10;
    height += 10;
    // Додаю випадковий колір
    let color = getRandomHexColor();
    // Створюю нову розмітку зі змінними для висоти, ширини і кольору
    const div = `<div class="item" style="width: ${width}px; height: ${height}px; background-color: ${color}"></div>`;
    // Додаю кожен дів в масив divs
    divs.push(div);
  }
  // Створюю змінну, щоб отримати рядок дівів з масиву
  let box = divs.join('');
  // Додаю в існуючу розмітку за один раз свою розмітку з дівами
  boxesRef.insertAdjacentHTML('beforeend', box);
}

function destroy() {
  boxesRef.innerHTML = '';
  inputRef.value = '';
  width = 20;
  height = 20;
}
