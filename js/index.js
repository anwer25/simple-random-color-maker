'use strict';

const hex = [0, 1, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'F'];

const btn = document.getElementById('btn');
const color = document.querySelector('.color');

const getRandomNumber = () => Math.floor(Math.random() * hex.length);

btn.addEventListener('click', () => {
	let hexColor = '#';

	for (let i = 0; i < 6; i++) {
		hexColor += hex[getRandomNumber()];
	}

	color.textContent = hexColor;
	document.body.style.backgroundColor = hexColor;
	color.style.color = hexColor;
	btn.style.color = hexColor;
});
