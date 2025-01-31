let angle = 0; // Initial angle for sine wave
let deltaAngle = 0.07; // Step size for increasing angle
let amplitude = 100; // Height of the wave (distance from center)

function setup() {
    createCanvas(600, 400); // Create a canvas of size 600x400
}

function draw() {
    background(220); // Set background color to light gray
    stroke(0); // Set stroke color to black

    for (let x = 0; x <= width; x += 2) { // Loop through x positions across the width of the canvas
        let y = amplitude * sin(angle); // Calculate the y-position using sine wave formula

        let r = random(255); // Generate a random red color value
        let g = random(255); // Generate a random green color value
        let b = random(255); // Generate a random blue color value
        fill(r, g, b, 150); // Set the fill color with transparency

        circle(x, y + height / 2, 35); // Draw a circle at (x, y), adjusted to center vertically

        angle += deltaAngle; // Increment the angle to shift the sine wave
    }
}
