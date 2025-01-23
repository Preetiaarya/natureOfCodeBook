// // Initialize the angle to 0 (for circular motion)
// let angle = 0; 

// // Set the initial radius of the spiral
// let r = 0;

// function setup() {
//     createCanvas(600, 400);
// }

// function draw() {
//     // Set the origin point to the center of the canvas (200, 200)
//     translate(200, 200);

//     strokeWeight(10);
//     stroke(153,0,76);

//     let x = r * cos(angle); // Calculate the x-coordinate of the point using the cosine of the angle
//     let y = r * sin(angle); // Calculate the y-coordinate of the point using the sine of the angle
//     point(x, y); // Draw a point at the calculated (x, y) position

//     // Increment the angle to make the point rotate (angle increases by 4 degrees per frame)
//     angle += 2; // (If you want smoother motion, use angle += 0.04 for radians)

//     r += 0.2;  // Decrease the radius gradually to create a spiral effect
// }


// ==================================================================
// // Initialize the angle to 0 (for circular motion)
// let angle = 0; 

// // Set the initial radius of the spiral
// let r = 150;

// function setup() {
//     createCanvas(600, 400);
// }

// function draw() {
//     // Set the origin point to the center of the canvas (200, 200)
//     translate(200, 200);

//     strokeWeight(10);
//     stroke(127, 0, 255);

//     let x = r * cos(angle); // Calculate the x-coordinate of the point using the cosine of the angle
//     let y = r * sin(angle); // Calculate the y-coordinate of the point using the sine of the angle
//     point(x, y); // Draw a point at the calculated (x, y) position

//     // Increment the angle to make the point rotate (angle increases by 4 degrees per frame)
//     angle += 2; // (If you want smoother motion, use angle += 0.04 for radians)

//     r -= 0.2;  // Decrease the radius gradually to create a spiral effect
// }



// ==================================================================


// // A Polar coordinate, radius now starts at 0 to spiral outwards
// let r = 0;
// let theta = 0;

// function setup() {
//   createCanvas(600, 400);
//   background(255);
// }

// function draw() {
//   // Polar to Cartesian conversion
//   let x = r * cos(theta);
//   let y = r * sin(theta);

//   // Draw an ellipse at x,y
//   noStroke();
//   fill(0);
//   // Adjust for center of window
//   circle(x + width / 2, y + height / 2, 16);

//   // Increment the angle
//   theta += 0.01;
//   // Increment the radius
//   r += 0.05;
// }

// ================================================================

// Initialize the angle to 0 (for circular motion)
let angle = 0; 

// Set the initial radius of the spiral
let r = 0;

function setup() {
    createCanvas(600, 400);
}

function draw() {
    // Set the origin point to the center of the canvas (200, 200)
    translate(200, 200);

    strokeWeight(10);
    stroke(153,255,51);

    let x = r * cos(angle); // Calculate the x-coordinate of the point using the cosine of the angle
    let y = r * sin(angle); // Calculate the y-coordinate of the point using the sine of the angle
    point(x, y); // Draw a point at the calculated (x, y) position

    // Increment the angle to make the point rotate (angle increases by 4 degrees per frame)
    angle += 0.04; // (If you want smoother motion, use angle += 0.04 for radians)

    r += 0.2;  // Decrease the radius gradually to create a spiral effect
}

