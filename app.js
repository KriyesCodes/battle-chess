const board = document.getElementById("board");
const piece = document.getElementsByClassName("piece")[0];

let squares = [[], [], [], [], [], [], [], []];
let cardObjects = [];

function createBoardSquareElements() {
	for (let i = 0; i < 64; ++i) {
		const square = document.createElement("div");
		square.classList.add("square");
		board.append(square);
	}
}

function createSquaresArray() {
	let squareElements = document.getElementsByClassName("square");
	for (let x = 0; x < 8; ++x) {
		for (let y = 0; y < 8; ++y) {
			squares[x][y] = null;
		}
	}
	let eIndex = 0;
	for (let y = 7; y >= 0; --y) {
		for (let x = 0; x < 8; ++x) {
			squareElements[eIndex].innerText = `(${x},${y})`;
			squares[x][y] = squareElements[eIndex];
			eIndex++;
		}
	}
}

async function fetchCardData() {
	await fetch("./card-data.json")
		.then((response) => response.json())
		.then((json) => {
			for (let i = 0; i < Object.keys(json).length; ++i) {
				cardObjects.push(json[i]);
			}
		});
}

createBoardSquareElements();
createSquaresArray();

const xInput = document.getElementById("xInput");
const yInput = document.getElementById("yInput");
const placeInButton = document.getElementById("placeInButton");

function placeInSquare(x, y) {
	x = x % 8;
	y = y % 8;

	const squareRect = squares[x][y].getBoundingClientRect();
	console.log(squareRect);
	piece.style.top = squareRect.top + 20 + "px";
	piece.style.left = squareRect.left + 10 + "px";
}

placeInButton.addEventListener("click", (e) => {
	placeInSquare(xInput.value, yInput.value);
});
