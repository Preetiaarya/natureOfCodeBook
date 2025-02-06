let emitters = []; // Array to store multiple emitters

function setup() {
    createCanvas(800, 400); // Set up a canvas of 800x400 pixels
    emitters.push(new Emitter(100, 60));
    // emitters.push(new Emitter(200, 30));
    // emitters.push(new Emitter(350, 90));
    // emitters.push(new Emitter(540, 50));
}
function draw() {
    background(204, 229, 255); // Clear the screen with a light gray background

    // Loop through each emitter in the array and update it
    for (let emitter of emitters) {
        emitter.run();       // Update existing particles and remove dead ones
        emitter.addParticle(); // Continuously add new particles from the emitter
    }
}
function mousePressed() {
    // When the mouse is clicked, create a new emitter at the mouse position
    emitters.push(new Emitter(mouseX, mouseY)); // Add new emitter to the array
}

class Emitter {
    constructor(x, y) {
        this.origin = createVector(x, y); // Store the emitter's position as a vector
        this.particles = []; // Array to store particles generated by this emitter
    }

    addParticle() {
        // Create a new particle at the emitter's position and add it to the array
        this.particles.push(new Particle(this.origin.x, this.origin.y));
    }

    run() {
        // Looping through the particle array in reverse order
        // This prevents issues when removing elements from an array
        for (let i = this.particles.length - 1; i >= 0; i--) {
            this.particles[i].run(); // Update particle behavior

            if (this.particles[i].isDead()) { // Check if the particle should be removed
                this.particles.splice(i, 1); // Remove the particle from the array
            }
        }
    }
}
// Class to create individual particles
class Particle {
    constructor(x, y) {
        this.position = createVector(x, y); // Set initial position
        this.acceleration = createVector(0, 0.5); // No initial acceleration
        this.velocity = createVector(random(-1, 1), random(-1, 0)); // Random velocity
        this.lifespan = 255.0; // Particle lifespan (opacity)
    }

    // Method to update movement and display the particle
    run() {
        let gravity = createVector(0, 0.05); // Define gravity force
        this.applyForce(gravity); // Apply gravity
        this.update(); // Update position
        this.show(); // Display the particle
    }

    // Method to apply force to the particle
    applyForce(force) {
        this.acceleration.add(force);
    }

    // Method to update particle position and velocity
    update() {
        this.velocity.add(this.acceleration); // Update velocity with acceleration
        this.position.add(this.velocity); // Update position with velocity
        this.lifespan -= 1; // Gradually decrease lifespan to make the particle fade out over time
        this.acceleration.mult(0); // Reset acceleration for the next frame
    }

    // Method to display the particle
    show() {
        stroke(0, this.lifespan); // Set stroke color with fading effect
        strokeWeight(2); // Set stroke thickness
        fill(255, 51, 153, this.lifespan); // Fill color with fading effect
        circle(this.position.x, this.position.y, 45);
        fill(153, 255, 204, this.lifespan); // Fill color with fading effect
        circle(this.position.x, this.position.y, 35); // Draw a small circle as the particle
        fill(255, 255, 51, this.lifespan); // Fill color with fading effect
        circle(this.position.x, this.position.y, 15);

    }
    // Method to check if the particle is dead (lifespan below 0)
    isDead() {
        return this.lifespan < 0.0;
    }
}
