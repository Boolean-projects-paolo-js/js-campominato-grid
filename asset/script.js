/*
Consegna
L'utente clicca su un bottone che genererà una griglia di gioco quadrata.
Ogni cella ha un numero progressivo, da 1 a 100.
Ci saranno quindi 10 caselle per ognuna delle 10 righe.
Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.
*/


const eleGrid = document.querySelector('.griglia')


for (let i = 1; i <= 100; i++) {
    eleGrid.innerHTML = eleGrid.innerHTML + `<div class="cell">${i}</div>`;
    console.log(i);
}

const listCells = document.querySelectorAll('.cell');

for (let i = 1; i < listCells.length; i++) {
	const cell = listCells[i];
	cell.addEventListener('click',
		function colorCell() {
			console.log(this);
			this.classList.toggle('clicked');
		}
	);
}
