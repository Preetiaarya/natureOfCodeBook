let angle = 0; // Initialize the angle for the sine function

function setup() {
    createCanvas(600, 400); // Create a 600x400 pixel canvas
}

function draw() {
    background(220); // Set a light gray background

    // Map the sine function output (-1 to 1) to a range of x-coordinates on the canvas
    let x = map(sin(angle), -1, 1, 50, width - 50);

    // Draw the oscillating circle
    stroke(0);  // Set the stroke color to black (0 represents black in grayscale)

    strokeWeight(2); // Set the stroke weight (line thickness) to 2 pixels

    line(width / 2, height / 2, x, height / 2); // Draw a line from the center of the canvas to the current x position, maintaining the same vertical position

    fill(0); // Light blue color
    noStroke(); // No border around the circle
    circle(x, height / 2, 50); // Circle at the middle height

    // Increment the angle to progress the oscillation
    angle += 0.05;
}
