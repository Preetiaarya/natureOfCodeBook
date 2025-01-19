// let mover;  // Mover object
// let attractor;  // Attractor object
// let G = 1.0;  // Gravitational constant

// function setup() {
//   createCanvas(400, 400);
//   mover = new Mover(300, 50, 2);  // Create a mover with initial position and mass
//   attractor = new Attractor();  // Create an attractor at the center of the canvas
// }

// function draw() {
//   background(255,0);  // Clear the background each frame
  
//   // Apply the gravitational force from the attractor on the mover
//   let force = attractor.attract(mover);
//   mover.applyForce(force);
//   mover.update();  // Update the position and velocity of the mover
  
//   attractor.show();  // Show the attractor
//   mover.show();  // Show the mover
// }

// class Attractor {
//   constructor() {
//     this.position = createVector(width / 2, height / 2);  // Position at the center of the canvas
//     this.mass = 20;  // Mass of the attractor (like a planet or sun)
//   }

//   attract(mover) {
//     let force = p5.Vector.sub(this.position, mover.position);  // Find the vector pointing from mover to attractor
//     let distance = force.mag();  // Get the magnitude (distance) of the force vector

//     // Constrain the distance to avoid extreme values (don't let the mover fall too close or too far)
//     distance = constrain(distance, 5, 25);  

//     let strength = (G * this.mass * mover.mass) / (distance * distance);  // Calculate the gravitational force
//     force.setMag(strength);  // Set the force vector's magnitude to the calculated strength
    
//     return force;  // Return the gravitational force
//   }

//   show() {
//     stroke(0);
//     fill(175, 200);
//     circle(this.position.x, this.position.y, this.mass * 2);  // Draw the attractor as a circle
//   }
// }

// class Mover {
//   constructor(x, y, mass) {
//     this.position = createVector(x, y);  // Set the initial position
//     this.velocity = createVector(0, 0);  // Set the initial velocity to zero
//     this.acceleration = createVector(0, 0);  // Set the initial acceleration to zero
//     this.mass = mass;  // Mass of the mover (the object being attracted)
//   }

//   applyForce(force) {
//     let f = p5.Vector.div(force, this.mass);  // Apply force using F = ma (force divided by mass)
//     this.acceleration.add(f);  // Add the force to the current acceleration
//   }

//   update() {
//     this.velocity.add(this.acceleration);  // Update the velocity with the current acceleration
//     this.position.add(this.velocity);  // Update the position with the velocity
//     this.acceleration.mult(0);  // Reset the acceleration to zero after each update
//   }

//   show() {
//     fill(127);
//     stroke(0);
//     ellipse(this.position.x, this.position.y, this.mass * 16, this.mass * 16);  // Draw the mover as an ellipse
//   }
// }


// ----------------------------------------------------------------



// let movers = [];  // Array to hold all the random movers
// let attractor;  // Attractor object
// let G;  // Gravitational constant

// function setup() {
//   createCanvas(640, 240);

//   G = random(0.5, 1.5);  // Random gravitational constant between 0.5 and 1.5

//   // Create 5 random movers
//   for (let i = 0; i < 5; i++) {
//     let mass = random(1, 5);  // Random mass for each mover
//     let startX = random(50, 590);  // Random x position for each mover
//     let startY = random(50, 190);  // Random y position for each mover
//     movers.push(new Mover(startX, startY, mass));  // Add new mover to the array
//   }

//   attractor = new Attractor();  // Create an attractor at the center of the canvas
// }

// function draw() {
//   background(255,0);  // Clear the background each frame
  
//   // Apply gravitational force from the attractor to all movers
//   for (let i = 0; i < movers.length; i++) {
//     let force = attractor.attract(movers[i]);  // Force from the attractor
//     movers[i].applyForce(force);  // Apply force to the mover
    
//     movers[i].update();  // Update the mover's position and velocity
//     movers[i].show();  // Display the mover
//   }
  
//   attractor.show();  // Show the attractor
// }

// class Attractor {
//   constructor() {
//     this.position = createVector(width / 2, height / 2);  // Position at the center of the canvas
//     this.mass = random(15, 30);  // Random mass for the attractor
//   }

//   attract(mover) {
//     let force = p5.Vector.sub(this.position, mover.position);  // Vector from mover to attractor
//     let distance = force.mag();  // Magnitude (distance) between the mover and the attractor

