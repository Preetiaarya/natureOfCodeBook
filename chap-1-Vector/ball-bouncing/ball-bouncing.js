let position;
let velocity;

function setup() {
    createCanvas(800, 800);

    position = createVector(100, 100);
    velocity = createVector(2.5, 4);
}

function draw() {
    background("pink");

    position.add(velocity);

    if (position.x > width || position.x < 0) {
        velocity.x = velocity.x * - 1;

    }
    if (position.y > height || position.y < 0) {
        velocity.y = velocity.y * - 1;
    }
    fill("black");
    stroke("white");
    strokeWeight(4);
    circle(position.x, position.y, 50);
}