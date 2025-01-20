// Initialize the angle variable for rotation
let angle = 0;

function setup() {
    createCanvas(400, 400);

    // Set the angle mode to radians (default is degrees)
    angleMode(RADIANS);
}
function draw() {
    background(220,0);
    stroke(0);
    fill(255);

    // Set the rectangle mode to CENTER, meaning the position (x, y) will be the center of the rectangle
    rectMode(CENTER);

    // Move the origin of the canvas to the center of the canvas (200, 200)
    translate(200, 200);

    // Rotate the canvas by the current angle
    rotate(angle);

    // Draw a rectangle centered at (0, 0) with a width of 250 and a height of 2
    rect(0, 0, 250, 2);

    // Draw a circle to the right of the rectangle at (130, 0) with a diameter of 25
    circle(130, 0, 25);

    // Draw a circle to the left of the rectangle at (-130, 0) with a diameter of 25
    circle(-130, 0, 25);

    // Increase the angle by 5 radians to rotate the shapes in the next frame
    angle += 5;
}
