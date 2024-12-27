function setup(){
    createCanvas(1200,800);
}

function draw() {
    background(153,10);
  
    let mouse = createVector(mouseX, mouseY);
    let center = createVector(width / 2, height / 2);
    mouse.sub(center);
  
    translate(width / 2, height / 2);
    stroke("red");
    strokeWeight(2);
    line(0, 0, mouse.x, mouse.y);
    //{!2} In this example, after the vector is normalized, it’s multiplied by 50. Note that no matter where the mouse is, the vector always has the same length (50) because of the normalization process.
    mouse.normalize();
    mouse.mult(50);
    stroke(0);
    strokeWeight(8);
    line(0, 0, mouse.x, mouse.y);
  }