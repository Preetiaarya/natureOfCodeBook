let angle = 0; // Initializing the angle variable, which will control the oscillation.
let angleVelocity = 0.05; // This determines how fast the angle changes (speed of oscillation).

function setup() {
    createCanvas(600, 400); // Creates a 600x400 pixel canvas.
}

function draw() {
    background(220); // Sets a light gray background 

    let amplitude = 100; // Maximum displacement (height) of the oscillation.
    let y = amplitude * sin(angle); // Calculates the vertical position using a sine function.
    angle += angleVelocity; // Increases the angle over time to create oscillation.

    translate(width / 2, height / 2); // Moves the origin to the center of the canvas.
    
    stroke(0); 
    strokeWeight(2);
    fill("pink"); // Fills the circle with pink color.

    line(0, 0, 0, y); // Draws a line from the center to the oscillating y position.
    circle(0, y, 35); // Draws a circle at the end of the oscillating line.
}
