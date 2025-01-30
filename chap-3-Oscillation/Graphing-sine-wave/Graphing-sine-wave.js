let angles = [];
let angleV = 0.05;
let r = 16;
function setup() {
    createCanvas(800, 600);

    let total = floor(width / (r * 2));
    for (let i = 0; i < total; i++) {
        angles[i] = 0;
    }
}
function draw() {
    background(0);

    translate(width / 2, height / 2);
    fill("yellow");
    stroke("yellow");
    for (let i = 0; i < angles.length; i++) {
        let y = map(sin(angles[i]), -1, 1, -height / 2, height / 2);
        strokeWeight(4);
        line(0, 0, 0, y);
        let x = map(i, 0, angles.length, -width / 2, width / 2);
        circle(x, y, r * 2);

        angles[i] += angleV;
    }
}