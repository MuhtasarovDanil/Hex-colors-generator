const colorElements = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'];
const MIN_NUMBERS_IN_HEX = 6;

const generateRandomInt = () => {
  return Math.floor(Math.random() * (0, colorElements.length)) + 0;
}

const generateRandomColor = () => {
  let generatedColor = '#';

  for (let i = 0; i < MIN_NUMBERS_IN_HEX; i++) {
    generatedColor += colorElements[generateRandomInt()];
  }

  return generatedColor;
};

export const changeBackground = () => {
  const colorText = document.querySelector('.colors-text');
  const cardInput = document.querySelector('.colors-input');

  document.body.style.background = `linear-gradient(90deg, ${generateRandomColor()}, ${generateRandomColor()})`;
  colorText.innerHTML = `First color is: <b>${generateRandomColor()}</b> <br> Second color is: <b>${generateRandomColor()}</b>`;
  cardInput.value = `background: linear-gradient(90deg, ${generateRandomColor()}, ${generateRandomColor()});`;
};