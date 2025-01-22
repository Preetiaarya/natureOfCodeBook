let mover; // Declare a variable to hold the Mover object


function setup() {
    createCanvas(600, 400);
    mover = new Mover(); // Instantiate the Mover object
}

// The draw() function runs continuously (frame by frame)
function draw() {
    background(220);

    mover.update(); // Update the position of the mover based on the current acceleration
    mover.show();   // Display the mover on the canvas
}

class Mover {
    // Constructor initializes the mover's position, velocity, acceleration, and topspeed
    constructor() {
        this.position = createVector(width / 2, height / 2); 
        this.velocity = createVector(); 
        this.acceleration = createVector();
        this.topspeed = 4;
    }

    // The update() function updates the position of the mover
    update() {
        let mouse = createVector(mouseX, mouseY); 
        let direction = p5.Vector.sub(mouse, this.position); // Calculate the direction from the mover to the mouse

        direction.normalize(); 
        direction.mult(0.2);

        this.acceleration = direction; // Set the mover's acceleration to the calculated direction

        this.velocity.add(this.acceleration);
        this.velocity.limit(this.topspeed); // Limit the velocity to the maximum speed
        this.position.add(this.velocity); 

    }

    show() {
        stroke(0); 
        strokeWeight(2); 
        fill(255); 
        circle(this.position.x, this.position.y, 52); // Draw the circle at the current position with diameter 52
    }
}
