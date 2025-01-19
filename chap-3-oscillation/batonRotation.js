let batonLength = 50;  // Length of the baton
let batonWidth = 50;   // Width of the baton

function setup() {
  createCanvas(400, 400); 
}

function draw() {
  background(220);  

  // Move the origin to the center of the canvas for easier rotation
  translate(width / 2, height / 2);

  // Rotate the baton based on the number of frames passed (using frameCount)
  rotate(radians(frameCount));  // Convert frameCount to radians for rotation

  // Draw the main baton line, centered around the origin
  line(-batonWidth / 2, -batonLength / 2, batonWidth, batonLength);

  // Draw a circle at one end of the baton (left side)
  circle(-batonWidth / 2, -batonLength / 2, 25);

  // Draw another circle at the other end of the baton (right side)
  circle(batonWidth, batonLength, 25);
}
