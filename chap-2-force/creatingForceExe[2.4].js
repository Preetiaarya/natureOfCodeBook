let mover;

function setup() {
    createCanvas(600, 600);
    mover = new Mover(300, 300, 20);
}

function draw() {
    background(255, 102, 102);

    mover.update();
    mover.checkEdges();
    mover.show();
}

class Mover {
    constructor(x, y, radius) {
        this.pos = createVector(x, y);
        this.vel = createVector(2, 3);
        this.radius = radius;
    }

    update() {
        this.pos.add(this.vel);
    }

    checkEdges() {
        // Right edge
        if (this.pos.x + this.radius > width) {
            this.pos.x = width - this.radius;
            this.vel.x *= -1;
        }
        // Left edge
        if (this.pos.x - this.radius < 0) {
            this.pos.x = this.radius;
            this.vel.x *= -1;
        }
        // Bottom edge
        if (this.pos.y + this.radius > height) {
            this.pos.y = height - this.radius;
            this.vel.y *= -1;
        }
        // Top edge
        if (this.pos.y - this.radius < 0) {
            this.pos.y = this.radius;
            this.vel.y *= -1;
        }
    }

    show() {
        fill("black");
        noStroke();
        circle(this.pos.x, this.pos.y, this.radius * 2);
    }
}
