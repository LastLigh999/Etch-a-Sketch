let gridDimensions = 16;
let minCellSize = 5;
let maxCellSize = 25;
let mindimension = 0;

// waiting for Page to load to do everything
window.onload = (event) =>{
    console.log("test");
    const Grid = document.querySelector("#Grid");
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
    console.log(mindimension);

}