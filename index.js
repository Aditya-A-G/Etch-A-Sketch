
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
                             background-color: rgb(255, 255, 255);
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

    let color = e.target.style.backgroundColor;

    if(color == "rgb(255, 255, 255)"){

        color = `rgb(${generateRandomNumber()}, ${generateRandomNumber()}, ${generateRandomNumber()})`;

        e.target.style.backgroundColor = color;

    }else{

        color = getDarkerColor(color);
        
        e.target.style.backgroundColor = color;
        
    }

}

function getDarkerColor(color){

    let rgb = color.slice(4, (color.length-1));

    let arr = rgb.split(", ");

    let r = arr[0];
    let g = arr[1];
    let b = arr[2];

	if(r > 0)
    {
		r = Math.floor(r - 25.5);

    	if(r < 0)
        {
            r = 0;
        }
    }
    
    if(g > 0)
    {
		g = Math.floor(g - 25.5);

    	if(g < 0)
        {
            g = 0;
        }
    }
    
    if(b > 0)
    {
		b = Math.floor(b - 25.5);

    	if(b < 0)
        {
            b = 0;
        }
    }

    color = `rgb(${r}, ${g}, ${b})`;

    return color;
}

function generateRandomNumber(){
    
    let num = Math.floor(Math.random() * 256); 
    
    if(num == previousNum){
        num = generateRandomNumber();
    }else{
        previousNum = num;
    }
    return num;

}






