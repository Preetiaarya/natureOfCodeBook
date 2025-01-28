let oscillators = []; // An empty array to store multiple oscillator objects.

function setup() {
    createCanvas(1000, 600); // Creates a 1000x600 pixel canvas.

    // Initialize and create multiple oscillators
    for (let i = 0; i < 20; i++) { 
        oscillators.push(new Oscillator()); // Adds a new Oscillator object to the array.
    }
}

function draw() {
    background(220); // Clears the canvas with a light gray background.

    // Loop through all oscillators and update and display them.
    for (let i = 0; i < oscillators.length; i++) {
        oscillators[i].update(); // Updates the oscillator’s position (angle change).
        oscillators[i].show(); // Displays the oscillator on the canvas.
    }
}

// Oscillator class to create oscillating motion.
class Oscillator {
    constructor() {
        this.angle = createVector(); // Creates a 2D vector to store x and y angles.
        
        // Random angular velocity for oscillation in both x and y directions.
        this.angleVelocity = createVector(random(-0.05, 0.05), random(-0.05, 0.05));

         //   this.amplitude = createVector(
    //     random(20, width / 2),
    //     random(20, height / 2)   // random amplitudes
    //   );

    // this.amplitude = createVector(300);  //x-axis-only oscillation

        // Sets the amplitude (range of oscillation) in x and y directions.
        this.amplitude = createVector(300, 200); // X oscillates within 300 pixels, Y within 200 pixels.
    }
  
    update() {
        this.angle.add(this.angleVelocity); // Increases the angle to create motion.
    }
  
    show() {
        // Calculates x and y positions using the sine function.
        let x = sin(this.angle.x) * this.amplitude.x;
        let y = sin(this.angle.y) * this.amplitude.y;
  
        push(); // Saves the current transformation state.
        translate(width / 2, height / 2); // Moves the origin to the center of the canvas.

        stroke(0); // Sets the stroke color to black.
        strokeWeight(2); // Sets the thickness of the stroke lines.
        fill("green"); // Sets the fill color of the circle to green.

        line(0, 0, x, y); // Draws a line from the center to the oscillating point.
        circle(x, y, 35); // Draws a circle at the oscillating point.

        pop(); // Restores the previous transformation state.
    }
}
