let particle;

function setup() {
    createCanvas(600, 400);
    // Create a new particle starting at the center-top (width/2, 15)
    particle = new Particle(width / 2, 15);
}

function draw() {
    background(220, 0); // Transparent background

    // Update and display the particle
    particle.update();
    particle.show();

    // Apply gravity (a downward force)
    let gravity = createVector(0, 0.1);
    particle.applyForce(gravity);

    // Check if the particle is "dead" (lifespan < 0)
    if (particle.isDead()) {
        particle = new Particle(width / 2, 20); // Create a new particle
        console.log("Particle dead!"); // Log message in the console
    }
}

class Particle {

    constructor(x, y) {
        this.position = createVector(x, y); // Particle's initial position
        this.velocity = createVector(random(-1, 1), random(-2, 0)); // Random velocity
        this.acceleration = createVector(0, 0); // Initial acceleration set to zero
        this.lifespan = 255.0; // Maximum lifespan (255 means fully visible)
    }

    update() {
        this.velocity.add(this.acceleration); // Add acceleration to velocity
        this.position.add(this.velocity); // Add velocity to position (movement)
        this.lifespan -= 2.0; // Reduce lifespan (fade effect)
        this.acceleration.mult(0); // Reset acceleration after applying force
    }

    show() {
        stroke(0, this.lifespan); // Outline with fading transparency
        fill(0, 0, 255, this.lifespan); // Blue-colored particle with fading effect
        circle(this.position.x, this.position.y, 15); // Draw the particle
    }

    applyForce(force) {
        this.acceleration.add(force); // Apply any force (like gravity)
    }

    isDead() {
        return (this.lifespan < 0); // If lifespan is below 0, the particle is "dead"
    }
}
