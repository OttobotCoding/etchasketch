const gridContainer = document.getElementById("grid-container");
let userValue = document.getElementById("button");

function makeGrid() {
    let number = window.prompt('How many squares do you want in your grid?');
    if (number < 0 || number > 99 || isNaN(number)) {
        console.log("No way bro!");
    } else {
    userValue.value = "";
    gridContainer.innerHTML = "";
    if (number < 0 || number > 99 || number == "") {
        for (let i = 0; i < 10; i++) {
            let row = document.createElement("div");
            row.classList.add("row");
            gridContainer.appendChild(row);
            for (let k = 0; k < 10; k++) {
                let col = document.createElement("div");
                col.classList.add("col");
                row.appendChild(col);
                };
                };
            }   else {
            for (let i = 0; i < number; i++) {
                let row = document.createElement("div");
                row.classList.add("row");
                gridContainer.appendChild(row);
                for (let k = 0; k < number; k++) {
                    let col = document.createElement("div");
                    col.classList.add("col");
                    row.appendChild(col);
                };
            };
        };
    };
    draw();
};

function draw() {
    let columns = document.getElementsByClassName("col");
    for (let i = 0; i < columns.length; i++) {
    columns[i].addEventListener("mouseover", function() {
        columns[i].style.backgroundColor = 'red';
    });
};

    for (let i = 0; i < columns.length; i++) {
        columns[i].addEventListener('mouseout', function() {
            columns[i].style.backgroundColor = '#f0f0f0';
        });
    };
};

// my attempt before researching //

// function createGrid() {
//     let squares = window.prompt('How many squares do you want in your grid?');
//     for (let i = children.length - 1; i >= 0; i --) {
//         gridContainer.removeChild(children[i]);
//     };
    
//     for (let row = 0; row < squares; row++) {
//         for (let col = 0; col < squares; col++) {
//             const gridItem = document.createElement("div");
//             gridItem.classList.add("grid-item");
//             gridItem.textContent = "Box " + row + " - " + col;
//             gridContainer.appendChild(gridItem);
//         };
//     };
// };

