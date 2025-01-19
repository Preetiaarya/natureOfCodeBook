let movers = [];  // Array to store all Box objects
let liquid;      // Liquid region for applying drag force

function setup() {
    createCanvas(640, 440);  // Set up canvas size
    for (let i = 0; i < 5; i++) {
        let mass = random(1, 5);  // Random mass for each Box
        let size = random(30, 60); // Random size for each Box (side length)
        let initialHeight = random(50, 200); // Random initial height for each Box
        movers[i] = new Box(40 + i * 100, initialHeight, size, mass);  // Initialize movers spaced out horizontally
    }
    liquid = new Liquid(0, height / 2, width, height / 2, 0.47);  // Initialize Liquid region (drag coefficient 0.47 for water)
}

function draw() {
    background(255);  // Clear the background each frame

    liquid.show();  // Display the Liquid region
    for (let i = 0; i < movers.length; i++) {
        if (liquid.contains(movers[i])) {  // Check if box is in the liquid
            let dragForce = liquid.calculateDrag(movers[i]);  // Calculate drag force
            movers[i].applyForce(dragForce);  // Apply drag force to the box
        }

        let gravity = createVector(0, 0.1 * movers[i].mass);  // Calculate gravity based on mass
        movers[i].applyForce(gravity);  // Apply gravity force

        movers[i].update();  // Update the box's position and velocity
        movers[i].show();    // Display the box
        movers[i].checkEdges();  // Prevent boxes from going out of bounds
    }
}

class Box {
    constructor(x, y, size, mass) {
        this.position = createVector(x, y);  // Initial position of the box
        this.velocity = createVector(0, 0);  // Initial velocity
        this.acceleration = createVector(0, 0);  // Initial acceleration
        this.size = size;  // Size of the box (side length)
        this.mass = mass;  // Mass of the box
    }

    applyForce(force) {
        let f = p5.Vector.div(force, this.mass);  // Scale force by mass (Newton's second law)
        this.acceleration.add(f);  // Add the scaled force to acceleration
    }

    update() {
        this.velocity.add(this.acceleration);  // Update velocity
        this.velocity.limit(10);  // Limit the maximum velocity to prevent unrealistic behavior
        this.position.add(this.velocity);  // Update position
        this.acceleration.mult(0);  // Reset acceleration to 0 after each update
    }

    show() {
        stroke(0);  // Black outline
        fill(175);  // Gray fill
        rect(this.position.x, this.position.y, this.size, this.size);  // Draw box as a square
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
        this.c = c;  // Drag coefficient (0.47 is a common value for water)
    }

    show() {
        noStroke();  
        fill(175);  // Gray fill
        rect(this.x, this.y, this.w, this.h);  // Draw liquid as a rectangle
    }

    contains(box) {
        let pos = box.position;  // Get box's position
        return (pos.x > this.x && pos.x < this.x + this.w &&
            pos.y > this.y && pos.y < this.y + this.h);  // Check if box is inside liquid bounds
    }

    calculateDrag(box) {
        // Assume the largest side is facing downward
        let area = box.size * box.size;  // Surface area of the box (side length squared)
        let speed = box.velocity.mag();  // Magnitude of the velocity
        let dragMagnitude = 0.5 * this.c * area * speed * speed;  // Drag force magnitude based on the area
        let dragForce = box.velocity.copy();  // Direction of drag is opposite to velocity
        dragForce.mult(-1);  // Invert direction
        dragForce.setMag(dragMagnitude);  // Set magnitude
        return dragForce;  // Return the drag force vector
    }
}
