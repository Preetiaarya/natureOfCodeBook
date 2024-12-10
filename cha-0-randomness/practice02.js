let rectY = 600; // Initial Y position of the rect
let speed = 3; // Speed of the rect
let totalRect = 5;

function setup() {
    createCanvas(1000, 600); // Create a canvas of 1000x600
}

function draw() {
    background(204, 0, 102); // background color

    textSize(32);
    textAlign(CENTER, CENTER);
    text("-: Moving rect upwards :-", 500, 60); // add text

    fill(255, 153, 51);
    // Set rectangle color
    rect(450, rectY, 20, 50); // Draw the rectangle

    rectY -= speed; // Move the rectangle upwards (height, 0)

    // If the rectY < 0 then rectY restart height
    if (rectY < 0) {
        rectY = height;
    }
}