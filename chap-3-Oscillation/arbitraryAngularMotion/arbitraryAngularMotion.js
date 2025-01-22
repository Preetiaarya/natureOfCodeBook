let movers = []; // Array to hold the Mover objects
let attractor; // The Attractor object

function setup() {
    createCanvas(640, 360);
    for (let i = 0; i < 10; i++) { // Initialize 10 Mover objects with random positions and random masses (between 0.5 and 3)
        movers[i] = new Mover(random(width), random(height), random(0.5, 3));
    }
    attractor = new Attractor(); // Create the Attractor object
}

function draw() {
    background(220);

    attractor.show();
    // Loop through each mover and update its position based on gravitational attraction
    for (let i = 0; i < movers.length; i++) {
        let force = attractor.attract(movers[i]); // Calculate the attraction force from the attractor
        movers[i].applyForce(force);
        movers[i].applyTorque(); // Apply arbitrary torque
        movers[i].update();
        movers[i].show();
    }
}

class Mover {
    // Constructor initializes the mover with position, velocity, acceleration, and mass
    constructor(x, y, mass) {
        this.position = createVector(x, y);
        this.velocity = createVector(0, 0);
        this.acceleration = createVector(0, 0);
        this.mass = mass;
        this.angle = random(TWO_PI);  // Initial random angle for rotation
        this.angularVelocity = 0; // Initial angular velocity
        this.angularAcceleration = 0; // Initial angular acceleration
        this.radius = this.mass * 16; // Size based on mass
    }

    applyForce(force) {
        let f = force.copy(); // Copy the force to avoid modifying the original force
        f.div(this.mass); // Divide the force by the mass to calculate acceleration (F = ma)
        this.acceleration.add(f); // Add the calculated acceleration to the current acceleration
    }

    applyTorque() {
        // Apply arbitrary angular force (torque) for rotation
        let torque = random(-0.05, 0.05); // Random torque value to simulate arbitrary angular motion
        this.angularAcceleration += torque; // Change angular acceleration based on torque
    }

    // Update the position of the mover based on velocity and acceleration
    update() {
        this.velocity.add(this.acceleration);
        this.position.add(this.velocity);
        this.acceleration.mult(0.9); // Dampen the acceleration
        
        // Update the angular velocity and angle
        this.angularVelocity += this.angularAcceleration;
        this.angle += this.angularVelocity;
        this.angularAcceleration = 0; // Reset angular acceleration after each update
    }

    show() {
        fill(127);
        stroke(0);
        push();
        translate(this.position.x, this.position.y);
        rotate(this.angle); // Rotate the mover based on its current angle
        ellipse(0, 0, this.radius, this.radius);
        pop();
    }
}

class Attractor {
    // Constructor initializes the attractor's position at the center and its properties
    constructor() {
        this.position = createVector(width / 2, height / 2);
        this.radius = 25;
        this.strength = 1;
    }

    attract(mover) {
        let force = p5.Vector.sub(this.position, mover.position); // Calculate vector from mover to attractor
        let distance = force.mag(); // Get the distance between the attractor and the mover

        distance = constrain(distance, 5, 25);  // Constrain the distance to avoid too small or too large forces
        force.normalize(); // Normalize the force vector (convert to unit vector)

        // Gravitational force formula: F = (G * m1 * m2) / r^2
        // Here, we use simplified G (strength) and mass of the mover
        let strength = (this.strength * mover.mass) / (distance * distance);  // Inverse square law
        force.mult(strength); // Scale the force by the calculated strength

        return force;
    }

    show() {
        fill(255, 0, 0, 150);
        noStroke();
        ellipse(this.position.x, this.position.y, this.radius * 2, this.radius * 2);
    }
}
