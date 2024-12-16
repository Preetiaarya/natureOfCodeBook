function setup() {
    createCanvas(1000, 800);
  }
  
  function draw() {
    background(255,255,0);
  
    let mouse = createVector(mouseX, mouseY);
    let center = createVector(width/2, height/2);
    mouse.sub(center);
    // {!3} The magnitude (that is, length) of a vector can be accessed via the mag() method.  Here it is used as the width of a rectangle drawn at the top of the window.
    let m = mouse.mag();
    fill(0);
    // stroke("white");
    // strokeWeight(5);
    rect(0, 0, 1000, m);
    translate(width / 2, height / 2);
    line(0, 0, mouse.x, mouse.y);
  } 

// let vector;
function setup(){
    createCanvas(400,400);
}
function draw(){
    background(155);
    let vector = createVector(mouseX,mouseY);
    fill("black");
    line(200,200,mouseX,mouseY);
}