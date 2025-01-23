// =======================rect-rotate=======================================

// let angle = 2;  // Set the initial angle value, which will control the rotation of the rectangle

// function setup() {
//   createCanvas(400, 400);  // Create a 400x400 pixel canvas
//   angleMode(DEGREES);  // Set the angle mode to DEGREES (default is RADIANS)
// }

// function draw() {
//   background(220, 0); 
//   rotate(angle);  // Rotate the canvas by the current value of 'angle'

//   fill(255); 
//   rect(200, 200, 100, 50);  // Draw a rectangle at (200, 200) position with width 100 and height 50

//   angle = angle + 1;  // Increase the 'angle' by 1 degree each frame to rotate the rectangle continuously
// }

// =======================rect-rotate-with-line==========================================

// let angle = 0;  // Set the initial angle value, which will control the rotation of the rectangle

// function setup() {
//   createCanvas(400, 400);  // Create a 400x400 pixel canvas
//   angleMode(DEGREES);  // Set the angle mode to DEGREES (default is RADIANS)
// }

// function draw() {
//   background(220); 
//   translate(200,200);
//   rotate(angle);  // Rotate the canvas by the current value of 'angle'

//   stroke(255);
//   line(0,0,50,50)
//   fill(255); 
//   rect(50, 50, 100, 50);  // Draw a rectangle at (200, 200) position with width 100 and height 50

//   angle = angle + 1;  // Increase the 'angle' by 1 degree each frame to rotate the rectangle continuously
// }

// =======================rect-rotate-center===============================

// let angle = 0;  // Set the initial angle value, which will control the rotation of the rectangle

// function setup() {
//   createCanvas(400, 400);  // Create a 400x400 pixel canvas
//   angleMode(DEGREES);  // Set the angle mode to DEGREES (default is RADIANS)
// }

// function draw() {
//   background(220,0); 
//   translate(200,200);
//   rotate(angle);  // Rotate the canvas by the current value of 'angle'

//   // stroke(255);
//   // line(0,0,50,50)
//   fill(255);
//   rectMode(CENTER); 
//   rect(50, 50, 100, 50);  // Draw a rectangle at (200, 200) position with width 100 and height 50

//   angle = angle + 1;  // Increase the 'angle' by 1 degree each frame to rotate the rectangle continuously
// }

// ======================increase rotate pos x+2,y+2=====================================

let x = 50;
let y = 50;
let angle = 1;  // Initialize the angle variable for rotation

function setup() {
  createCanvas(400, 400);  // Create a 400x400 pixel canvas
  angleMode(DEGREES);  // Set the angle mode to DEGREES (default is RADIANS)
}

function draw() {
  background(220,0);
  translate(x, y);  // Move the origin to (x, y) position
  // rotate(angle);  // Rotate the canvas by the current value of 'angle'

  fill(255); 
  rectMode(CENTER);  // Set rectangle drawing mode to CENTER (so the rectangle is drawn from its center)
  rect(0, 0, 100, 50);  // Draw a rectangle at the new origin (0, 0) with width 100 and height 50

  x = x + 2;  // Move the x position of the rectangle to the right
  y = y + 2;  // Move the y position of the rectangle downwards

  angle = angle + 1;  // Increase the 'angle' by 1 degree each frame to rotate the rectangle continuously
}
