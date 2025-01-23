// Initialize the angle to 0 (for circular motion)
let angle = 0; 

// Set the initial radius of the spiral
let r = 150;

function setup() {
    createCanvas(600, 400);
}

function draw() {
    // Set the origin point to the center of the canvas (200, 200)
    translate(200, 200);

    strokeWeight(10);
    stroke(127, 0, 255);

    let x = r * cos(angle); // Calculate the x-coordinate of the point using the cosine of the angle
    let y = r * sin(angle); // Calculate the y-coordinate of the point using the sine of the angle
    point(x, y); // Draw a point at the calculated (x, y) position

    // Increment the angle to make the point rotate (angle increases by 4 degrees per frame)
    angle += 4; // (If you want smoother motion, use angle += 0.04 for radians)

    r -= 0.2;  // Decrease the radius gradually to create a spiral effect
}
