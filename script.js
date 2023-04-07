const body = document.querySelector('body');
const inputField = document.querySelector('.input-field');
const submitButton = document.querySelector('.submit-button');

body.addEventListener('mousemove', (event) => {
  const xPos = event.clientX / window.innerWidth;
  const yPos = event.clientY / window.innerHeight;
  body.style.background = `linear-gradient(135deg, rgba(91, 36, 122, ${xPos}), rgba(27, 206, 223, ${yPos}))`;
});

submitButton.addEventListener('click', () => {
  console.log(inputField.value);
  inputField.value = '';
});
