'use strict';

const containerForGrids = document.querySelector('.container-grids');
const gridBtn = document.querySelector('.grids-btn');
const resetBtn = document.querySelector('.reset-btn');

// Creating grids
gridBtn.addEventListener('click', () => {
  const grids = +prompt('Enter number of grids between 16-100: ');

  if (grids < 16 || grids > 100) {
    alert('Not a valid number! Try again.');
    return;
  }
  let newDiv;
  for (let i = 1; i <= grids * grids; i++) {
    newDiv = document.createElement('div');
    newDiv.classList.add('divs');
    newDiv.style.width = `calc(100% / ${grids})`;
    newDiv.style.height = `calc(100% / ${grids})`;
    containerForGrids.appendChild(newDiv);
  }

  newDiv.forEach((item) =>
    item.addEventListener('mouseover', () => {
      item.style.backgroundColor = '#000';
    })
  );
});

function resetContainer() {
  containerForGrids.innerHTML = '';
}

resetBtn.addEventListener('click', resetContainer);
