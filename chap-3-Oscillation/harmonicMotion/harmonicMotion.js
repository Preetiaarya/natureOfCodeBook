let angle = 0;
function setup() {
    createCanvas(400, 400);
}
function draw() {
    background(0, 10);
    translate(200, 200);
    fill(252,238,33);
    let r = sin(angle) * 200;
    circle(0, 0, r * 2);

    angle += 0.1;
}