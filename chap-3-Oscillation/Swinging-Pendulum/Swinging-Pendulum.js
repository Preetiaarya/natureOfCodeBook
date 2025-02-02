let angle; // Angle of the pendulum
let bob; // Position vector of the pendulum bob
let len; // Length of the pendulum rod
let origin; // Origin point from where the pendulum is hanging

function setup() {
    createCanvas(600, 400); // Create a canvas of 600x400 pixels

    origin = createVector(300, 0); // Set the origin at (300, 0)
    angle = PI / 4; // Initial angle of the pendulum
    bob = createVector(); // Initialize the bob position vector
    len = 300; // Set the length of the pendulum rod
}

function draw() {
    background(220); // Set background color to light gray (220)

    angle += 0.01; // Increment the angle to create motion

    // Calculate the new position of the bob using trigonometry
    bob.x = len * sin(angle) + origin.x;
    bob.y = len * cos(angle) + origin.y;

    stroke(0); // Set stroke color to black
    strokeWeight(4); // Set line thickness
    fill(127); // Set fill color to gray for the bob

    // Draw the pendulum rod
    line(origin.x, origin.y, bob.x, bob.y);

    // Draw the pendulum bob as a circle
    circle(bob.x, bob.y, 50);
}
