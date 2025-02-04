let particle;

function setup() {
    createCanvas(600, 400);
    // Initialize a new particle at the center-top of the canvas
    particle = new Particle(width / 2, 15);
}

function draw() {
    background(220, 0); // Set background with a transparent effect

    let gravity = createVector(0, 0.1); // Create a gravity vector that pulls the particle down

    particle.run(gravity); // Use the run() method to update, display, and apply forces to the particle

    // If the particle is "dead" (lifespan < 0), create a new one
    if (particle.isDead()) {
        particle = new Particle(width / 2, 20);
        console.log("Particle dead!");
    }
}

class Particle {
    constructor(x, y) {
        this.position = createVector(x, y); // Set particle's position
        this.velocity = createVector(random(-1, 1), random(-2, 0)); // Assign random initial velocity
        this.acceleration = createVector(0, 0); // Initial acceleration is 0
        this.lifespan = 255.0; // Set the lifespan to 255 (fully visible)
    }

    // run() method integrates update, show, and force application
    run(force) {
        this.applyForce(force); // Apply any given force (e.g., gravity)
        this.update(); // Update particle's position and velocity
        this.show(); // Display the particle
    }

    // Update particle's velocity and position, decrease lifespan
    update() {
        this.velocity.add(this.acceleration); // Add acceleration to velocity
        this.position.add(this.velocity); // Update position using velocity
        this.lifespan -= 2.0; // Decrease lifespan to simulate fading
        this.acceleration.mult(0); // Reset acceleration after each update
    }

    // Display the particle with fading color based on lifespan
    show() {
        stroke(0, this.lifespan); // Set outline transparency based on lifespan
        fill(0, 204, 0, this.lifespan); // Set fill color (green) with transparency
        circle(this.position.x, this.position.y, 15); // Draw the particle as a circle
    }

    // Apply a force to the particle (e.g., gravity)
    applyForce(force) {
        this.acceleration.add(force); // Add the force to particle's acceleration
    }

    // Check if the particle's lifespan is over (lifespan < 0)
    isDead() {
        return this.lifespan < 0;
    }
}
