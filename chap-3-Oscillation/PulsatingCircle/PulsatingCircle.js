let angle = 0; // Initialize a variable to keep track of the angle

// The setup function is called once when the program starts
function setup() {
    createCanvas(600, 600); // Create a 600x600 pixel canvas
}

// The draw function is called continuously to create the animation
function draw() {
    background(0, 10);  // Set a translucent black background to create a fading trail effect
    translate(300, 300); // Move the origin of the canvas to the center (300, 300)

    fill(252, 238, 33); // Set the fill color for the circle (bright yellow)

    // Calculate the radius of the circle using a sine wave
    // This makes the circle grow and shrink cyclically
    let r = sin(angle) * 200;

    circle(0, 0, r * 2); // Draw the circle at the origin with a diameter of 2 * r

    // Increment the angle to update the sine wave for the next frame
    angle += 0.1;
}
