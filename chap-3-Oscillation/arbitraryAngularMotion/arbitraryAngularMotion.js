let angle = 0;  //Position
let angleV = 0; //Velocity 
let angleA = 0.0001; //Acceleration

let movers = []; // Array to hold the Mover objects

function setup() {
    createCanvas(600, 400);
    for (let i = 0; i < 10; i++) { // Initialize 10 Mover objects with random positions and random masses (between 0.5 and 3)
        movers[i] = new Mover(random(width), random(height), random(0.5, 3));
    }
    mover = new Mover(300, 200, 10);  // Instantiate the Mover object with x=300, y=200, mass=10
}

function draw() {
    background(220);
    for (let i = 0; i < movers.length; i++) {
        let force = attractor.attract(movers[i]); // Calculate the attraction force from the attractor
        movers[i].applyForce(force);
        movers[i].update();
        movers[i].show();
    }

}

class Mover {
    constructor(x, y, m) {
        this.pos = createVector(x, y); // Initialize position with given x and 
        this.vel = p5.Vector.random2D();
        this.vel.mult(5);  // Set initial velocity to a random direction with magnitude 5
        this.acc = createVector(0, 0);  // Initialize acceleration to zero
        this.mass = m;   // Set the object's mass
        this.r = sqrt(this.mass) * 2;  // Calculate radius based on mass

        this.angle = 0;   //Variables for angular motion
        this.angleV = 0;
        this.angleA = 0;

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

        this.angleA = this.acc.x / 50.0;   // Calculate angular acceleration based on horizontal acceleration
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
        line(0, 0, this.r, 0);             // Draw a line representing the object direction
        ellipse(0, 0, this.r * 2);        // Draw the object as a circle with radius 'r'

        pop();                 // Restore the previous transformation matrix
    }


}


// let movers = []; // Array to hold the Mover objects
// let attractor; // The Attractor object

// function setup() {
//     createCanvas(640, 360);
//     for (let i = 0; i < 10; i++) { // Initialize 10 Mover objects with random positions and random masses (between 0.5 and 3)
//         movers[i] = new Mover(random(width), random(height), random(0.5, 3));
//     }
//     attractor = new Attractor(); // Create the Attractor object 
// }
// function draw() {
//     background(220);

//     attractor.show();
//     // Loop through each mover and update its position based on gravitational attraction
//     for (let i = 0; i < movers.length; i++) {
//         let force = attractor.attract(movers[i]); // Calculate the attraction force from the attractor
//         movers[i].applyForce(force);
//         movers[i].update();
//         movers[i].show();
//     }
// }
// class Mover {
//     // Constructor initializes the mover with position, velocity, acceleration, and mass
//     constructor(x, y, mass) {
//         this.position = createVector(x, y);
//         this.velocity = createVector(0, 0);
//         this.acceleration = createVector(0, 0);
//         this.mass = mass;
//     }

//     applyForce(force) {
//         let f = force.copy(); // Copy the force to avoid modifying the original force
//         f.div(this.mass); // Divide the force by the mass to calculate acceleration (F = ma)
//         this.acceleration.add(f); // Add the calculated acceleration to the current acceleration
//     }

//     // Update the position of the mover based on velocity and acceleration
//     update() {
//         this.velocity.add(this.acceleration);
//         this.position.add(this.velocity);
//         this.acceleration.mult(0.9);
//     }
//     show() {
//         fill(127);
//         stroke(0);
//         ellipse(this.position.x, this.position.y, this.mass * 16, this.mass * 16);
//     }
// }
// class Attractor {
//     // Constructor initializes the attractor's position at the center and its properties
//     constructor() {
//         this.position = createVector(width / 2, height / 2);
//         this.radius = 25;
//         this.strength = 1;
//     }

//     attract(mover) {
//         let force = p5.Vector.sub(this.position, mover.position); // Calculate vector from mover to attractor
//         let distance = force.mag(); // Get the distance between the attractor and the mover

//         distance = constrain(distance, 5, 25);  // Constrain the distance to avoid too small or too large forces
//         force.normalize(); // Normalize the force vector (convert to unit vector)

//         // Gravitational force formula: F = (G * m1 * m2) / r^2
//         // Here, we use simplified G (strength) and mass of the mover
//         let strength = (this.strength * mover.mass) / (distance * distance);  // Inverse square law
//         force.mult(strength); // Scale the force by the calculated strength

//         return force;
//     }

//     show() {
//         fill(255, 0, 0, 150);
//         noStroke();
//         ellipse(this.position.x, this.position.y, this.radius * 2, this.radius * 2);
//     }
// }