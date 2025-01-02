let movers = [];

function setup() {
    createCanvas(600, 600);
    for (let i = 0; i < 5; i++) {
        movers.push(new Mover(random(width), random(height), random(10, 20)));
    }
}

function draw() {
    background(255, 255, 51);

    for (let mover of movers) {
        let wind = calculateWind(mover);
        mover.applyForce(wind);

        mover.update();
        mover.checkEdges();
        mover.show();
    }
}

// Class to represent each moving circle
class Mover {
    constructor(x, y, radius) {
        this.pos = createVector(x, y);
        this.vel = createVector(0, 0);
        this.acc = createVector(0, 0);
        this.radius = radius;
        this.mass = radius / 10; // Larger circles have more mass
    }

    applyForce(force) {
        let f = p5.Vector.div(force, this.mass); // F = ma
        this.acc.add(f);
    }

    update() {
        this.vel.add(this.acc);
        this.pos.add(this.vel);
        this.acc.set(0, 0);
    }

    checkEdges() {
        // Right edge
        if (this.pos.x + this.radius > width) {
            this.pos.x = width - this.radius;
            this.vel.x *= -1;
        }
        // Left edge
        if (this.pos.x - this.radius < 0) {
            this.pos.x = this.radius;
            this.vel.x *= -1;
        }
        // Bottom edge
        if (this.pos.y + this.radius > height) {
            this.pos.y = height - this.radius;
            this.vel.y *= -1;
        }
        // Top edge
        if (this.pos.y - this.radius < 0) {
            this.pos.y = this.radius;
            this.vel.y *= -1;
        }
    }

    show() {
        fill("black");
        noStroke();
        circle(this.pos.x, this.pos.y, this.radius * 2);
    }
}

// Function to calculate wind based on the mouse position
function calculateWind(mover) {
    let mouse = createVector(mouseX, mouseY); // Fan's position (mouse)
    let direction = p5.Vector.sub(mouse, mover.pos); // Direction from mover to mouse
    let distance = direction.mag(); // Distance to the fan
    direction.normalize(); // Normalize to get a unit vector

    let strength = constrain(map(distance, 0, width, 1, 0), 0, 1); // Strength diminishes with distance
    direction.mult(strength * 0.5); // Scale force
    return direction;
}
