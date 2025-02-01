// Mover object (will store the reference to the bob)
let bob;

// Spring object (will store the reference to the spring)
let spring;

function setup() {
  createCanvas(800, 400); // Set up the canvas size
  
  // Create Spring and Bob objects
  // The third argument in Spring is "rest length" (natural length of the spring)
  spring = new Spring(width / 2, 10, 100);
  
  // Create the bob at position (width/2, 100)
  bob = new Bob(width / 2, 100);
}

function draw() {
  background(0,220); // Set background to white

  // Create a gravity force (pulling the bob downward)
  let gravity = createVector(0, 2);
  
  // Apply the gravity force to the bob
  bob.applyForce(gravity);

  // Update the bob's position based on forces acting on it
  bob.update();

  // Handle mouse dragging interaction with the bob
  bob.handleDrag(mouseX, mouseY);

  // Connect the bob to the spring (calculate spring force)
  spring.connect(bob);

  // Constrain the spring length between a minimum (30) and a maximum (200)
  spring.constrainLength(bob, 30, 200);

  // Draw the spring and bob
  spring.showLine(bob); // Draw a line between the bob and the spring
  bob.show();  // Render the bob
  spring.show(); // Render the spring
}

function mousePressed() {
  // Check if the mouse is clicking on the bob
  bob.handleClick(mouseX, mouseY);
}

function mouseReleased() {
  // Stop dragging when the mouse is released
  bob.stopDragging();
}
