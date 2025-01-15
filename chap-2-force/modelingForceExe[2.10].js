let airplane;  // Airplane object for the simulation

function setup() {
    createCanvas(640, 440);  // Set up canvas size
    airplane = new Airplane(width / 2, height / 2, 100, 10);  // Initialize airplane in the center of the canvas
}

function draw() {
    background(255);  // Clear the background each frame

    airplane.update();  // Update airplane's position, velocity, and forces
    airplane.show();    // Display the airplane
    airplane.checkEdges();  // Prevent airplane from going out of bounds
}

class Airplane {
    constructor(x, y, mass, wingArea) {
        this.position = createVector(x, y);  // Initial position of the airplane
        this.velocity = createVector(0, 0);  // Initial velocity (stationary)
        this.acceleration = createVector(0, 0);  // Initial acceleration
        this.mass = mass;  // Mass of the airplane
        this.wingArea = wingArea;  // Wing area (for calculating lift and drag)
        this.angleOfAttack = 10;  // Initial angle of attack in degrees
        this.maxSpeed = 10;  // Maximum speed
        this.liftCoefficient = 1.5;  // Lift coefficient
        this.dragCoefficient = 0.05;  // Drag coefficient
    }

    applyForce(force) {
        let f = p5.Vector.div(force, this.mass);  // Scale force by mass (Newton's second law)
        this.acceleration.add(f);  // Add the scaled force to acceleration
    }

    update() {
        let dragForce = this.calculateDrag();  // Calculate drag force
        let liftForce = this.calculateLift();  // Calculate lift force

        this.applyForce(dragForce);  // Apply drag force
        this.applyForce(liftForce);  // Apply lift force

        this.velocity.add(this.acceleration);  // Update velocity
        this.velocity.limit(this.maxSpeed);  // Limit the maximum velocity
        this.position.add(this.velocity);  // Update position
        this.acceleration.mult(0);  // Reset acceleration to 0 after each update
    }

    show() {
        stroke(0);  // Black outline
        fill(175);  // Gray fill
        push();  // Start transformation
        translate(this.position.x, this.position.y);  // Move the coordinate system to the airplane's position
        rotate(radians(this.angleOfAttack));  // Rotate according to the angle of attack
        rect(-20, -10, 40, 20);  // Draw airplane body
        pop();  // Restore transformation
    }

    checkEdges() {
        if (this.position.y > height) {  // Check if airplane is below the bottom edge
            this.position.y = height;  // Keep the airplane at the bottom
            this.velocity.y *= -0.9;  // Reflect and reduce vertical velocity
        }
        if (this.position.x > width || this.position.x < 0) {  // Check if airplane is off the edges
            this.velocity.x *= -0.9;  // Reflect and reduce horizontal velocity
        }
    }

    calculateDrag() {
        let speed = this.velocity.mag();  // Magnitude of the velocity
        let dragMagnitude = 0.5 * this.dragCoefficient * this.wingArea * speed * speed;  // Drag force magnitude
        let dragForce = this.velocity.copy();  // Direction of drag is opposite to velocity
        dragForce.mult(-1);  // Invert direction
        dragForce.setMag(dragMagnitude);  // Set magnitude of the drag force
        return dragForce;  // Return the drag force vector
    }

    calculateLift() {
        let speed = this.velocity.mag();  // Magnitude of the velocity
        let angleInRadians = radians(this.angleOfAttack);  // Convert angle to radians
        let liftMagnitude = 0.5 * this.liftCoefficient * this.wingArea * speed * speed * Math.sin(angleInRadians);  // Lift magnitude
        
        // Lift force acts vertically upwards (y-axis)
        let liftForce = createVector(0, -liftMagnitude);  // Lift acts vertically upward
        return liftForce;  // Return the lift force vector
    }
}
