
let carX = 15;  //Represents the car's horizontal position on the screen.
function setup() {
    createCanvas(600, 400);
}
function draw() {
    background(255,255,204);
     
    fill(255,0,127);  //Set the fill color to pink (RGB: 255, 0, 127) for the car body
    stroke(0);
    strokeWeight(2);
    rect(carX, 200, 80, 50); //Draw the car body as a rectangle

    fill(102,255,178); //Set the fill color to light green (RGB: 102, 255, 178) for the wheels
    ellipse(carX, 250, 35, 35);  //Draw the left wheel as a ellipse
    ellipse(carX + 75, 250, 35, 35); //Draw the right wheel as a ellipse

    // Check if the LEFT arrow key is pressed
    if (keyCode == LEFT_ARROW) {
        carX -= 4;  // Move the car left by reducing its x-coordinate
    }

    // Check if the RIGHT arrow key is pressed
    if (keyCode == RIGHT_ARROW) {
        carX += 4;  // Move the car right by increasing its x-coordinate
    }

    // Check if the car goes off the screen horizontally
    if (carX > width || carX < 0) {
        carX = width; // If car goes beyond the right edge, reset to the left edge
        carX = 0;     // If car goes beyond the left edge, reset to the right edge
    }


}