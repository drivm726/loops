/*
  Classwork
*/

var cellSize = 50;
var cellX;
var cellY;

function setup(){
  createCanvas(windowWidth,windowHeight);
  for(var row=0; row<20;row++) {

  for(var column=0; column <20;column++){

    stroke("black");
    cellX = cellSize*column;
    cellY = cellSize*row;
    cellY2 = cellY/6;
    fill(245,211-cellY2,244-(cellY2/2));
    rect(cellX, cellY, cellSize, cellSize);
    fill(245-cellY2,211-(cellY2*2),244-(cellY2/3));

    triangle(cellX,random(cellY, cellY +cellSize),cellX+cellSize,cellY,cellX+cellSize,cellY+cellSize);




    }
  }
}
