// let vector;

let topcolor, bottomcolor;

function setup() {
    createCanvas(windowWidth, windowHeight);

    topcolor = color("yellow");
    bottomcolor = color("orange");

    for (let y = 0; y < height; y++){

    n = map(y, 0, height, 0, 1);

    let newcolor = lerpColor(topcolor, bottomcolor, n);

    stroke(newcolor);
    strokeWeight(2);

    line(0, y, width, y);
    }
}
function draw() {
    let vector = createVector(mouseX, mouseY);
    fill("black");
    line(200, 200, mouseX, mouseY);
}