//     // Constrain the distance to avoid extreme values (preventing the objects from falling too close or too far)
//     distance = constrain(distance, 5, 25);  
    
//     let strength = (G * this.mass * mover.mass) / (distance * distance);  // Gravitational force equation
//     force.setMag(strength);  // Set the force vector's magnitude to the calculated strength
    
//     return force;  // Return the gravitational force vector
//   }

//   show() {
//     stroke(0);
//     fill(175, 200);
//     circle(this.position.x, this.position.y, this.mass * 2);  // Draw the attractor as a circle
//   }
// }

// class Mover {
//   constructor(x, y, mass) {
//     this.position = createVector(x, y);  // Set initial position
//     this.velocity = createVector(random(-1, 1), random(-1, 1));  // Random initial velocity
//     this.acceleration = createVector(0, 0);  // Initial acceleration is zero
//     this.mass = mass;  // Mass of the mover (the object being attracted)
//   }

//   applyForce(force) {
//     let f = p5.Vector.div(force, this.mass);  // F = ma, so divide the force by the mass to get acceleration
//     this.acceleration.add(f);  // Add the resulting acceleration to the current acceleration
//   }

//   update() {
//     this.velocity.add(this.acceleration);  // Update velocity by adding acceleration
//     this.position.add(this.velocity);  // Update position based on velocity
//     this.acceleration.mult(0);  // Reset acceleration after applying the force
//   }

//   show() {
//     fill("pink");
//     stroke(0);
//     ellipse(this.position.x, this.position.y, this.mass * 16, this.mass * 16);  // Draw the mover as a circle
//   }
// }


// ----------------------------------------------------------

// A mover and an attractor
let mover;
let attractor;
// A gravitational constant (for global scaling)
let G = 1.0;

function setup() {
  createCanvas(400, 400);
  mover = new Mover(200, 100, 2); // Mover with initial position and mass
  attractor = new Attractor();   // Attractor at the center of the canvas
}

function draw() {
  background(220);
  
  // Apply the attraction force from the attractor on the mover
  let force = attractor.attract(mover);
  mover.applyForce(force);  // Apply the force to the mover
  
  mover.update();  // Update the mover's position and velocity
  attractor.show();  // Display the attractor
  mover.show();  // Display the mover
}

// Mover class (the object being attracted)
class Mover {
  constructor(x, y, mass) {
    this.position = createVector(x, y);  // Position of the mover
    this.velocity = createVector(0, 0);  // Initial velocity is zero
    this.acceleration = createVector(0, 0);  // Initial acceleration is zero
    this.mass = mass;  // Mass of the mover
  }

  // Apply a force to the mover (scaled by its mass)
  applyForce(force) {
    let f = p5.Vector.div(force, this.mass);  // F = ma => a = F/m
    this.acceleration.add(f);  // Add acceleration to the mover
  }

  // Update the position and velocity based on the applied forces
  update() {
    this.velocity.add(this.acceleration);  // Update velocity
    this.position.add(this.velocity);  // Update position
    this.acceleration.mult(0);  // Reset acceleration to 0 for the next frame
  }

  // Show the mover as a circle
  show() {
    fill(175, 200);
    stroke(0);
    ellipse(this.position.x, this.position.y, this.mass * 16, this.mass * 16); // Display as a circle with size proportional to mass
  }
}

// Attractor class (the object applying the gravitational force)
class Attractor {
  constructor() {
    this.position = createVector(width / 2, height / 2);  // Fixed position at the center of the canvas
    this.mass = 20;  // Mass of the attractor (e.g., the Sun)
  }

  // Calculate the gravitational attraction force from the attractor to the mover
  attract(mover) {
    let force = p5.Vector.sub(this.position, mover.position);  // Vector pointing from the mover to the attractor
    let distance = force.mag();  // Distance between the attractor and the mover

    // Prevent the force from blowing up if distance is too small (like division by zero)
    distance = constrain(distance, 5, 25);

    // Gravitational force formula (inverse square law)
    let strength = (G * this.mass * mover.mass) / (distance * distance);
    
    // Set the magnitude of the force vector to the calculated strength
    force.setMag(strength);
    return force;  // Return the force vector
  }

  // Show the attractor as a circle
  show() {
    fill(175, 0, 0);  // Color of the attractor (e.g., the Sun)
    stroke(0);
    ellipse(this.position.x, this.position.y, this.mass * 2, this.mass * 2);  // Draw the attractor as a circle
  }
}
