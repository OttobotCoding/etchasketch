const gridContainer = document.getElementById("grid-container");
const numRows = 4;
const numCols = 4;
let children = gridContainer.childNodes;
let gridItem = document.getElementsByClassName(".grid-item");

for (let row = 0; row < numRows; row++) {
    for (let col = 0; col < numCols; col++) {
        const gridItem = document.createElement("div");
        gridItem.classList.add("grid-item");
        gridItem.textContent = "Box " + row + " - " + col;
        gridContainer.appendChild(gridItem);
    };
};
    
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

function createGrid() {
    let squares = window.prompt('How many squares do you want in your grid?');
    for (let i = children.length - 1; i >= 0; i --) {
        gridContainer.removeChild(children[i]);
    };
    
    for (let row = 0; row < squares; row++) {
        for (let col = 0; col < squares; col++) {
            const gridItem = document.createElement("div");
            gridItem.classList.add("grid-item");
            gridItem.textContent = "Box " + row + " - " + col;
            gridContainer.appendChild(gridItem);
        };
    };
};

