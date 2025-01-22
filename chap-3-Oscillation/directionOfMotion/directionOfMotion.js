let mover; // Declare a variable to hold the Mover object


function setup() {
    createCanvas(600, 400);
    mover = new Mover(); // Instantiate the Mover object
}

// The draw() function runs continuously (frame by frame)
function draw() {
    background(220);

    mover.update();
    mover.checkEdges();
    mover.display();

    class Mover {
        // Constructor initializes the mover's position, velocity, acceleration, and other properties
        constructor() {
            this.position = createVector(width / 2, height / 2);
            this.velocity = createVector(0, 0);
            this.acceleration = 0; // Initial acceleration (set to 0)
            this.topspeed = 4; // Maximum speed of the mover
            this.xoff = 500; // X offset for noise 
            this.yoff = 0; // Y offset for noise
            this.r = 10; // Radius of the mover (though not used in the code for collision or appearance)
        }

        // The update() function updates the position of the mover based on the mouse's position
        update() {
            let mouse = createVector(mouseX, mouseY);
            let dir = p5.Vector.sub(mouse, this.position); // Calculate the direction vector from the mover to the mouse
            dir.normalize();
            dir.mult(0.5);

            this.acceleration = dir; // Set the acceleration of the mover to the direction vector

            this.velocity.add(this.acceleration);
            this.velocity.limit(this.topspeed); // Limit the velocity to the maximum speed
            this.position.add(this.velocity);
        }


        display() {
            let angle = this.velocity.heading(); // Get the angle of the velocity vector to rotate the rectangle

            stroke(0);
            strokeWeight(2);
            fill(255);

            push(); // Save the current transformation matrix

            rectMode(CENTER); // Set the rectangle mode to center, so it rotates around its center

            translate(this.position.x, this.position.y); // Move the origin to the mover's position
            rotate(angle); // Rotate the rectangle based on the angle of velocity
            rect(0, 0, 40, 20);

            pop(); // Restore the previous transformation matrix
        }

        // The checkEdges() function ensures that if the mover goes off the canvas, it wraps around
        checkEdges() {
            if (this.position.x >= width) { // If the mover goes beyond the right edge
                this.position.x = 0; // Wrap it to the left edge
            } else if (this.position.x <= 0) { // If the mover goes beyond the left edge
                this.position.x = width; // Wrap it to the right edge
            }

            if (this.position.y >= height) { // If the mover goes beyond the bottom edge
                this.position.y = 0; // Wrap it to the top edge
            } else if (this.position.y <= 0) { // If the mover goes beyond the top edge
                this.position.y = height; // Wrap it to the bottom edge
            }
        }
    }
}
