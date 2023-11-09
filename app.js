const board = document.getElementById('board');
const piece = document.getElementsByClassName('piece')[0];

function createBoardSquareElements() {
  for (let i = 0; i < 64; ++i) {
    const square = document.createElement('div');
    square.classList.add('square');
    board.append(square);
  }
}

createBoardSquareElements();



function dragstartHandler(ev) {
  // Add the target element's id to the data transfer object
  ev.dataTransfer.setData("text/plain", ev.target.id);
  console.log('Dragging started');
}

piece.addEventListener('dragstart', dragstartHandler)