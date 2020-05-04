const grid = document.querySelector("#grid-container");
const resetButton = document.querySelector("#reset");
const colorButton = document.querySelectorAll(".color");
let boxes;
let color;

function defaultGrid() {
    createGrid(16);
}

function createGrid(size) {
    for (let rows = 0; rows < size; rows++) {
        for (let columns = 0; columns < size; columns++) {
            let box = document.createElement("div");
            box.className = "boxes";
            box.style.width=((600 / size)-2) + 'px';
            box.style.height=((600 / size)-2) + 'px';
            grid.appendChild(box);
        }
    }
    boxes = document.querySelectorAll(".boxes");
    boxes.forEach(box => box.addEventListener("mouseover", changeColor));
}

function changeColor(e) {
    switch(color) {
        case "Black":
            e.target.style.backgroundColor = "Black";
            break;
        case "Colored":
            e.target.style.backgroundColor = "#" + Math.floor(Math.random()*16777215).toString(16);
            e.target.style.opacity = 1;
            break;
        case "Darken":
            let darken = Number(e.target.style.opacity);
            e.target.style.opacity = darken += 0.1;
            e.target.style.backgroundColor = "#000";
            break;
    };
}

function reset(e) {
    let size = prompt("Enter the new grid size");
    boxes.forEach(box => grid.removeChild(box));
    createGrid(size);
}


color = "Black";
resetButton.addEventListener("click", reset);
colorButton.forEach(button => button.addEventListener("click", function () {
    color = button.textContent;
}));

defaultGrid();