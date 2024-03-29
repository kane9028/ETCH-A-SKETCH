// add grids to container with default 16x16
addGrids(16);

//toggle shading mode
let shadingMode = false;
const shadingBtn = document.querySelector('.shading');
shadingBtn.addEventListener('click', switchShadingMode);

//toggle rainbow mode
let rainbowMode = false;
const rainbowBtn = document.querySelector('.rainbow');
rainbowBtn.addEventListener('click', switchRainbowMode);

//change color when mouseover
const container = document.querySelector('.container');
container.addEventListener('mouseover', changeColor);

//click button to change pixel size
const changePixelSizeBtn = document.querySelector('.changePixelSize');
changePixelSizeBtn.addEventListener('click', changePixelSize);

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
  if(rainbowMode === true) {
    const randomR = Math.floor(Math.random() * 256);
    const randomG = Math.floor(Math.random() * 256);
    const randomB = Math.floor(Math.random() * 256);
    e.target.style.background = `rgb(${randomR}, ${randomG}, ${randomB})`;
  } else if (e.target.style.background && shadingMode === true) {
    e.target.style.opacity = parseFloat(e.target.style.opacity)+ 0.1;
  } else if (shadingMode === true) {
    e.target.style.background = 'rgb(0, 0, 0)';
    e.target.style.opacity = 0.1;
  } else {
    e.target.style.background = 'rgb(0, 0, 0)';
    e.target.style.opacity = 1;
  }
}

function changePixelSize() {
  let newSize = prompt('Please enter new pixel size between 1 ~ 100:');
  while(newSize > 100 || newSize < 1) {
    newSize = prompt('Wrong Number! Please enter new pixel size between 1 ~ 100:');
  }
  const container = document.querySelector('.container');
  container.textContent = '';
  addGrids(newSize);
}

function switchRainbowMode() {
  if(rainbowMode) {
    rainbowMode = false;
    rainbowBtn.textContent = 'Rainbow Mode: off';
  } else {
    rainbowMode = true;
    rainbowBtn.textContent = 'Rainbow Mode: on';
  }
}

function switchShadingMode() {
  if(shadingMode) {
    shadingMode = false;
    shadingBtn.textContent = 'Shading Mode: off';
  } else {
    shadingMode = true;
    shadingBtn.textContent = 'Shading Mode: on';
  }
}
