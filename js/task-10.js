// Напиши скрипт створення і очищення колекції елементів. Користувач вводить кількість елементів в input і натискає кнопку Створити, після чого рендериться колекція. Натисненням на кнопку Очистити, колекція елементів очищається.

// Створи функцію createBoxes(amount), яка приймає один параметр - число. Функція створює стільки <div>, скільки вказано в amount і додає їх у div#boxes.

// Розміри найпершого <div> - 30px на 30px.
// Кожен елемент після першого повинен бути ширшим і вищим від попереднього на 10px.
// Всі елементи повинні мати випадковий колір фону у форматі HEX. Використовуй готову функцію getRandomHexColor для отримання кольору.

// Створи функцію destroyBoxes(), яка очищає вміст div#boxes, у такий спосіб видаляючи всі створені елементи.

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

function createBoxes() {
  // Створюю змінні щоб тримати значення ширини і висоти
  let width = 20;
  let height = 20;
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
  boxesRef.insertAdjacentHTML('afterbegin', box);
}

function destroy() {
  boxesRef.innerHTML = '';
}
