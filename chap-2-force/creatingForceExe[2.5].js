let movers = [];

function setup() {
    createCanvas(600, 600);
    for (let i = 0; i < 5; i++) {
        movers.push(new Mover(random(width), random(height), random(10, 20)));
    }
}

function draw() {
    background(255, 255, 51);
    // background(220,0);

    for (let mover of movers) {
        let wind = calculateWind(mover);
        mover.applyForce(wind);

        mover.update();
        mover.checkEdges();
        mover.show();
    }
}


class Mover {
    constructor(x, y, radius) {
        this.pos = createVector(x, y);
        this.vel = createVector(0, 0);
        this.acc = createVector(0, 0);
        this.radius = radius;
        this.mass = radius / 10;
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

function calculateWind(mover) {
    let mouse = createVector(mouseX, mouseY);
    let direction = p5.Vector.sub(mouse, mover.pos);
    let distance = direction.mag();
    direction.normalize(); 

    let strength = constrain(map(distance, 0, width, 1, 0), 0, 1);
    direction.mult(strength * 0.5);
    return direction;
}
