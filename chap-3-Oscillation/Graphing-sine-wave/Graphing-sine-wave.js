let angles = []; // Array to store the angles for each point
let angleV = 0.05; // Angle velocity (speed of oscillation)
let r = 16; // Radius of the circles

function setup() {
    createCanvas(800, 600); // Create a canvas of 800x600 pixels

    let total = floor(width / (r * 2)); // Determine how many points fit across the width
    for (let i = 0; i < total; i++) {
        angles[i] = 0; // Initialize all angles to 0
    }
}

function draw() {
    background(0); // Set background color to black

    translate(width / 2, height / 2); // Move the origin to the center of the canvas
    fill("yellow"); // Set fill color to yellow
    stroke("yellow"); // Set stroke color to yellow

    for (let i = 0; i < angles.length; i++) {
        let y = map(sin(angles[i]), -1, 1, -height / 2, height / 2); // Map sine value to vertical position
        let x = map(i, 0, angles.length, -width / 2, width / 2); // Map index to horizontal position

        strokeWeight(4); // Set line thickness
        line(x, 0, x, y); // Draw vertical line from the center to the current point

        circle(x, y, r * 2); // Draw a circle at the calculated (x, y) position

        angles[i] += angleV; // Increment the angle to animate motion
    }
}


// ==============================================================================

// let angles = []; // Array to store angles
// let angleV = []; // Angle velocity (speed of oscillation)
// let r = 16; // Radius of the circles

// function setup() {
//     createCanvas(800, 600); // Create a canvas

//     let total = floor(width / (r * 2)); // Number of wave points
//     angles = new Array(total).fill(0); // Initialize angles array with zeros

//     for (let i = 0; i < total; i++) {
//         angleV[i] = random(-0.1, 0.1); // Random velocity for each wave point
//     }
// }

// function draw() {
//     background(0); // Black background
//     translate(width / 2, height / 2); // Move origin to center
//     fill(153,0,153); // pink fill for circles
//     stroke(153,0,153); // pink stroke

//     for (let i = 0; i < angles.length; i++) {
//         let y = map(sin(angles[i]), -1, 1, -height / 2, height / 2); // Compute vertical position
//         let x = map(i, 0, angles.length, -width / 2, width / 2); // Compute horizontal position

//         strokeWeight(4);
//         line(x, 0, x, y); // Corrected: Lines now appear spread across the width

//         circle(x, y, r * 2); // Draw circles

//         angles[i] += angleV[i]; // Update angles for animation
//     }
// }


// =========================================================================

// // Arrays to store angles and their velocity (speed of change)
// let angles = [];
// let angleV = [];
// let r = 7; // Radius of each point in the wave

// function setup() {
//     createCanvas(600, 400); // Creates a 600x400 pixel canvas

//     let total = floor(width / (r * 2)); // Determines the number of points based on canvas width
//     for (let i = 0; i < total + 1; i++) {
//         angles[i] = map(i, 0, total, 0, 2 * TWO_PI); // Initialize angles from 0 to TWO_PI over the total number of points
//         angleV[i] = 0.01 + i / 100; // Set different speeds for each point in the wave
//     }
// }

// function draw() {
//     background(0); // Clear the screen with black background
//     translate(300, 200); // Move the origin to the center of the canvas
//     noFill(); // Do not fill the shape
//     stroke(0, 204, 204); // Sets the stroke color to cyan
//     beginShape(); // Start defining a shape

//     for (let i = 0; i < angles.length; i++) {
//         let y = map(sin(angles[i]), -1, 1, -200, 200); // Map the sine function output to the wave height (-200 to 200)
//         strokeWeight(4); // Set thickness of the stroke
//         let x = map(i, 0, angles.length, -300, 300); // Map the index to x-coordinates (-300 to 300)

//         vertex(x, y); // Create a vertex at (x, y)
//         angles[i] += angleV[i]; // Update the angle to animate the wave
//     }
//     endShape(); // Complete the shape
// }


// ===========================================================================