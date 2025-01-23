
let carX = 15;  //Represents the car's horizontal position on the screen.
function setup() {
    createCanvas(600, 400);
}
function draw() {
    background(220);

    rect(carX, 200, 80, 50);
    ellipse(carX, 250, 35, 35);
    ellipse(carX + 75, 250, 35, 35);

    // Check if the LEFT arrow key is pressed
    if (keyCode == LEFT_ARROW) {
        carX -= 4;  // Move the car left by reducing its x-coordinate
    }

    // Check if the RIGHT arrow key is pressed
    if (keyCode == RIGHT_ARROW) {
        carX += 4;  // Move the car right by increasing its x-coordinate
    }

}