'use strict';

const containerForGrids = document.querySelector('.container-grids');
const gridBtn = document.querySelector('.grids-btn');
const resetBtn = document.querySelector('.reset-btn');
const eraseBtn = document.querySelector('.erase-btn');
const DEFAULT_GRID = 16;

// Creating grids
function createGrid(size) {
  containerForGrids.innerHTML = '';

  for (let i = 1; i <= size * size; i++) {
    const newDiv = document.createElement('div');
    newDiv.classList.add('divs');
    newDiv.style.width = `calc(100% / ${size})`;
    newDiv.style.height = `calc(100% / ${size})`;
    newDiv.addEventListener('mouseover', () => {
      newDiv.style.backgroundColor = 'black';
    });
    containerForGrids.appendChild(newDiv);
  }
}

gridBtn.addEventListener('click', () => {
  const grids = +prompt('Enter number of grids between 16-100: ');
  if (grids < 16 || grids > 100) {
    alert('Not a valid number! Try again.');
    return;
  }
  createGrid(grids);
});

function resetContainer() {
  createGrid(DEFAULT_GRID);
}

resetBtn.addEventListener('click', resetContainer);
