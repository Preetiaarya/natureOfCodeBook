let bobs = []; // Array to store multiple bobs (particles)

let springs = []; // Array to store multiple springs (connecting elements)

// Setup function runs once at the start
function setup() {
    createCanvas(800, 400); // Create a canvas of size 800x400

    let numBobs = 20;   // Number of bobs in the system

    // Calculate the starting position of the first bob
    let startX = width / 2 - (numBobs - 1) * 25;
    let startY = height / 2;
    let restLength = 50;

    // Create bobs with evenly spaced positions
    for (let i = 0; i < numBobs; i++) {
        bobs.push(new Bob(startX + i * restLength, startY));
    }

    // Create springs connecting each bob to the next
    for (let i = 0; i < numBobs - 1; i++) {
        springs.push(new Spring(bobs[i], bobs[i + 1], restLength));
    }
}

// Draw function runs continuously to update and display the simulation
function draw() {
    background(220); // Set background color to light gray

    // Update each bob and allow dragging interaction
    for (let bob of bobs) {
        bob.update();
        bob.handleDrag(mouseX, mouseY);
    }

    // Apply spring forces while keeping within length constraints
    for (let spring of springs) {
        if (spring.isWithinLimit()) {
            spring.connect();
            spring.constrainLength();
        }
    }

    // Draw springs first
    for (let spring of springs) {
        spring.showLine();
    }

    // Draw bobs
    for (let bob of bobs) {
        bob.show();
    }
}

// Detect mouse press to allow dragging of bobs
function mousePressed() {
    for (let bob of bobs) {
        bob.handleClick(mouseX, mouseY);
    }
}

// Detect mouse release to stop dragging
function mouseReleased() {
    for (let bob of bobs) {
        bob.stopDragging();
    }
}

// Spring class defines behavior of springs connecting bobs
class Spring {
    constructor(bob1, bob2, length) {
        this.bob1 = bob1;
        this.bob2 = bob2;
        this.restLength = length;
        this.k = 0.2; // Spring stiffness constant
        this.minLength = 30; // Minimum allowed length
        this.maxLength = 100; // Maximum allowed length
    }

    // Calculate and apply spring force between connected bobs
    connect() {
        let force = p5.Vector.sub(this.bob2.position, this.bob1.position);
        let currentLength = force.mag();
        let stretch = currentLength - this.restLength;

        force.setMag(-this.k * stretch);

        this.bob1.applyForce(force);
        force.mult(-1);
        this.bob2.applyForce(force);
    }

    // Keep the spring within the defined length constraints
    constrainLength() {
        let direction = p5.Vector.sub(this.bob2.position, this.bob1.position);
        let length = direction.mag();

        if (length < this.minLength) {
            direction.setMag(this.minLength);
            this.bob2.position = p5.Vector.add(this.bob1.position, direction);
            this.bob2.velocity.mult(0);
        } else if (length > this.maxLength) {
            direction.setMag(this.maxLength);
            this.bob2.position = p5.Vector.add(this.bob1.position, direction);
            this.bob2.velocity.mult(0);
        }
    }

    // Check if spring is within min/max constraints
    isWithinLimit() {
        let length = p5.Vector.sub(this.bob2.position, this.bob1.position).mag();
        return length >= this.minLength && length <= this.maxLength;
    }

    // Draw the spring as a line connecting the two bobs
    showLine() {
        stroke(0);
        line(this.bob1.position.x, this.bob1.position.y, this.bob2.position.x, this.bob2.position.y);
    }
}

// Bob class defines properties and behaviors of individual bobs
class Bob {
    constructor(x, y) {
        this.position = createVector(x, y);
        this.velocity = createVector();
        this.acceleration = createVector();
        this.mass = 24; // Determines movement response to forces
        this.damping = 0.98; // Reduces velocity over time
        this.dragOffset = createVector(); // Stores offset when dragging
        this.dragging = false; // Drag state flag

        // Assign a random color to each bob
        this.color = color(random(255), random(255), random(255));
    }

    // Update position based on velocity and acceleration
    update() {
        this.velocity.add(this.acceleration);
        this.velocity.mult(this.damping);
        this.position.add(this.velocity);

        // Keep bobs inside canvas bounds
        this.position.x = constrain(this.position.x, this.mass, width - this.mass);
        this.position.y = constrain(this.position.y, this.mass, height - this.mass);

        this.acceleration.mult(0);
    }

    // Apply force to bob
    applyForce(force) {
        let f = force.copy();
        f.div(this.mass);
        this.acceleration.add(f);
    }

    // Draw the bob with its assigned color
    show() {
        stroke(0);
        strokeWeight(2);
        fill(this.color);
        circle(this.position.x, this.position.y, this.mass * 2);
    }

    // Detect if bob is clicked for dragging
    handleClick(mx, my) {
        let d = dist(mx, my, this.position.x, this.position.y);
        if (d < this.mass) {
            this.dragging = true;
            this.dragOffset.set(this.position.x - mx, this.position.y - my);
        }
    }

    // Stop dragging when mouse is released
    stopDragging() {
        this.dragging = false;
    }

    // Move bob with mouse while dragging
    handleDrag(mx, my) {
        if (this.dragging) {
            this.position.set(mx + this.dragOffset.x, my + this.dragOffset.y);
        }
    }
}
