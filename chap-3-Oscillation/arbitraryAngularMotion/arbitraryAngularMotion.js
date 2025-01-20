let mover;

function setup(){
    createCanvas(600,400);

    mover = new Mover;
}
function draw(){
    background(220);
}

class Mover {
    constructor(x, y, m) {
        this.pos = createVector(x, y);
        this.vel = p5.Vector.random2D();
        this.vel.mult(5);
        this.acc = createVector(0, 0);
        this.mass = m;
        this.r = sqrt(this.mass) * 2;
    }

    applyForce(force) {
        // Calculate the acceleration by dividing the force by the object's mass
        let f = p5.Vector.div(force, this.mass);
        
        // Add the calculated acceleration to the object's current acceleration
        this.acc.add(f);
    }
    
}