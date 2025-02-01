let bob; // Mover object (will store the reference to the bob)

let spring; // Spring object (will store the reference to the spring)

function setup() {
    createCanvas(800, 400); // Set up the canvas size

    spring = new Spring(width / 2, 10, 100); // The third argument in Spring is "rest length" (natural length of the spring)

    bob = new Bob(width / 2, 100);// Create the bob at position (width/2, 100)
}

function draw() {
    background(0, 220); // Set background to white

    let gravity = createVector(0, 2); // Create a gravity force (pulling the bob downward)

    bob.applyForce(gravity); // Apply the gravity force to the bob

    bob.update(); // Update the bob's position based on forces acting on it

    bob.handleDrag(mouseX, mouseY); // Handle mouse dragging interaction with the bob

    spring.connect(bob); // Connect the bob to the spring (calculate spring force)

    spring.constrainLength(bob, 30, 200); // Constrain the spring length between a minimum (30) and a maximum (200)

    // Draw the spring and bob
    spring.showLine(bob); // Draw a line between the bob and the spring
    bob.show();  // Render the bob
    spring.show(); // Render the spring
}

function mousePressed() {
    bob.handleClick(mouseX, mouseY); // Check if the mouse is clicking on the bob
}

function mouseReleased() {
    bob.stopDragging(); // Stop dragging when the mouse is released
}

class Spring {
    constructor(x, y, length) {
        this.anchor = createVector(x, y); // Anchor point where the spring is fixed

        this.restLength = length; // Natural (rest) length of the spring

        this.k = 0.2; // Spring constant (determines the stiffness of the spring)
    }
    // Connect the bob to the spring and apply the spring force
    connect(bob) {
        // Calculate a vector from the anchor point to the bob's position
        let force = p5.Vector.sub(bob.position, this.anchor);

        // Calculate the current length of the spring (distance between anchor and bob)
        let currentLength = force.mag();

        // Compute the stretch amount (difference between current length and rest length)
        let stretch = currentLength - this.restLength;

        // Apply Hooke’s Law: F = -k * stretch
        // This adjusts both the direction and magnitude of the force
        force.setMag(-1 * this.k * stretch);

        // Apply the computed spring force to the bob
        bob.applyForce(force);
    }
}
