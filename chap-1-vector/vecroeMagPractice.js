function setup() {
    createCanvas(1700, 800);
  }
  
  function draw() {
    background(255,255,0);
  
    let mouse = createVector(mouseX, mouseY);
    let center = createVector(width / 2, height / 2);
    mouse.sub(center);
    //{!3} The magnitude (that is, length) of a vector can be accessed via the mag() method.  Here it is used as the width of a rectangle drawn at the top of the window.
    let m = mouse.mag();
    fill(0);
    rect(0, 0, m, 10);
    translate(width / 2, height / 2);
    line(0, 0, mouse.x, mouse.y);
  }      