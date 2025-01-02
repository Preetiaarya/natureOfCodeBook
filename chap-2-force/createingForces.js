let mover;

function setup() {
    createCanvas(1000, 600);

    mover = new Mover(400, 200, 4);
}

function draw() {
    background("red");

    let gravity = createVector(0, 0.1);
    mover.applyForce(gravity);

    mover.update();
    mover.show();
    mover.edges();
}

class Mover {
    constructor(x, y, mass) {
        this.pos = createVector(x, y);
        this.vel = createVector(0, 0);
        this.acc = createVector(0, 0);
        this.mass = mass;
    }

    applyForce(force) {
        let f = p5.Vector.div(force, this.mass);
        this.acc.add(f);
    }

    update() {
        this.pos.add(this.vel);
        this.vel.add(this.acc);
        this.acc.set(0, 0);
    }
    show() {
        stroke("white");
        fill("black");
        circle(this.pos.x, this.pos.y, this.mass * 15);
    }

    edges() {
        if (this.pos.x >= width || this.pos.x <= 0) {
            this.vel.mult(-1);
        }
        else if (this.pos.y >= height || this.pos.y <= 0) {
            this.vel.mult(-1);
        }
    }
}

