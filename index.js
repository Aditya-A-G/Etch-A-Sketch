
let container = 0;

const input = document.getElementById("input");
const mainDiv = document.querySelector(".main");
const btn = document.getElementById("submit");

btn.addEventListener("click", generateGrid);

createGrid(20);

function generateGrid(){
    console.log(input.value)
    container.remove()
    createGrid(input.value);
    input.value = '';
    console.log(container)
}

function createGrid(size){
    console.log(size);
    let totalSize = size*size;
    let dimension = 400/size;

    container = document.createElement("div");
    container.style.cssText = ` height: 400px;
                                width: 400px;
                                display: flex;
                                flex-wrap: wrap;`;
    mainDiv.appendChild(container); 
    

    for(let i = 0; i<totalSize; i++){

        div = document.createElement("div");
        div.style.cssText = `height: ${dimension}px; 
                             width: ${dimension}px; 
                             background-color: rgb(100%, 100%, 100%);
                             border: 1px solid red`;
        container.appendChild(div);

    }
}

