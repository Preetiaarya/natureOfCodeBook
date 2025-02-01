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
class Bob {
    constructor(x, y) {
        this.position = createVector(x, y); // Initial position of the bob
        this.velocity = createVector();   // Initial velocity (starts at rest)
        this.acceleration = createVector(); // Initial acceleration (starts at zero)
        this.mass = 24; // Mass of the bob (affects force calculations)
        this.damping = 0.98; // Damping factor to simulate friction/air resistance

        // Variables for user interaction (dragging behavior)
        this.dragOffset = createVector(); // Offset between mouse and bob position
        this.dragging = false; // Tracks whether the bob is being dragged
    }
    // Update position using standard Euler integration
  update() {
    this.velocity.add(this.acceleration); // Apply acceleration to velocity
    this.velocity.mult(this.damping); // Apply damping to slow down motion
    this.position.add(this.velocity); // Update position based on velocity
    this.acceleration.mult(0); // Reset acceleration for the next frame
  }

  // Apply a force to the bob (F = M * A)
  applyForce(force) {
    let f = force.copy(); // Copy the force vector
    f.div(this.mass); // Divide force by mass to get acceleration
    this.acceleration.add(f); // Apply acceleration to the bob
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
        bob.applyForce(force); // Apply the computed spring force to the bob
    }

    constrainLength(bob, minlen, maxlen) {
        let direction = p5.Vector.sub(bob.position, this.anchor);// Calculate a vector pointing from the bob's position to the anchor point
        let length = direction.mag(); // Get the current length (distance between bob and anchor)

        // Check if the length is shorter than the minimum allowed length
        if (length < minlen) {
            direction.setMag(minlen); // Set the magnitude to the minimum allowed length
            bob.position = p5.Vector.add(this.anchor, direction); // Adjust the bob's position to stay within the minimum constraint
            bob.velocity.mult(0); // Stop the bob's movement when constrained

            // Check if the length is longer than the maximum allowed length
        } else if (length > maxlen) {
            direction.setMag(maxlen); // Set the magnitude to the maximum allowed length
            bob.position = p5.Vector.add(this.anchor, direction); // Adjust the bob's position to stay within the maximum constraint
            bob.velocity.mult(0); // Stop the bob's movement when constrained
        }
    }
    // Method to draw the anchor point of the spring
    show() {
        fill(127); // Set fill color to gray
        circle(this.anchor.x, this.anchor.y, 10); // Draw a small circle at the anchor point
    }

    // Method to draw the line representing the spring connection between Bob and the anchor
    showLine(bob) {
        stroke(0); // Set line color to black
        line(bob.position.x, bob.position.y, this.anchor.x, this.anchor.y); // Draw a line from the bob to the anchor
    }
}
