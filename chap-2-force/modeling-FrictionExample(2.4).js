let mover;

function setup() {
    createCanvas(1200, 600);

    mover = new Mover(400, 200, 2);
}
function draw() {
    background(224, 224, 224);

    let gravity = createVector(0, 1);
    mover.applyForce(gravity);

    if (mouseIsPressed) {
        let wind = createVector(0.5, 0);
        mover.applyForce(wind);
    }

    if (mover.contactEdge()) {
        let c = 0.1;
        let friction = mover.velocity.copy();
        friction.mult(-1);
        friction.setMag(c);
        // Apply the friction force vector to the object.
        mover.applyForce(friction);
    }
    mover.bounceEdges();
    mover.update();
    mover.show();

}
class Mover{
    constructor(x,y,mass){
        this.pos = createVector(x,y);
        this.vel = createVector(0,0);
        this.acc = createVector(0,0);
        this.mass = mass;
    }
    
}