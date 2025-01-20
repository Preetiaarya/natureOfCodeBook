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

    update() {
        // Update the velocity by adding the current acceleration to it
        this.vel.add(this.acc);
        
        // Update the position by adding the current velocity to it
        this.pos.add(this.vel);
        
        // Reset the acceleration to zero for the next frame
        this.acc.set(0, 0);
    }
    
}