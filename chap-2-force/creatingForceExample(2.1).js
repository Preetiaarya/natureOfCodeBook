let mover;

function setup() {
    createCanvas(800, 600);

    mover = new Mover(200, 200);
}

function draw() {
    background(255, 255, 204);

    let gravity = createVector(0, 0.1);
    mover.applyForce(gravity);

    if (mouseIsPressed) {
        let wind = createVector(0.1, 0);
        mover.applyForce(wind);
    }

    mover.update();
    mover.show();
    mover.checkEdges();
}

class Mover {
    constructor() {
        this.mass = 2;
        this.position = createVector(width / 2, 30);
        this.velocity = createVector(0, 0);
        this.acceleration = createVector(0, 0);
    }

    // Newton’s second law
    applyForce(force) {
        // Receive a force, divide by mass, and add to acceleration.
        let f = p5.Vector.div(force, this.mass);
        this.acceleration.add(f);
    }

    update() {
        this.velocity.add(this.acceleration);
        this.position.add(this.velocity);
        // Now add clearing the acceleration each time!
        this.acceleration.mult(0);
    }

    show() {
        stroke(0);
        fill(175);
        circle(this.position.x, this.position.y, this.mass * 16);
    }

    checkEdges() {
        if (this.position.x >= width || this.position.x <= 0) {
            this.velocity.x *= -1;
        }
        else if (this.position.y >= height || this.position.y <= 0) {
            this.velocity.y *= -1;

        }
    }
}

