const gridContainer = document.getElementById("grid-container");
const numRows = 4;
const numCols = 4;

for (let row = 0; row < numRows; row++) {
    for (let col = 0; col < numCols; col++) {
        const gridItem = document.createElement("div");
        gridItem.classList.add("grid-item");
        gridItem.textContent = "Box " + row + " - " + col;
        gridContainer.appendChild(gridItem);
    }
}

const gridItem = document.getElementsByClassName('grid-item');

for (let i = 0; i < gridItem.length; i++) {
    gridItem[i].addEventListener('mouseover', function() {
        gridItem[i].style.backgroundColor = 'red';
    });
};

for (let i = 0; i < gridItem.length; i++) {
    gridItem[i].addEventListener('mouseout', function() {
        gridItem[i].style.backgroundColor = '#f0f0f0';
    });
};