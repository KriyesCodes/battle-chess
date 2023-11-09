const board = document.getElementById('board');
const piece = document.getElementsByClassName('piece')[0];

let squares = [[], [], [], [], [], [], [], []];

function createBoardSquareElements() {
  for (let i = 0; i < 64; ++i) {
    const square = document.createElement('div');
    square.classList.add('square');
    board.append(square);
  }
}

function createSquaresArray() {
  let squareElements = document.getElementsByClassName('square');
  for (let x = 0; x < 8; ++x) {
    for (let y = 0; y < 8; ++y) {
      squares[x][y] = null;
    }
  }
  let eIndex = 0;
  for (let y = 7; y >= 0; --y) {
    for (let x = 0; x < 8; ++x) {
      squares[x][y] = squareElements[eIndex];
      eIndex++;
    }
  }
}

createBoardSquareElements();
createSquaresArray();



function dragstartHandler(ev) {
  // Add the target element's id to the data transfer object
  ev.dataTransfer.setData("text/plain", ev.target.id);
  console.log('Dragging started');
}

piece.addEventListener('dragstart', dragstartHandler)