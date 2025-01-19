// let vector;

let topcolor, bottomcolor;

function setup() {
    createCanvas(windowWidth, windowHeight);

    topcolor = color("aqua");
    bottomcolor = color("orange");

    for (let y = 0; y < height; y++){

    n = map(y, 0, height, 0, 1);

    let newcolor = lerpColor(topcolor, bottomcolor, n);

    stroke(newcolor);
    strokeWeight(2);
    // translate(width / 2, height / 2);
    
    line(0, y, width, y);
    }
}
function draw() {
    let vector = createVector(mouseX, mouseY);
    line(400, 400, mouseX, mouseY);
}