let mover;

function setup() {
    createCanvas(600, 600);
    mover = new Mover(300, 300, 20); // Circle with a radius of 20
}

function draw() {
    background(255,102,102);

    mover.update();
    mover.checkEdges();
    mover.show();
}

class Mover {
    constructor(x, y, radius) {
        this.pos = createVector(x, y);
        this.vel = createVector(2, 3); // Initial velocity
        this.radius = radius; // Circle radius
    }

    update() {
        this.pos.add(this.vel); // Update position based on velocity
    }

    checkEdges() {
        // Right edge
        if (this.pos.x + this.radius > width) {
            this.pos.x = width - this.radius; // Correct position
            this.vel.x *= -1; // Reverse horizontal velocity
        }
        // Left edge
        if (this.pos.x - this.radius < 0) {
            this.pos.x = this.radius; // Correct position
            this.vel.x *= -1; // Reverse horizontal velocity
        }
        // Bottom edge
        if (this.pos.y + this.radius > height) {
            this.pos.y = height - this.radius; // Correct position
            this.vel.y *= -1; // Reverse vertical velocity
        }
        // Top edge
        if (this.pos.y - this.radius < 0) {
            this.pos.y = this.radius; // Correct position
            this.vel.y *= -1; // Reverse vertical velocity
        }
    }

    show() {
        fill("black");
        noStroke();
        circle(this.pos.x, this.pos.y, this.radius * 2); // Diameter = 2 * radius
    }
}
