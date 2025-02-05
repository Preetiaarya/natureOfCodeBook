let emitter; // Variable to hold the particle emitter

function setup() {
    createCanvas(600, 400); // Create a canvas of size 600x400 pixels
    emitter = new Emitter(width / 2, 50); // Initialize emitter at the center top
}

function draw() {
    // background(random(255), random(255), random(255)); // Random background color
    // background(220); //Set background to a light gray (220)
    background(220, 0); // Set background to a light gray (220) with 0 transparency (fully opaque)
    emitter.addParticle(); // Add a new particle each frame
    emitter.run(); // Update and display all particles
}

class Emitter {
    constructor(x, y) {
        this.origin = createVector(x, y); // Set the emitter's position
        this.particles = []; // Array to store particles
    }

    // Method to add a new particle at the emitter's position
    addParticle() {
        this.particles.push(new Particle(this.origin.x, this.origin.y));
    }

    // Method to update and display all particles
    run() {
        // Loop through the particles array in reverse order
        for (let i = this.particles.length - 1; i >= 0; i--) {
            this.particles[i].run(); // Update and display each particle

            // If the particle is dead (lifespan < 0), remove it from the array
            if (this.particles[i].isDead()) {
                this.particles.splice(i, 1); // Remove the particle from the array
            }
        }
    }
}
class Particle {
    constructor(x, y) {
        this.position = createVector(x, y); // Initialize particle position at (x, y)

        // Give the particle a random initial velocity
        // X velocity is between -1 and 1, Y velocity is between -1 and 0 (upward)
        this.velocity = createVector(random(-1, 1), random(-1, 0));

        this.acceleration = createVector(0, 0); // Start with no acceleration

        // Lifespan determines how long the particle will be visible
        this.lifespan = 255.0; // 255 means fully visible, 0 means completely faded

        // Assign a random color to each particle
        this.color = color(random(255), random(255), random(255));
    }
    run() {
        let gravity = createVector(0, 0.05); // Define a small gravity force pulling the particle down
        this.applyForce(gravity); // Apply gravity to the particle
        this.update(); // Update particle's movement
        this.show(); // Render the particle on the canvas
    }

    applyForce(force) {
        this.acceleration.add(force); // Add the given force to the particle's acceleration
    }

    update() {
        this.position.add(this.velocity); // Move particle according to velocity
        this.velocity.add(this.acceleration); // Update velocity with acceleration
        this.acceleration.mult(0); // Reset acceleration for the next frame

        this.lifespan -= 2; // Decrease lifespan over time (particle fades out)
    }
    show() {
        stroke(0, this.lifespan); // Set stroke color with fading effect
        strokeWeight(2); // Define the stroke thickness
        fill(
            this.color.levels[0], // Red component
            this.color.levels[1], // Green component
            this.color.levels[2], // Blue component
            this.lifespan // Transparency based on lifespan
        );
        ellipse(this.position.x, this.position.y, 10, 10); // Draw particle as a circle
        // rect(this.position.x, this.position.y, 105, 5); // Draw the particle as a rectangle

    }
    isDead() {
        return this.lifespan < 0.0; // Return true if lifespan is over
    }
}