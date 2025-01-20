// Initialize the angle, angular velocity, and angular acceleration
let angle = 0;
let angleV = -0.5; // Initial angular velocity
let angleA = 0;   // Initial angular acceleration
let drag = 0.99;  // Drag factor to decrease angular velocity over time

function setup() {
    createCanvas(400, 400);
    angleMode(RADIANS);      // Set angle mode to radians
}

function draw() {
    // Map the mouseX position to control the angular acceleration (speed of rotation)
    angleA = map(mouseX, 0, width, -0.05, 0.05);

    // Apply drag to the angular velocity, gradually slowing it down
    angleV *= drag;

    // Constrain angular velocity to prevent excessive rotation speed
    angleV = constrain(angleV, -0.2, 0.2);

    background(220, 0);

    stroke(0);
    fill(255);

    rectMode(CENTER);  // Set rectangle drawing mode to center

    translate(200, 200);  // Move the origin to the center of the canvas (200, 200)
    rotate(angle);        // Rotate the canvas by the current angle

    rect(0, 0, 250, 25);  // Draw a rectangle at the center of the rotated canvas

    // Update the angle based on the angular velocity and acceleration
    angle += angleV;  // Increment the angle by the angular velocity
    angle += angleA;  // Increment the angle by the angular acceleration based on mouseX position

    // Stop the rotation when the angular velocity becomes very small
   if (abs(angleV) < 0.001) {
        angleV = 0;  // Stop movement when the velocity is close to zero
     }
}
