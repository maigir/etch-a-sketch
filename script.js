'use strict';

// Creating div's
document.addEventListener('DOMContentLoaded', () => {
  const divContainer = document.querySelector('.grid');
  let newDiv;

  for (let i = 0; i < 16 * 16; i++) {
    newDiv = document.createElement('div');
    newDiv.classList.add('grid-item');
    divContainer.appendChild(newDiv);
  }

  // Hover effect
  const divItems = document.querySelectorAll('.grid-item');
  divItems.forEach((item) => {
    item.addEventListener('mouseover', () => {
      item.style.backgroundColor = '#000';
    });
  });
});
