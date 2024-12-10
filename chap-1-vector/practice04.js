
let mover;

function setup() {
    createCanvas(800, 800);
    background(255, 153, 153);

    mover = new Mover();
}
function draw() {
    background(255, 153, 153);

    mover.update();
    mover.show();
}
class Mover {
    constructor() {
        this.position = createVector(width / 2, height / 2);
        this.velocity = createVector();
        this.acceleration = createVector();
        this.topspeed = 5;
    }
    update() {
        let mouse = createVector(mouseX, mouseY);
        this.acceleration = p5.Vector.sub(mouse, this.position);
        this.acceleration.setMag(5);

        this.velocity.add(this.acceleration);
        this.velocity.limit(this.topspeed);

        // Update position based on velocity
        this.position.add(this.velocity);
    }
    show() {
        stroke("white");
        strokeWeight(5);
        fill("white");
        ellipse(this.position.x, this.position.y, 50);
    }
}