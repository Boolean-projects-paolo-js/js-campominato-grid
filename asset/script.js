/*
Consegna
L'utente clicca su un bottone che genererà una griglia di gioco quadrata.
Ogni cella ha un numero progressivo, da 1 a 100.
Ci saranno quindi 10 caselle per ognuna delle 10 righe.
Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.
*/



const eleBtn = document.querySelector(".button")


eleBtn.addEventListener("click", function(){
    const eleGrid = document.querySelector('.griglia')
    const eleDifficulty = document.getElementById("difficoltà");
    let difficoltà = eleDifficulty.options[eleDifficulty.selectedIndex].value;
    
    
    if (difficoltà == "facile") {
        eleGrid.classList.remove("facile", "media", "difficile");
        eleGrid.classList.add("facile");
        createGrid(49, eleGrid);

    } else if (difficoltà == "media") {
        eleGrid.classList.remove("facile", "media", "difficile");
        eleGrid.classList.add("media");
        createGrid(81, eleGrid);
        
    } else if (difficoltà == "difficile") {
        eleGrid.classList.remove("facile", "media", "difficile");
        eleGrid.classList.add("difficile");
        createGrid(100, eleGrid);
    }

})


function createGrid(numCells, eleGrid) {
    eleGrid.innerHTML = ''

	for (let i = 1; i < numCells + 1; i++) {
		eleGrid.innerHTML += `<div class="cell">${i}</div>`;
	}

    const listCells = document.querySelectorAll('.cell');
	
    for (let i = 1; i < listCells.length; i++) {
        const cell = listCells[i];
        cell.addEventListener('click', function(){
            this.classList.toggle('clicked');
        });
    }
}

    

