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

        this.angle = 0; // Initial angle for rotation
        this.angularVelocity = random(-0.05, 0.05); // Random initial angular velocity
        this.angularAcceleration = 0; // Initial angular acceleration is 0
    }

    // run() method integrates update, show, and force application
    run(force) {
        this.applyForce(force); // Apply any given force (e.g., gravity)
        this.update(); // Update particle's position and velocity
        this.show(); // Display the particle
    }

    // Update particle's velocity and position, decrease lifespan, and update rotation
    update() {
        this.velocity.add(this.acceleration); // Add acceleration to velocity
        this.position.add(this.velocity); // Update position using velocity
        this.lifespan -= 2.0; // Decrease lifespan to simulate fading
        this.acceleration.mult(0); // Reset acceleration after each update

        this.angle += this.angularVelocity; // Update rotation angle
        this.angularVelocity += this.angularAcceleration; // Update angular velocity
    }

    // Display the particle with fading color based on lifespan and rotation effect
    show() {
        stroke(0, this.lifespan); // Set outline transparency based on lifespan
        fill(204, 0, 204, this.lifespan); // Set fill color (pink) with transparency

        // Push the current transformation matrix and apply rotation
        push();
        translate(this.position.x, this.position.y); // Move the origin to the particle's position
        rotate(this.angle); // Rotate the particle based on the angle
        rectMode(CENTER); // Draw the rectangle from its center
        rect(0, 0, 30, 15); // Draw a rotated rectangle (visible rotation)
        pop(); // Restore the transformation matrix
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
