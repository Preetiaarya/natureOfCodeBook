let angle = 0;
let angleV = 0;
let angleA = 0;

function setup() {
    createCanvas(400, 400);
    angleMode(RADIANS);
}

function draw() {
    angleA = map(mouseX,0,width,-0.01,0.01);
    angleV = constrain(angleV, -0.2,0.2);
    background(220);
    stroke(0);
    fill(255);
    rectMode(CENTER);

    translate(200,200);
    rotate(angle);
    rect(0,0,250,25);
}