'use strict';

const containerForGrids = document.querySelector('.container-grids');
const gridButton = document.querySelector('.select-grids');

// Creating grids

gridButton.addEventListener('click', () => {
  const grids = +prompt('Enter number of grids between 16-100: ');
  console.log(grids);

  for (let i = 1; i <= grids; i++) {
    const newDiv = document.createElement('div');
    newDiv.classList.add('divs');
    containerForGrids.appendChild(newDiv);
  }
});
