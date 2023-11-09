const board = document.getElementById('board');
console.log(board);

function createBoardSquareElements() {
  for (let i = 0; i < 64; ++i) {
    const square = document.createElement('div');
    square.classList.add('square');
    board.append(square);
  }
}

createBoardSquareElements();