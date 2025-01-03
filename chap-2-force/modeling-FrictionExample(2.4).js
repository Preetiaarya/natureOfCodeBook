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
        this.pos.add(this.vel);
        this.vel.add(this.acc);
        this.acc.set(0, 0);
    }
    show() {
        stroke(0);
        fill(175);
        circle(this.position.x, this.position.y, this.mass * 16);
    }
    bounceEdges() {
        if (this.pos.x >= width || this.pos.x <= 0) {
            this.vel *= -1;
        }
        else if (this.pos.y >= height || this.pos.y <= 0) {
            this.vel *= -1;
        }
    }


}