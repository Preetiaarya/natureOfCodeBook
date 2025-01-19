let creatures = [];

function setup() {
  createCanvas(800, 600);

  // Create a variety of creatures
  for (let i = 0; i < 10; i++) {
    creatures.push(new Creature(random(width), random(height), random(1, 3)));
  }
}

function draw() {
  background(30, 100, 200); // A soothing background

  // Update and display each creature
  for (let c of creatures) {
    c.update();
    c.display();
  }
}

// Creature class
class Creature {
  constructor(x, y, size) {
    this.position = createVector(x, y);
    this.velocity = p5.Vector.random2D(); // Random initial direction
    this.acceleration = createVector(0, 0);
    this.size = size * 10; // Scale size
    this.behavior = random(["buzz", "hop", "slither"]); // Assign random behavior
  }

  // Update movement based on behavior
  update() {
    if (this.behavior === "buzz") {
      // Erratic buzzing
      this.acceleration = p5.Vector.random2D().mult(0.5);
    } else if (this.behavior === "hop") {
      // Gentle hops
      let hopForce = createVector(0, -0.2);
      if (this.position.y > height - this.size / 2) {
        this.acceleration = hopForce;
      }
    } else if (this.behavior === "slither") {
      // Slithering motion
      let sineWave = sin(frameCount * 0.1) * 0.5;
      this.acceleration = createVector(sineWave, 0);
    }

    // Apply acceleration to velocity and position
    this.velocity.add(this.acceleration);
    this.velocity.limit(5); // Limit max speed
    this.position.add(this.velocity);

    // Wrap around screen edges
    if (this.position.x > width) this.position.x = 0;
    if (this.position.x < 0) this.position.x = width;
    if (this.position.y > height) this.position.y = 0;
    if (this.position.y < 0) this.position.y = height;
  }

  // Display the creature
  display() {
    push();
    translate(this.position.x, this.position.y);

    if (this.behavior === "buzz") {
      fill(255, 200, 0);
      ellipse(0, 0, this.size); // Simple buzzing fly
    } else if (this.behavior === "hop") {
      fill(100, 255, 100);
      rect(-this.size / 2, -this.size / 2, this.size, this.size); // Bunny-like shape
    } else if (this.behavior === "slither") {
      fill(200, 100, 255);
      ellipse(0, 0, this.size, this.size / 2); // Snake-like shape
    }

    pop();
  }
}
