let angle = 2;  // Set the initial angle value, which will control the rotation of the rectangle

function setup() {
  createCanvas(400, 400);  // Create a 400x400 pixel canvas
  angleMode(DEGREES);  // Set the angle mode to DEGREES (default is RADIANS)
}

function draw() {
  background(220, 0); 
  rotate(angle);  // Rotate the canvas by the current value of 'angle'

  fill(255); 
  rect(200, 200, 100, 50);  // Draw a rectangle at (200, 200) position with width 100 and height 50

  angle = angle + 1;  // Increase the 'angle' by 1 degree each frame to rotate the rectangle continuously
}

