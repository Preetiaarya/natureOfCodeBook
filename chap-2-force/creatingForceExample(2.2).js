let moverA;
let moverB;

function setup() {
    createCanvas(600, 600);

    moverA = new Mover(200, 200, 2);
    moverB = new Mover(300, 200, 2);

}

function draw() {
    background(204, 204, 255);

    let gravity = createVector(0, 0.1);
    moverA.applyForce(gravity);
    moverB.applyForce(gravity);

    if (mouseIsPressed) {
        let wind = createVector(0.1, 0);
        moverA.applyForce(wind);
        moverB.applyForce(wind);
    }

    moverA.checkEdges();
    moverA.update();
    moverA.show();

    moverB.checkEdges();
    moverB.update();
    moverB.show();
}

class Mover {
    constructor(x, y, m) {
        this.pos = createVector(x, y);
        this.vel = createVector(0, 0);
        this.acc = createVector(0, 0);
        this.mass = m;
    }

    applyForce(force) {
        let f = p5.Vector.div(force, this.mass);
        this.acc.add(f);
    }

    update() {
        this.vel.add(this.acc);
        this.pos.add(this.vel);
        this.acc.set(0, 0);
    }

    show() {
        fill("black");
        circle(this.pos.x, this.pos.y, this.mass * 10);
    }

    checkEdges() {
        if (this.pos.y <= 0 || this.pos.y >= height) {
            this.vel.y *= -1;
        }
        else if (this.pos.x <= 0 || this.pos.x >= width) {
            this.vel.x *= -1;
        }

    }
}
