let counterValue = 0;
const counter = document.querySelector('#value');
const decrementBtn = document.querySelector('button[data-action="decrement"]');
const incrementBtn = document.querySelector('button[data-action="increment"]');

function decrement() {
  counterValue -= 1;
  counter.textContent = counterValue;
}
function increment() {
  counterValue += 1;
  counter.textContent = counterValue;
}

decrementBtn.addEventListener('click', decrement);
incrementBtn.addEventListener('click', increment);
