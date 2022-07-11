const rangeRef = document.querySelector('#font-size-control');
const textRef = document.querySelector('#text');
rangeRef.addEventListener('input', event => {
  const textSize = event.currentTarget.value;
  textRef.style.fontSize = `${textSize}px`;
  textRef.style.color = `#ff00${textSize}`;
});
