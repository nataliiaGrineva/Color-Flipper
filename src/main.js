const colors = ['green', 'red', 'blue', 'orange', 'yellow',
  'purple', 'pink', 'aquamarine', 'brown', 'grey'];
const btn = document.getElementById('btn');
const color = document.querySelector('.color');

const changeColor = () => {
  const randomNumber = getRandomNumber();

  document.body.style.backgroundColor = colors[randomNumber];
  color.textContent = colors[randomNumber];
  color.style.color = colors[randomNumber];
};

btn.addEventListener('click', changeColor);

const getRandomNumber = () => {
  return Math.floor(Math.random() * colors.length);
};
