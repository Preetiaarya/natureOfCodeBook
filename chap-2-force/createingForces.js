let mover;

function setup(){
    createCanvas(1000,600);

    mover = new Mover(400,200,4);
}

function draw(){
background("red");

let gravity = createVector(0,0.1);
mover.applyForce(gravity);
}

