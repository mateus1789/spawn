function setup() {
    createCanvas(600, 400);
    background("black");
  }
  
  function draw() {
    stroke("green");
    fill("blue");
  
    if(mouseIsPressed) {
      rect(mouseX, mouseY, 20, 35);
  
   }   
  }