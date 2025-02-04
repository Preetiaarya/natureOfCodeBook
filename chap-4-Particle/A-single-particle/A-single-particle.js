let system;

function setup() {
    createCanvas(800, 400);
    system = new Particlesystem();
}
function draw() {
    background(220);

    system.update();
    system.show();
}

class Particlesystem {
    constructor(x, y) {
        this.position = createVector(x, y);
        this.velocity = createVector();
        this.acceleration = createVector();
    }
    update() {
        this.position.add(this.velocity);
        this.velocity.add(this.acceleration);
        this.acceleration.mult(0);
    }
    show() {
        stroke(0);
        translate(400,200);
        fill(0);
        circle(this.position.x, this.position.y, 20);
    }
}