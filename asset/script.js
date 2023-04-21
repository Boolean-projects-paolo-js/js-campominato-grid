

const eleGrid = document.querySelector('.griglia')


for (let i = 1; i <= 100; i++) {
    eleGrid.innerHTML = eleGrid.innerHTML + `<div class="cell">${i}</div>`;
    console.log(i);
}

