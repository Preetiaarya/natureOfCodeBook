// Variables for position and speed of ball
let x = 100;
let y = 100;
let xspeed = 5;
let yspeed = 5;

function setup() {
  createCanvas(1000, 600);
}

function draw() {
  background("pink");

  // Move the ball according to its speed.
  x = x + xspeed;
  y = y + yspeed;
  // Check for bouncing.
  if (x > width || x < 0) {
    xspeed = xspeed * -1;
  }
  if (y > height || y < 0) {
    yspeed = yspeed * -1;
  }
  // Draw the ball at the position (x, y).
  stroke(0);
  fill(127);
  circle(x, y, 60);
}


