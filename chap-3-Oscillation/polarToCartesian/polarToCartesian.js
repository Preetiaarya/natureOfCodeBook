let r;
let theta;

function setup() {
  createCanvas(600, 400);

  // Initialize all values.
  r = height * 0.45;
  theta = 0;
}

function draw() {
  background(220);
  translate(width / 2, height / 2);  // Translate the origin point to the center of the screen.
  //{!2} Polar coordinates (r, theta) are converted to Cartesian (x, y) for use in the circle() function.
  let x = r * cos(theta);
  let y = r * sin(theta);
  fill(127);
  stroke(0);
  line(0, 0, x, y);
  circle(x, y, 40);
  //{!1} Increase the angle over time.
  theta += 0.02;
}