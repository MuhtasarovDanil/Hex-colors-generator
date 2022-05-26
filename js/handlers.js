import { changeBackground } from './utils.js';

export const changeColorButtonHandler = (evt) => {
  const button = evt.target.closest('.button');
  if (!button) return;
  
  changeBackground(); 
};