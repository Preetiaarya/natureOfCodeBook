let path = []; // Array to store path points
let follower;  // Object that follows the path

function setup() {
  createCanvas(640, 360);

  // Generate a sine wave path
  for (let x = 0; x < width; x += 10) {
    let y = height / 2 + sin(x * 0.05) * 50; // Sine wave formula
    path.push(createVector(x, y)); // Store each point as a vector
  }

  // Initialize the follower starting at the first point of the path
  follower = new Follower(path[0].x, path[0].y);
}

function draw() {
  background(255);

  // Draw the path
  stroke(0);
  noFill();
  beginShape();
  for (let pt of path) {
    vertex(pt.x, pt.y);
  }
  endShape();

  // Update and display the follower
  follower.follow(path);
  follower.update();
  follower.show();
}

// Follower class
class Follower {
  constructor(x, y) {
    this.position = createVector(x, y); // Initial position of the follower
    this.velocity = createVector(2, 0); // Initial velocity
    this.targetIndex = 0; // Index of the current target point on the path
  }

  follow(path) {
    // Get the next point on the path to follow
    let target = path[this.targetIndex];

    // Calculate the vector pointing from follower's position to the target
    let desired = p5.Vector.sub(target, this.position);

    // If close to the target, move to the next point
    if (desired.mag() < 5) {
      this.targetIndex = (this.targetIndex + 1) % path.length; // Loop back if at the end
    }

    // Adjust velocity to move toward the target
    desired.setMag(2); // Set speed
    this.velocity = p5.Vector.lerp(this.velocity, desired, 0.1); // Smoothly adjust velocity
  }

  update() {
    // Update position using velocity
    this.position.add(this.velocity);
  }

  show() {
    // Draw the follower as a circle
    fill(127);
    stroke(0);
    circle(this.position.x, this.position.y, 16);
  }
}