// let emitter;

// function setup() {
//     createCanvas(640, 240);
//     emitter = new Emitter(width / 2, 50);
// }

// function draw() {
//     background(255);
//     emitter.addParticle();
//     emitter.run();
// }
// class Emitter {
//     constructor(x, y) {
//         this.origin = createVector(x, y); // Initial position
//         this.velocity = createVector(2, 1); // Set initial movement speed
//         this.acceleration = createVector(0, 0.05); // Simulate gravity or force
//         this.particles = [];
//     }

//     move() {
//         this.velocity.add(this.acceleration); // Apply acceleration to velocity
//         this.origin.add(this.velocity); // Apply velocity to position

//         // Bounce off edges
//         if (this.origin.x > width || this.origin.x < 0) {
//             this.velocity.x *= -1; // Reverse X direction
//         }
//         if (this.origin.y > height || this.origin.y < 0) {
//             this.velocity.y *= -1; // Reverse Y direction
//         }
//     }

//     addParticle() {
//         this.particles.push(new Particle(this.origin.x, this.origin.y));
//     }

//     run() {
//         this.move(); // Move the emitter
//         for (let i = this.particles.length - 1; i >= 0; i--) {
//             this.particles[i].run();
//             if (this.particles[i].isDead()) {
//                 this.particles.splice(i, 1);
//             }
//         }
//     }
// }
// class Particle {
//     constructor(x, y) {
//         this.position = createVector(x, y);
//         this.acceleration = createVector(0, 0);
//         this.velocity = createVector(random(-1, 1), random(-1, 0));
//         this.lifespan = 255.0;
//     }

//     run() {
//         let gravity = createVector(0, 0.05);
//         this.applyForce(gravity);
//         this.update();
//         this.show();
//     }

//     applyForce(force) {
//         this.acceleration.add(force);
//     }

//     // Method to update position
//     update() {
//         this.velocity.add(this.acceleration);
//         this.position.add(this.velocity);
//         this.lifespan -= 2;
//         this.acceleration.mult(0);
//     }

//     // Method to display
//     show() {
//         stroke(0, this.lifespan);
//         strokeWeight(2);
//         fill(127, this.lifespan);
//         circle(this.position.x, this.position.y, 8);
//     }

//     // Is the particle still useful?
//     isDead() {
//         return this.lifespan < 0.0;
//     }
// }

let emitter; // Declare the emitter object

function setup() {
    createCanvas(1200, 800); // Create a canvas of 1200x800 pixels
    emitter = new Emitter(width / 2, height / 2); // Initialize the emitter at the center
}

function draw() {
    background(229, 255, 204, 50); // Set a light green background color with more transparency

    // Update emitter position to follow the mouse cursor
    emitter.origin.set(mouseX, mouseY);

    emitter.addParticle(); // Add a new particle at the emitter’s position
    emitter.run(); // Update and display all particles
}

// Class to handle the emitter, which generates particles
class Emitter {
    constructor(x, y) {
        this.origin = createVector(x, y); // Set initial position
        this.velocity = createVector(2, 1); // Set initial movement speed
        this.acceleration = createVector(0, 0.05); // Simulate gravity or force
        this.particles = []; // Array to hold particles
    }

    // Method to move the emitter automatically
    move() {
        this.velocity.add(this.acceleration); // Apply acceleration to velocity
        this.origin.add(this.velocity); // Apply velocity to position

        // Bounce off canvas edges
        if (this.origin.x > width || this.origin.x < 0) {
            this.velocity.x *= -1; // Reverse horizontal direction
        }
        if (this.origin.y > height || this.origin.y < 0) {
            this.velocity.y *= -1; // Reverse vertical direction
        }
    }

    // Method to create a new particle at the emitter's position
    addParticle() {
        this.particles.push(new Particle(this.origin.x, this.origin.y));
    }

    // Method to update and display particles
    run() {
        this.move(); // Move the emitter
        for (let i = this.particles.length - 1; i >= 0; i--) {
            this.particles[i].run(); // Update and display the particle
            if (this.particles[i].isDead()) {
                this.particles.splice(i, 1); // Remove dead particles from the array
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
        rect(this.position.x, this.position.y, 5, 5); // Draw a small rect as the particle
    }

    // Method to check if the particle is dead (lifespan below 0)
    isDead() {
        return this.lifespan < 0.0;
    }
}
