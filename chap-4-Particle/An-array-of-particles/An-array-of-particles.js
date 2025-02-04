let particles = []; // Array to store the particles

function setup() {
    createCanvas(600, 400); // Create a 600x400 canvas
}

function draw() {
    background(220, 0); // Clear the canvas with a light gray background

    particles.push(new Particle(width / 2, 20));// Add a new particle at the center-top of the canvas

    // Loop through the array in reverse order to safely remove elements
    for (let i = particles.length - 1; i >= 0; i--) {
        let particle = particles[i];
        particle.run(); // Apply forces, update position, and display the particle

        if (particle.isDead()) {
            particles.splice(i, 1); // Remove the particle if its lifespan is over
        }
    }
}
class Particle {
    constructor(x, y) {
        this.position = createVector(x, y); // Position of the particle
        this.velocity = createVector(random(-1, 1), random(-1, 0)); // Initial random velocity
        this.acceleration = createVector(0, 0); // Acceleration starts at zero
        this.lifespan = 255.0; // Lifespan to determine when to remove the particle
    }

    run() {
        let gravity = createVector(0, 0.05); // Simulate gravity
        this.applyForce(gravity); // Apply gravity force
        this.update(); // Update position and velocity
        this.show(); // Display the particle
    }

    applyForce(force) {
        this.acceleration.add(force); // Add force to acceleration
    }

    update() {
        this.position.add(this.velocity); // Move particle based on velocity
        this.velocity.add(this.acceleration); // Apply acceleration to velocity
        this.lifespan -= 2; // Reduce lifespan over time
        this.acceleration.mult(0); // Reset acceleration after each update
    }

    show() {
        stroke(0, this.lifespan); // Fading stroke based on lifespan
        strokeWeight(2);
        fill(0, 255, 255, this.lifespan); // Fill color fades over time
        circle(this.position.x, this.position.y, 20); // Draw particle as a circle
    }

    isDead() {
        return this.lifespan < 0.0; // Return true if particle has faded out
    }
}
