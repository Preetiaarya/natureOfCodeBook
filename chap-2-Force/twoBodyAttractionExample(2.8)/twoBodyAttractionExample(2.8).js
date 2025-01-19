let bodyA;
let bodyB;

let G = 1;

function setup() {
    createCanvas(600, 400);
    bodyA = new Body(320, 40);
    bodyB = new Body(320, 200);
    bodyA.velocity = createVector(1, 0);
    bodyB.velocity = createVector(-1, 0);
}

function draw() {
    background(10,0);

    bodyA.attract(bodyB);
    bodyB.attract(bodyA);

    bodyA.update();
    bodyA.show();
    bodyB.update();
    bodyB.show();
} 
class Body {
    constructor(x, y) {
        this.position = createVector(x, y);
        this.velocity = createVector(0, 0);
        this.acceleration = createVector(0, 0);
        this.mass = 8;
        this.r = sqrt(this.mass) * 2;
    }

    attract(body) {
        let force = p5.Vector.sub(this.position, body.position);
        let d = constrain(force.mag(), 5, 25);
        let G = 1;
        let strength = (G * (this.mass * body.mass)) / (d * d);
        force.setMag(strength);
        body.applyForce(force);
    }

    applyForce(force) {
        let f = force.copy().div(this.mass);
        this.acceleration.add(f);
    }
    update() {
        this.velocity.add(this.acceleration);
        this.position.add(this.velocity);
        this.acceleration.set(0, 0);
    }
    show() {
        stroke(0);
        strokeWeight(2);
        fill(127, 100);
        circle(this.position.x, this.position.y, this.r * 4);
    }
}
