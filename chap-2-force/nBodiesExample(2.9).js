let movers = [];

function setup() {
  createCanvas(600, 400);
  for (let i = 0; i < 10; i++) {
    // Create each body with random initial positions, velocities, and mass
    movers[i] = new Mover(random(width), random(height), random(-1, 1), random(-1, 1), random(0.1, 2));
  }
}

function draw() {
  background(220);

  // Loop over each pair of movers and apply the gravitational attraction
  for (let i = 0; i < movers.length; i++) {
    for (let j = 0; j < movers.length; j++) {
      // Avoid self-attraction
      if (i !== j) {
        let force = movers[j].attract(movers[i]);
        movers[i].applyForce(force);
      }
    }
    movers[i].update();
    movers[i].show();
  }
}

class Mover {
  constructor(x, y, vx, vy, m) {
    this.pos = createVector(x, y); // Position of the mover
    this.vel = createVector(vx, vy); // Velocity of the mover
    this.acc = createVector(0, 0); // Acceleration (starts at 0)
    this.mass = m; // Mass of the mover
    this.r = sqrt(this.mass) * 2; // Radius based on mass for visualization
  }

  applyForce(force) {
    let f = p5.Vector.div(force, this.mass); 
    this.acc.add(f);
  }

 attract(mover) {
    let force = p5.Vector.sub(this.pos, mover.pos); // Calculate the vector from this mover to the other
    let distanceSq = force.magSq(); // Get the square of the distance between them
    distanceSq = constrain(distanceSq, 100, 1000); // Constrain the distance to avoid too small or too large values

    let G = 1;
    let strength = (G * (this.mass * mover.mass)) / distanceSq; // Calculate gravitational force using Newton's law
    force.setMag(strength); // Scale the force by the calculated strength
    return force; 
  }

  update() {
    this.vel.add(this.acc); 
    this.pos.add(this.vel);
    this.acc.set(0, 0);
  }

  show() {
    stroke(0,204,204);
    strokeWeight(2);
    fill(204,0,102);
    ellipse(this.pos.x, this.pos.y, this.r * 12); // Draw the mover as a circle with a radius proportional to its mass
  }
}
