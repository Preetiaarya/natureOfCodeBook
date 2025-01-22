let movers = []; // Array to hold the Mover objects

function setup() {
    createCanvas(600, 400);
    for (let i = 0; i < 10; i++) { // Initialize 10 Mover objects with random positions and random masses (between 0.5 and 3)
        movers[i] = new Mover(random(width), random(height), random(0.5, 3));
    }
}

function draw() {
    background(220);
    for (let i = 0; i < movers.length; i++) {
        movers[i].update();
        movers[i].show();
    }
}

class Mover {
    constructor(x, y, m) {
        this.pos = createVector(x, y); // Initialize position with given x and y
        this.vel = p5.Vector.random2D();
        this.vel.mult(5);  // Set initial velocity to a random direction with magnitude 5
        this.acc = createVector(0, 0);  // Initialize acceleration to zero
        this.mass = m;   // Set the object's mass
        this.r = sqrt(this.mass) * 2;  // Calculate radius based on mass

        this.angle = 0;   // Variables for angular motion
        this.angleV = 0;  // Angular velocity
        this.angleA = 0;  // Angular acceleration
    }

    applyForce(force) {
        // Calculate the acceleration by dividing the force by the object's mass
        let f = p5.Vector.div(force, this.mass);

        // Add the calculated acceleration to the object's current acceleration
        this.acc.add(f);
    }

    update() {
        this.vel.add(this.acc); // Update the velocity by adding the current acceleration to it
        this.pos.add(this.vel); // Update the position by adding the current velocity to it

        this.angleA = this.vel.x / 50.0;   // Calculate angular acceleration based on horizontal velocity
        this.angleV += this.angleA;        // Update angular velocity by adding angular acceleration
        this.angle += this.angleV;          // Update angle by adding angular velocity

        this.acc.set(0, 0); // Reset the acceleration to zero for the next frame
    }

    show() {
        stroke(255);
        strokeWeight(2);
        fill(255, 100);
        push();               // Save the current transformation matrix

        translate(this.pos.x, this.pos.y);  // Move the origin to the object's position
        rotate(this.angle);                // Rotate the object by its angle

        // Draw the half-diameter line (acting like a rotating arm/hand)
        let halfDiameter = this.r;  // Line length equals the radius (half the diameter)
        line(0, 0, halfDiameter, 0);  // Line extending from center to the edge along the radius

        // Draw the ellipse (the object)
        ellipse(0, 0, this.r * 2, this.r * 2);  // Draw the ellipse with radius 'r'

        pop();                 // Restore the previous transformation matrix
    }
}
