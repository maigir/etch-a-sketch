'use strict';

document.addEventListener('DOMContentLoaded', () => {
  const divContainer = document.querySelector('.grid');

  for (let i = 0; i < 16 * 16; i++) {
    const newDiv = document.createElement('div');
    newDiv.classList.add('grid-item');
    divContainer.appendChild(newDiv);
  }
});
