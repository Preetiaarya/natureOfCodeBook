let moverA;
let moverB;

function setup() {
  createCanvas(800, 800);

  // Two Mover objects with different masses
  moverA = new Mover(200, 200, 2);  // Smaller mass
  moverB = new Mover(300, 200, 4);  // Larger mass
}

function draw() {
  background(220);

  let gravityA = createVector(0, 0.2 * moverA.mass);  // Gravity force proportional to mass
  let gravityB = createVector(0, 0.2 * moverB.mass);

  moverA.applyForce(gravityA);
  moverB.applyForce(gravityB);

  if(mouseIsPressed){
    moverA.applyForce(frictionA);
    moverB.applyForce(frictionB);
  }

  moverA.update();
  moverA.show();
  moverA.edges();

  moverB.update();
  moverB.show();
  moverB.edges();
}

class Mover {
  constructor(x, y, mass) {
    this.pos = createVector(x, y);
    this.vel = createVector(0, 0);
    this.acc = createVector(0, 0);
    this.mass = mass;
  }

  applyForce(force) {
    let f = p5.Vector.div(force, this.mass);  // Apply F = ma
    this.acc.add(f);
  }

  applyFriction(coeff) {
    let normal = 1; // Assuming normal force is 1
    let frictionMag = coeff * normal;
    let friction = this.vel.copy();
    friction.normalize();
    friction.mult(-frictionMag);  // Friction acts opposite to velocity
    this.applyForce(friction);
  }

  update() {
    this.vel.add(this.acc);
    this.pos.add(this.vel);
    this.acc.set(0, 0);
  }

  show() {
    fill(0);
    ellipse(this.pos.x, this.pos.y, this.mass * 16);
  }

  edges() {
    if (this.pos.x >= width || this.pos.x <= 0) {
      this.vel.x *= -1;
    }
    if (this.pos.y >= height) {
      this.vel.y *= -0.9;  // Damping effect for bouncing
    } else if (this.pos.y <= 0) {
      this.vel.y *= -1;
    }
  }
}
