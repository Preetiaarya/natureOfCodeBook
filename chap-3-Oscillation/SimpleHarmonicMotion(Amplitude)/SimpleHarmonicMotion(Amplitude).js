
function setup() {
    createCanvas(600, 400);  // Create a canvas of size 600x400 pixels.
}

function draw() {
    background(220);  // Set a light gray background for the canvas.

    let period = 120;  // Local variable for the oscillation period.
    let amplitude = 200;  //Maximum displacement of the oscillating object.

    // (Line 12) Calculate the horizontal position using the formula for simple harmonic motion.
    let x = amplitude * sin(TWO_PI * frameCount / period);

    stroke(0);  // Set the stroke color to black for the line and circle outline.
    fill(127);  // Fill the circle with a medium gray color.
    translate(width / 2, height / 2);  // (Line 17) Move the origin to the center of the canvas.

    line(0, 0, x, 0);  // Draw a line from the center to the current horizontal position.
    circle(x, 0, 48);  // Draw a circle at the calculated position with a diameter of 48 pixels.
}

  