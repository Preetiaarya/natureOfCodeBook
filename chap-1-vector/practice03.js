let walker;

function setup() {
  createCanvas(1000, 800);
  background("aqua"); // Set initial background color

  // Create an instance of the Walker class
  walker = new Walker(0, 0);
}

function draw() {
  // Update and display the walker
//   walker.update();
  walker.show();
}

class Walker {
  constructor(x, y) {
    this.pos = createVector(x, y); // Position vector
    this.vel = p5.Vector.random2D(); // Random direction vector
    this.vel.mult(random(3)); // Scale the velocity randomly
  }

//   update() {
//     // Update position by adding velocity
//     this.pos.add(this.vel);
//   }

  show() {
    // Display the walker as a pink ellipse
    stroke("pink");
    strokeWeight(5);
    fill("pink");
    rect(this.pos.x, this.pos.y, 200,200);
  }
}
