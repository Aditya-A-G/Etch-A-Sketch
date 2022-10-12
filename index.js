
let container = 0;
let previousNum = 7;

const input = document.getElementById("input");
const mainDiv = document.querySelector(".main");
const btn = document.getElementById("submit");

btn.addEventListener("click", generateGrid);

createGrid(16);

function createGrid(size){
    
    let totalSize = size*size;
    let dimension = 550/size;

    container = document.createElement("div");

    container.style.cssText = ` height: 550px;
                                width: 550px;
                                display: flex;
                                flex-wrap: wrap;`;

    mainDiv.appendChild(container); 

    for(let i = 0; i<totalSize; i++){

        div = document.createElement("div");

        div.style.cssText = `height: ${dimension}px; 
                             width: ${dimension}px; 
                             background-color: rgb(100%, 100%, 100%);
                             border: 1px solid #a3d4f2`;

        container.appendChild(div);

        div.addEventListener("mouseover", changeColor);

    }
}

function generateGrid(){
   
    if(input.value > 100 || input.value < 1){
        alert("Enter value between 1 - 100");
    }else{
        container.remove();
        createGrid(input.value);
    }
    
    input.value = '';

}

function changeColor(e){
    
    let arr= ["rgb(255, 0, 0)", "rgb(255, 165, 0)", "rgb(255, 255, 0)", "rgb(0, 128, 0)", "rgb(0, 0, 255)", "rgb(75, 0, 130)", "rgb(238, 130, 238)"];

    let index = generateRandomNumber();

    e.target.style.backgroundColor = arr[index];

}

function generateRandomNumber(){
    
    let num = Math.floor(Math.random() * 7); 
    
    if(num == previousNum){
        num = generateRandomNumber();
    }else{
        previousNum = num;
    }
    return num;

}






