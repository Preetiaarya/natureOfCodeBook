let mover;

function setup() {
  createCanvas(800, 800);
  mover = new Mover(100, 200, 2); // Fixed capitalization and constructor initialization
}

function draw() {
  background("yellow");

  let gravity = createVector(0, 0.1); // Adjusted gravity to be a downward force
  mover.applyForce(gravity);

  mover.update();
  mover.edges();
  mover.show();
}

class Mover {
  constructor(x, y, mass) {
    this.pos = createVector(x, y);
    this.vel = createVector(0, 0);
    this.acc = createVector(0, 0);
    this.mass = mass;
  }

  applyForce(force) {
    let f = p5.Vector.div(force, this.mass); // Apply force accounting for mass
    this.acc.add(f);
  }

  update() {
    this.vel.add(this.acc);
    this.pos.add(this.vel);
    this.acc.set(0, 0);
  }

  show() {
    stroke("black");
    strokeWeight(3);
    fill("pink");
    circle(this.pos.x, this.pos.y, this.mass * 10);
  }

  edges() {
    if (this.pos.y >= height) {
      this.pos.y = height;
      this.vel.y *= -1; // Reverse velocity
    }
    if (this.pos.x >= width) {
      this.pos.x = width;
      this.vel.x *= -1; 
    } else if (this.pos.x <= 0) {
      this.pos.x = 0;
      this.vel.x *= -1;
    }
  }
}







  

  

  