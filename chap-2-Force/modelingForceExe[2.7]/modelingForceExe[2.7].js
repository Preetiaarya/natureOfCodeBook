let moverA;
let moverB;

function setup() {
    createCanvas(600, 600);

    moverA = new Mover(100, 400, 6);
    moverB = new Mover(200, 400, 6);
}

function draw() {
    background(220);

    let gravityA = createVector(0, 0.5);
    let gravityB = createVector(0, 0.5);
    moverA.applyForce(gravityA);
    moverB.applyForce(gravityB);

    if (mouseIsPressed) {
        let wind = createVector(0.5, 0);
        moverA.applyForce(wind);  // Apply wind to moverA
        moverB.applyForce(wind);  // Apply wind to moverB
    }

    if (moverA.contactEdge()) {
        let c = 0.1;
        let friction = moverA.vel.copy();
        friction.mult(-1);
        friction.setMag(c);
        moverA.applyForce(friction);  // Apply friction to moverA
    }

    if (moverB.contactEdge()) {
        let c = 0.1;
        let friction = moverB.vel.copy();
        friction.mult(-1);
        friction.setMag(c);
        moverB.applyForce(friction);  // Apply friction to moverB
    }

    moverA.update();
    moverA.show();
    moverA.bounceEdges();

    moverB.update();
    moverB.show();
    moverB.bounceEdges();
}

class Mover {
    constructor(x, y, mass) {
        this.pos = createVector(x, y);
        this.vel = createVector(0.5, 0);
        this.acc = createVector(0, 0);
        this.mass = mass;
        this.radius = mass * 4;  // Define the radius based on mass (or use a different scaling factor)
    }

    applyForce(force) {
        let f = p5.Vector.div(force, this.mass);
        this.acc.add(f);
    }

    update() {
        this.pos.add(this.vel);
        this.vel.add(this.acc);
        this.acc.set(0, 0);
    }

    show() {
        fill(220);
        stroke(0);
        ellipse(this.pos.x, this.pos.y, this.radius, this.radius);  // Draw the mover as a circle
    }

    contactEdge() {
        return this.pos.y >= height - this.radius - 1;  // Check if the mover is touching the bottom edge
    }

    bounceEdges() {
        let bounce = -0.9;  // Bounciness coefficient

        // When the mover hits the bottom edge, apply bounce
        if (this.pos.y > height - this.radius) {
            this.pos.y = height - this.radius;
            this.vel.y *= bounce;
        }
        else  if (this.pos.x > width- this.radius||this.pos.x<=0) {
            this.pos.x = width - this.radius;
            this.vel.x *= bounce;
        }
    }
}
