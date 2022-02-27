const body = document.querySelector("body");
const container = document.createElement("div");
container.className = "container";
container.setAttribute("style", "display: flex; flex-direction: column; align-items:center");
body.appendChild(container);

const btn = document.createElement("button");
btn.className = "btn1";
btn.innerText = "CLEAR GRID";
container.appendChild(btn);



let number = 16;
let rownum = 16;
let size = 25; //in px

buildGrid();

btn.addEventListener("click", event =>{
    document.querySelectorAll(".square").forEach(item => {
        item.setAttribute("style",`height:${size}px; width:${size}px; border-style: solid; border-width:1px; border-color:grey`)
    })
    let gridSize = prompt("Please enter grid size:")
    
    number = gridSize;
    rownum = gridSize;
    const elements = document.getElementsByClassName("square");
    while (elements.length > 0) elements[0].remove();
    buildGrid();

})

function buildGrid(){
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
    
    document.querySelectorAll(".square").forEach(item => {
        item.addEventListener("mouseover", event =>{
            item.setAttribute("style",`height:${size}px; width:${size}px; border-style: solid; border-width:1px; border-color:grey; background-color:red`)
            
    
        })
    
    })

}



