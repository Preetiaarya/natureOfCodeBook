let movers = [];  // Array to store all Mover objects
let liquid;      // Liquid region for applying drag force

function setup() {
    createCanvas(640, 440);  // Set up canvas size
    for (let i = 0; i < 9; i++) {
        let mass = random(0.1, 5);  // Random mass for each Mover
        let initialHeight = random(50, 200); // Random initial height for each Mover
        movers[i] = new Mover(40 + i * 70, initialHeight, mass);  // Initialize movers spaced out horizontally
    }
    liquid = new Liquid(0, height / 2, width, height / 2, 0.1);  // Initialize Liquid region
}

function draw() {
    background(255);  // Clear the background each frame

    liquid.show();  // Display the Liquid region
    for (let i = 0; i < movers.length; i++) {
        if (liquid.contains(movers[i])) {  // Check if mover is in the liquid
            let dragForce = liquid.calculateDrag(movers[i]);  // Calculate drag force
            movers[i].applyForce(dragForce);  // Apply drag force to the mover
        }

        let gravity = createVector(0, 0.1 * movers[i].mass);  // Calculate gravity based on mass
        movers[i].applyForce(gravity);  // Apply gravity force

        movers[i].update();  // Update the mover's position and velocity
        movers[i].show();    // Display the mover
        movers[i].checkEdges();  // Prevent movers from going out of bounds
    }
}

class Mover {
    constructor(x, y, mass) {
        this.position = createVector(x, y);  // Initial position of the mover
        this.velocity = createVector(0, 0);  // Initial velocity
        this.acceleration = createVector(0, 0);  // Initial acceleration
        this.mass = mass;  // Mass of the mover
    }

    applyForce(force) {
        let f = p5.Vector.div(force, this.mass);  // Scale force by mass (Newton's second law)
        this.acceleration.add(f);  // Add the scaled force to acceleration
    }

    update() {
        this.velocity.add(this.acceleration);  // Update velocity
        this.velocity.limit(10);  // **Limit the maximum velocity to prevent unrealistic behavior**
        this.position.add(this.velocity);  // Update position
        this.acceleration.mult(0);  // Reset acceleration to 0 after each update
    }

    show() {
        stroke(0);  // Black outline
        fill(175);  // Gray fill
        ellipse(this.position.x, this.position.y, this.mass * 16, this.mass * 16);  // Draw mover as a circle
    }

    checkEdges() {
        if (this.position.y > height) {  // Check bottom edge
            this.position.y = height;  // Reset position to edge
            this.velocity.y *= -0.9;  // Reverse and reduce velocity
        }
        if (this.position.x > width || this.position.x < 0) {  // Check left and right edges
            this.velocity.x *= -0.9;  // Reverse and reduce horizontal velocity
        }
    }
}

class Liquid {
    constructor(x, y, w, h, c) {
        this.x = x;  // X-coordinate of the liquid's top-left corner
        this.y = y;  // Y-coordinate of the liquid's top-left corner
        this.w = w;  // Width of the liquid region
        this.h = h;  // Height of the liquid region
        this.c = c;  // Drag coefficient
    }

    show() {
        noStroke();  
        fill(175);  // Gray fill
        rect(this.x, this.y, this.w, this.h);  // Draw liquid as a rectangle
    }

    contains(mover) {
        let pos = mover.position;  // Get mover's position
        return (pos.x > this.x && pos.x < this.x + this.w &&
            pos.y > this.y && pos.y < this.y + this.h);  // Check if mover is inside liquid bounds
    }

    calculateDrag(mover) {
        let speed = mover.velocity.mag();  // Magnitude of the velocity
        let dragMagnitude = this.c * speed * speed;  // Drag force magnitude proportional to speed squared
        let dragForce = mover.velocity.copy();  // Direction of drag is opposite to velocity
        dragForce.mult(-1);  // Invert direction
        dragForce.setMag(dragMagnitude);  // Set magnitude
        return dragForce;  // Return the drag force vector
    }
}
