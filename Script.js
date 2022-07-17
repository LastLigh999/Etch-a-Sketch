let gridDimensions = 32;
let minCellSize = 2;
let maxCellSize = 25;
let mindimension = 0;
let cellSize = 0;
let draw = false;

// waiting for Page to load to do everything
window.onload = (event) =>{
    
    const Grid = document.querySelector("#Grid");
    const button = document.querySelector("#Gridder");
    button.addEventListener("click", (event) => {
        let dims = prompt("Please Enter Your Grid Size", gridDimensions);
        if(dims > 64){
            dims = 64;
            alert("Your Grid Cannot Be Larger Than: 64x64")
        }
        CreateGrid(dims,Grid)
    })
    CreateGrid(gridDimensions, Grid);

};
//Function to Create grid with input being Grid dimensions and element with #Grid id
const CreateGrid = (gridSize, grid) => {
    //Remove every child element that grid might have to prevent bugs
    let Child = grid.lastElementChild
    while (Child){
        grid.removeChild(Child)
        Child = grid.lastElementChild;
    }

    mindimension = Math.min(window.innerWidth,window.innerHeight);
    
    cellSize = CalculateCellSize(gridSize);

    grid.setAttribute("Style",`
        width:${(cellSize+2)*gridSize}px; 
        height:${(cellSize+2)*gridSize}px;
        background-color: red;
        grid-template-columns:repeat(${gridSize},auto)`);
    grid.addEventListener("mousedown", (event) => {
        draw = true;
    })
    grid.addEventListener("mouseup",(event)=>{
        draw = false;
    })
    CreateCellGrid(gridSize, grid,cellSize);
    
}
const CalculateCellSize = (gridSize) => {
    let returnValue = maxCellSize;
    
    if(mindimension-50 <= (returnValue+2)* gridSize){
        for(let i = returnValue; (i+2) * gridSize >= mindimension-50; i--){
            
            if(i <= minCellSize){
                return minCellSize;
            }
            
            returnValue = i;
        }
    }
    return returnValue;
}
const CreateCellGrid = (gridSize,grid,cellSize) => {
    for(let i = 0; i < gridSize; i++){
        for(let j = 0; j < gridSize; j++){
            console.log("jtest")
            let tempchild = document.createElement("div");
            grid.appendChild(tempchild);
            tempchild.setAttribute("style",`border:solid 1px black; background-color:white; height:${cellSize}px; width:${cellSize }px; `)
            tempchild.addEventListener("mousedown", (event) =>{
                tempchild.setAttribute("Style","background-color:green;")
            })
            tempchild.addEventListener("mouseover", (event) => {
                if(draw == true)
                {       
                    tempchild.setAttribute("Style","background-color:green;")
                }
                
            })
            
        }
    }
}