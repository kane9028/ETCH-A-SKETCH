// add grids to container with default 16x16
addGrids(16);

//change color when mouseover
const container = document.querySelector('.container');
container.addEventListener('mouseover', changeColor);

//using loop to add grids based on the selected size num
function addGrids(num) {
  let totalGrids = num ** 2;
  while(totalGrids>0){
    addOneGrid();
    totalGrids--;
  }
  const container = document.querySelector('.container');
  container.setAttribute('style', 'grid-template-columns: repeat('+num+', 1fr);')
}

//function to add one grid
function addOneGrid() {
  const container = document.querySelector('.container');
  const grid = document.createElement('div');
  grid.classList.add('grid');
  container.appendChild(grid);
}

function changeColor(e) {
  e.target.style.background = 'black';
}