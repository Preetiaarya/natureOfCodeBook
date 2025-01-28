let oscillators = [];

function setup() {
    createCanvas(800, 500); // Creates a canvas
    for (let i = 0; i < 6; i++) { // 6 oscillators (3 legs per side)
        oscillators.push(new Oscillator());
    }
}

function draw() {
    background(220);

    // Loop through all oscillators and update/show them
    for (let i = 0; i < oscillators.length; i++) {
        oscillators[i].update();
        oscillators[i].show();
    }
}

// Oscillator Class
class Oscillator {
    constructor() {
        this.angle = createVector(); // Start at (0,0)
        this.angleVelocity = createVector(0.05, 0.05); // Fixed velocity for all legs
        this.amplitude = createVector(150, 50); // Fixed amplitude for structured motion
        // this.angleVelocity = angleVelocity; // Use fixed velocity
        // this.amplitude = amplitude; // Use fixed amplitude
    }

    update() {
        this.angle.add(this.angleVelocity); // Increase angle to oscillate
    }

    show() {
        let x = sin(this.angle.x) * this.amplitude.x;
        let y = sin(this.angle.y) * this.amplitude.y;

        push();
        translate(width / 2, height / 2 ); // Move the origin to center

        // Create symmetry for legs (left & right)
        // let xOffset = (index % 2 === 0) ? -200 : 200; // Left or right leg positioning
        // let yOffset = (index - 3) * 25; // Adjust vertical positioning for realistic legs

        stroke(0);
        strokeWeight(3);
        fill("yellow");

        // Draw leg (line and circle)
        line(0, 0, x, y);
        circle( x, y, 20);

        pop();
    }
}
