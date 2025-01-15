let movers = [];
let attractor;

function setup() {
    createCanvas(640, 360);
    for (let i = 0; i < 10; i++) {
      movers[i] = new Mover(random(width), random(height), random(0.5, 3));
    }
    attractor = new Attractor();
  }
  
function draw() {
    background(220);
}function draw() {
    background(255);
    attractor.show();
    for (let i = 0; i < movers.length; i++) {
      let force = attractor.attract(movers[i]);
      movers[i].applyForce(force);
      movers[i].update();
      movers[i].show();
    }
  }
  class Mover {
    constructor(x, y, mass) {
      this.position = createVector(x, y);
      this.velocity = createVector(0, 0);
      this.acceleration = createVector(0, 0);
      this.mass = mass;
    }
  
    applyForce(force) {
      let f = force.copy();
      f.div(this.mass);
      this.acceleration.add(f);
    }
  
    update() {
      this.velocity.add(this.acceleration);
      this.position.add(this.velocity);
      this.acceleration.mult(0);  // Reset acceleration
    }
  
    show() {
      fill(127);
      stroke(0);
      ellipse(this.position.x, this.position.y, this.mass * 16, this.mass * 16);
    }
  }
   