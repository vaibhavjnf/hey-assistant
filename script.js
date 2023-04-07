const body = document.querySelector('body');
const inputField = document.querySelector('.input-field');
const submitButton = document.querySelector('.submit-button');

const colors = [
  'rgba(123, 31, 162, 0.8)',
  'rgba(32, 64, 155, 0.8)',
  'rgba(5, 102, 141, 0.8)',
  'rgba(2, 128, 144, 0.8)',
  'rgba(0, 150, 133, 0.8)',
  'rgba(50, 175, 50, 0.8)',
  'rgba(151, 195, 52, 0.8)',
  'rgba(255, 152, 0, 0.8)',
  'rgba(255, 87, 34, 0.8)',
  'rgba(245, 124, 0, 0.8)',
];

function animateBackground() {
  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  body.animate([{ backgroundColor: randomColor }], { duration: 1000, fill: 'forwards' });

  setTimeout(animateBackground, 5000);
}

animateBackground();

submitButton.addEventListener('click', () => {
  console.log(inputField.value);
  inputField.value = '';
});
