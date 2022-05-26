import { changeColorButtonHandler } from "./handlers.js";

const init = () => {
  const cardContainer = document.querySelector('.colors-card');

  cardContainer.addEventListener("click", changeColorButtonHandler);
};

init();