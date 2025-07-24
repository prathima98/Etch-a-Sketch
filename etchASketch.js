let container = document.querySelector(".grid-container");

function buildGrid(size) {
    container.innerHTML = "";
    for (let i = 0; i < size; i++) {
        for (let j = 0; j < size; j++) {
            let newDiv = document.createElement("div");
            newDiv.style.width = "16px";
            newDiv.style.height = "16px";
            newDiv.style.boxSizing = "border-box";
            newDiv.addEventListener("mouseover", () => {
                newDiv.style.backgroundColor = "black";
            })
            container.append(newDiv);
        }
    }
}

function promptMessage() {
    let gridSize = prompt("Enter the grid size: ");
    while (gridSize === "" || gridSize*1 > 100 || gridSize*1 < 1 || gridSize === null) {
        gridSize = prompt("Enter the grid size: ");
    }
    container.style.width = (gridSize * 16) + "px";
    buildGrid(gridSize*1);
}
