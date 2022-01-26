const body = document.querySelector("body");
const container = document.createElement("div");
container.className = "container";
container.setAttribute("style", "display: flex; flex-direction: column; align-items:center");
body.appendChild(container);

let number = 16;
let rownum = 16;
let size = 25; //in px

for (let j = 0; j < rownum; j++){
    const row = document.createElement("div");
    row.className = "row";
    row.setAttribute("style", "display: flex; flex-direction:row");


    for (let i = 0; i < number; i++){
        const square = document.createElement("div");
        square.className = "square";
        square.setAttribute("style",`height:${size}px; width:${size}px; border-style: solid; border-width:1px; border-color:grey`);
        row.appendChild(square);
    }
    container.appendChild(row);

}



