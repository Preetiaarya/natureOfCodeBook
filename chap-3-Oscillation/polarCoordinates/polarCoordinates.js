let angle = 0; // Global angle variable

function setup() {
    createCanvas(600, 400); // Set up the canvas
}

function draw() {
    background(204, 255, 255); // Light blue background

    // Circle setup
    stroke(255, 153, 51); // Orange stroke for the circle
    strokeWeight(4); // Thin stroke for the circle border
    translate(200, 200); // Move the origin to (200, 200)
    let r = 100; // Radius of the circle
    circle(0, 0, r * 2); // Draw the circle

    // Moving point setup
    strokeWeight(32); // Thick stroke for the moving point
    stroke(153, 255, 153); // Green stroke for the point
    let x = r * cos(angle); // Calculate x-coordinate based on angle
    let y = r * sin(angle); // Calculate y-coordinate based on angle
    point(x, y); // Draw the point

    angle += 0.01; // Increment the angle for animation
}
