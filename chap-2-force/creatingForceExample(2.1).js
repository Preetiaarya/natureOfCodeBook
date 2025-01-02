let mover;

function setup() {
    createCanvas(800, 600);

    mover = new Mover(400, 200, 4);
}

function draw() {
    background(255,255,204);

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
        //{!1} For now, set the mass equal to 1 for simplicity.
        this.mass = 1;
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
        // Motion 101 from Chapter 1
        this.velocity.add(this.acceleration);
        this.position.add(this.velocity);
        // Now add clearing the acceleration each time!
        this.acceleration.mult(0);
    }

    show() {
        stroke(0);
        fill(175);
        // Scale the size according to mass. Stay tuned for an improvement on this to come later in the chapter!
        circle(this.position.x, this.position.y, this.mass * 16);
    }

    // Somewhat arbitrarily, I’ve decided that an object bounces when it hits the edges of the canvas.
    checkEdges() {
        if (this.position.x > width) {
            this.position.x = width;
            this.velocity.x *= -1;
        } else if (this.position.x < 0) {
            this.velocity.x *= -1;
            this.position.x = 0;
        }

        if (this.position.y > height) {
            // Even though I said not to touch position and velocity directly, exceptions exist. Here, I’m doing so as a quick way to reverse the direction of the object when it reaches the edge.
            this.velocity.y *= -1;
            this.position.y = height;
        }
    }
}

