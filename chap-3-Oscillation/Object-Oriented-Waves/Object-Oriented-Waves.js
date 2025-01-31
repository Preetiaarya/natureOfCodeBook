// let wave1, wave2;

// function setup() {
//   createCanvas(600, 400);
//   wave1 = new Wave(50, 5, 50, color(255, 0, 0)); // Red wave with smaller amplitude
//   wave2 = new Wave(100, 4, 50, color(0, 0, 255)); // Blue wave with larger amplitude
// }

// function draw() {
//   background(220);

//   wave1.update();
//   wave1.display();

//   wave2.update();
//   wave2.display();
// }
// class Wave {
//     constructor(amplitude, period, yOffset, color) {
//       this.amplitude = amplitude; // Height of wave
//       this.period = period; // Length of one complete wave cycle
//       this.yOffset = yOffset; // Vertical shift
//       this.xOffset = 0; // Perlin noise starting point
//       this.color = color; // Wave color
//     }

//     update() {
//       this.xOffset += 0.01; // Move the wave forward
//     }

//     display() {
//       noFill();
//       stroke(this.color); // Set wave color
//       strokeWeight(3);
//       beginShape();

//       let noiseOffset = this.xOffset;
//       for (let x = 0; x <= width; x += 10) { // Loop to create wave shape
//         let y = map(noise(noiseOffset), 0, 1, height / 2 - this.amplitude, height / 2 + this.amplitude);
//         vertex(x, y + this.yOffset); // Create smooth wave with connected points
//         noiseOffset += this.period; // Increment Perlin noise offset
//       }

//       endShape();
//     }
//   }

//   ===============================================================

// // Two wave objects
// let wave0, wave1;

// function setup() {
//     createCanvas(800, 400);
//     // Initialize a wave with starting point, width, amplitude, and period
//     wave0 = new Wave(50, 75, 200, 20, 800);
//     wave1 = new Wave(400, 120, 400, 40, 280);
// }

// function draw() {
//     background(220);

//     // Update and display waves
//     wave0.update();
//     wave0.show();

//     wave1.update();
//     wave1.show();
// }
// class Wave {
//     constructor(x, y, w, amplitude, period) {
//         this.xspacing = 8; // How far apart should each horizontal position be spaced
//         this.w = w; // Width of entire wave

//         this.origin = createVector(x, y); // Where does the wave's first point start
//         this.theta = 0.0; // Start angle at 0
//         this.amplitude = amplitude; // Height of wave

//         this.period = period; // How many pixels before the wave repeats
//         this.dx = (TWO_PI / this.period) * this.xspacing; // Value for incrementing X, to be calculated as a function of period and xspacing
//         this.yvalues = new Array(floor(this.w / this.xspacing)); // Using an array to store height values for the wave (not entirely necessary)
//     }

//     update() {
//         this.theta += 0.02; // Increment theta (try different values for 'angular velocity' here

//         // For every x value, calculate a y value with sine function
//         let x = this.theta;
//         for (let i = 0; i < this.yvalues.length; i++) {
//             this.yvalues[i] = sin(x) * this.amplitude;
//             x += this.dx;
//         }
//     }

//     show() {
//         // A simple way to draw the wave with an ellipse at each position
//         for (let x = 0; x < this.yvalues.length; x++) {
//             stroke(0);
//             fill(0,50);
//             circle(this.origin.x + x * this.xspacing,this.origin.y + this.yvalues[x],48);
//         }
//     }
// }

// ==============================================================================

// Two wave objects
let wave0, wave1;

function setup() {
    createCanvas(800, 400); // Create a canvas of 800x400 pixels
    // Initialize wave0 with x, y position, width, amplitude, and period
    wave0 = new Wave(50, 75, 200, 20, 800);
    // Initialize wave1 with x, y position, width, amplitude, and period
    wave1 = new Wave(400, 120, 400, 40, 280);
}

function draw() {
    background(220); // Set a light gray background

    // Update and display wave0
    wave0.update();
    wave0.show();

    // Update and display wave1
    wave1.update();
    wave1.show();
}

// Wave class to encapsulate wave properties and behavior
class Wave {
    constructor(x, y, w, amplitude, period) {
        this.xspacing = 8; // Horizontal distance between each wave point
        this.w = w; // Width of the entire wave

        this.origin = createVector(x, y); // Starting point of the wave
        this.theta = 0.0; // Start angle at 0
        this.amplitude = amplitude; // Height of the wave

        this.period = period; // Period (the horizontal distance before the wave repeats)
        this.dx = (TWO_PI / this.period) * this.xspacing; // Calculate increment value for x-axis
        this.yvalues = new Array(floor(this.w / this.xspacing)); // Array to store y-values (wave heights)
    }

    update() {
        this.theta += 0.02; // Increment angle theta for wave motion

        // Calculate the y-values for each x-coordinate of the wave
        let x = this.theta;
        for (let i = 0; i < this.yvalues.length; i++) {
            this.yvalues[i] = sin(x) * this.amplitude; // Use sine function to determine wave height
            x += this.dx; // Increment x position based on dx
        }
    }

    show() {
        // Draw the wave using circles at each position based on the y-values
        for (let x = 0; x < this.yvalues.length; x++) {
            stroke(0); // Set stroke color to black
            let r = random(255); // Generate random red value
            let g = random(255); // Generate random green value
            let b = random(255); // Generate random blue value
            fill(r, g, b, 150); // Set fill color with transparency
            // Draw circle at the calculated position
            circle(this.origin.x + x * this.xspacing, this.origin.y + this.yvalues[x], 48);
        }
    }
}

