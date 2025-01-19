let mover;

function setup() {
    createCanvas(1200, 600);
    mover = new Mover(400, 200, 10);
}

function draw() {

    background(255,0);
    let gravity = createVector(0, 1);
    mover.applyForce(gravity);

    //   I should scale by mass to be more accurate, but this example has only one circle.
    if (mouseIsPressed) {
    let wind = createVector(0.5, 0);
    mover.applyForce(wind);
    }
    if (mover.contactEdge()) {
    let c = 0.1;
    let friction = mover.vel.copy();
    friction.mult(-1);
    friction.setMag(c);
    mover.applyForce(friction);
    //  Apply the friction force vector to the object.
    }
    mover.bounceEdges();//   Call the new bounceEdges() method.
    mover.update();
    mover.show();

}
class Mover {
    constructor(x, y, mass) {
        this.pos = createVector(x, y);
        this.vel = createVector(0, 0);
        this.acc = createVector(0, 0);
        this.mass = mass;
    }

    applyForce(force) {
        let f = p5.Vector.div(force, this.mass);
        this.acc.add(f);
    }

    update() {
        this.vel.add(this.acc);
        this.pos.add(this.vel);
        this.acc.set(0, 0);
    }

    show() {
        stroke(0);
        fill(175);
        circle(this.pos.x, this.pos.y, this.mass * 16);
    }

    contactEdge() {
        // Check if the mover is touching the edges of the canvas
        return (this.pos.y >= height);
    }

    bounceEdges() {
        // Bounce off edges
        if (this.pos.x >= width || this.pos.x <= 0) {
            this.vel.x *= -1;
        }
        if (this.pos.y >= height || this.pos.y <= 0) {
            this.vel.y *= -1;
        }
    }
}