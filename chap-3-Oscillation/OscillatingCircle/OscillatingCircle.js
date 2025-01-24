let angle = 0; // Initialize the angle for the sine function

function setup() {
    createCanvas(600, 400); // Create a 600x400 pixel canvas
}

function draw() {
    background(220); // Set a light gray background

    // Map the sine function output (-1 to 1) to a range of x-coordinates on the canvas
    let x = map(sin(angle), -1, 1, 50, width - 50);

    // Draw the oscillating circle
    fill(100, 150, 255); // Light blue color
    noStroke(); // No border around the circle
    circle(x, height / 2, 50); // Circle at the middle height
}