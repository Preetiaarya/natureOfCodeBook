// let mover;

// function setup() {
//     createCanvas(600, 600);
//     mover = new Mover(300, 300, 20);
// }

// function draw() {
//     background(255, 102, 102);

//     mover.update();
//     mover.checkEdges();
//     mover.show();
// }

// class Mover {
//     constructor(x, y, radius) {
//         this.pos = createVector(x, y);
//         this.vel = createVector(2, 3);
//         this.radius = radius;
//     }

//     update() {
//         this.pos.add(this.vel);
//     }

//     checkEdges() {
//         // Right edge
//         if (this.pos.x + this.radius > width) {
//             this.pos.x = width - this.radius;
//             this.vel.x *= -1;
//         }
//         // Left edge
//         if (this.pos.x - this.radius < 0) {
//             this.pos.x = this.radius;
//             this.vel.x *= -1;
//         }
//         // Bottom edge
//         if (this.pos.y + this.radius > height) {
//             this.pos.y = height - this.radius;
//             this.vel.y *= -1;
//         }
//         // Top edge
//         if (this.pos.y - this.radius < 0) {
//             this.pos.y = this.radius;
//             this.vel.y *= -1;
//         }
//     }

//     show() {
//         fill("black");
//         noStroke();
//         circle(this.pos.x, this.pos.y, this.radius * 2);
//     }
// }


let mover;

function setup() {
    createCanvas(600, 600);
    mover = new Mover(200, 200, 30); // Mass determines size
}

function draw() {
    background(200);

    let gravity = createVector(0, 0.2);
    mover.applyForce(gravity);

    mover.checkEdges();
    mover.update();
    mover.show();
}

class Mover {
    constructor(x, y, mass) {
        this.pos = createVector(x, y);
        this.vel = createVector(2, 5); // Initial velocity for movement
        this.acc = createVector(0, 0);
        this.mass = mass;
        this.radius = mass; // Radius is set directly from mass
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
        fill("blue");
        noStroke();
        circle(this.pos.x, this.pos.y, this.radius * 2); // Circle diameter
    }

    checkEdges() {
        // Left edge
        if (this.pos.x - this.radius <= 0) {
            this.pos.x = this.radius; // Prevent sinking into the wall
            this.vel.x *= -1;
        }
        // Right edge
        if (this.pos.x + this.radius >= width) {
            this.pos.x = width - this.radius;
            this.vel.x *= -1;
        }
        // Top edge
        if (this.pos.y - this.radius <= 0) {
            this.pos.y = this.radius;
            this.vel.y *= -1;
        }
        // Bottom edge
        if (this.pos.y + this.radius >= height) {
            this.pos.y = height - this.radius;
            this.vel.y *= -1;
        }
    }
}
