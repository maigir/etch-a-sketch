'use strict';

const containerForGrids = document.querySelector('.container-grids');
const gridBtn = document.querySelector('.grids-btn');
const resetBtn = document.querySelector('.reset-btn');
const rainbowBtn = document.querySelector('.rainbow-btn');
const opacityBtn = document.querySelector('.opacity-btn');

const DEFAULT_GRID = 16;

document.addEventListener('DOMContentLoaded', () => {
  defaultGrid();
});

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

function defaultGrid() {
  createGrid(DEFAULT_GRID);
}

function resetGrid() {
  const resetDivs = document.querySelectorAll('.divs');
  resetDivs.forEach((divs) => {
    divs.style.backgroundColor = 'white';
  });
}

function randomColors() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r}, ${g}, ${b})`;
}

function rainbowColors() {
  const rainbowDivs = document.querySelectorAll('.divs');
  rainbowDivs.forEach((divs2) => {
    divs2.addEventListener('mouseover', () => {
      divs2.style.backgroundColor = randomColors();
    });
  });
}

gridBtn.addEventListener('click', () => {
  const grids = +prompt('Enter number of grids between 16-100: ');
  if (grids < 16 || grids > 100) {
    alert('Not a valid number! Try again.');
    return;
  }
  createGrid(grids);
});

resetBtn.addEventListener('click', resetGrid);
rainbowBtn.addEventListener('click', rainbowColors);
