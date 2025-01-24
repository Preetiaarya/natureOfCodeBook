let angle = 0; // start the current angle of the moving point

function setup() {
    createCanvas(600, 400); // Set up the canvas
}

function draw() {
    background(204, 255, 255); 

    // Circle setup
    stroke(255, 153, 51); 
    strokeWeight(4); 
    translate(200, 200); // Move the origin to (200, 200) center
    let r = 100; // Radius of the circle
    circle(0, 0, r * 2); // Draw the circle

    // Moving point setup
    strokeWeight(32); 
    stroke(153, 0,76); 
    let x = r * cos(angle); // Calculate x-coordinate based on angle
    let y = r * sin(angle); // Calculate y-coordinate based on angle
    point(x, y); // Draw the point

    angle += 0.01; // Increment the angle for animation
}
