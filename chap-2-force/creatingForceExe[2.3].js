let moverA;
let moverB;

function setup() {
    createCanvas(600, 600);

    moverA = new Mover(200, 200, 1);
    moverB = new Mover(300, 200, 1);
}

function draw() {
    background(229, 255, 204);

    let gravity = createVector(0, 0.1);
    moverA.applyForce(gravity);
    moverB.applyForce(gravity);

    applyEdgeForces(moverA);
    applyEdgeForces(moverB);

    moverA.update();
    moverA.show();

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
        noStroke();
        circle(this.pos.x, this.pos.y, this.mass * 10);
    }
}

// Function to apply invisible forces near the edges
function applyEdgeForces(mover) {
    let edgeForce = 1;

    // Left edge
    if (mover.pos.x < 50) {
        let strength = map(mover.pos.x, 0, 50, edgeForce, 0);
        mover.applyForce(createVector(strength, 0));
    }

    // Right edge
    if (mover.pos.x > width - 50) {
        let strength = map(mover.pos.x, width, width - 50, edgeForce, 0);
        mover.applyForce(createVector(-strength, 0));
    }

    // Top edge
    if (mover.pos.y < 50) {
        let strength = map(mover.pos.y, 0, 50, edgeForce, 0);
        mover.applyForce(createVector(0, strength));
    }

    // Bottom edge
    if (mover.pos.y > height - 50) {
        let strength = map(mover.pos.y, height, height - 50, edgeForce, 0);
        mover.applyForce(createVector(0, -strength));
    }
}


// let moverA;
// let moverB;

// function setup() {
//     createCanvas(600, 600);

//     moverA = new Mover(200, 200, 2);
//     moverB = new Mover(300, 300, 2);
// }

// function draw() {
//     background(255, 204, 255);

//     let gravity = createVector(0, 0.1);
//     moverA.applyForce(gravity);
//     moverB.applyForce(gravity);

//     applyEdgeForces(moverA);
//     applyEdgeForces(moverB);

//     moverA.update();
//     moverA.show();

//     moverB.update();
//     moverB.show();
// }

// class Mover {
//     constructor(x, y, m) {
//         this.pos = createVector(x, y);
//         this.vel = createVector(0, 0);
//         this.acc = createVector(0, 0);
//         this.mass = m;
//     }

//     applyForce(force) {
//         let f = p5.Vector.div(force, this.mass);
//         this.acc.add(f);
//     }

//     update() {
//         this.vel.add(this.acc);
//         this.pos.add(this.vel);
//         this.acc.set(0, 0);
//     }

//     show() {
//         fill("black");
//         noStroke();
//         circle(this.pos.x, this.pos.y, this.mass * 20);
//     }
// }

// // Function to apply invisible forces near the edges
// function applyEdgeForces(mover) {
//     let edgeForce = 0.5; // Strength of the edge force

//     // Left edge
//     if (mover.pos.x < 50) {
//         let strength = map(mover.pos.x, 0, 50, edgeForce, 0);
//         mover.applyForce(createVector(strength, 0));
//     }

//     // Right edge
//     if (mover.pos.x > width - 50) {
//         let strength = map(mover.pos.x, width, width - 50, edgeForce, 0);
//         mover.applyForce(createVector(-strength, 0));
//     }

//     // Top edge
//     if (mover.pos.y < 50) {
//         let strength = map(mover.pos.y, 0, 50, edgeForce, 0);
//         mover.applyForce(createVector(0, strength));
//     }

//     // Bottom edge
//     if (mover.pos.y > height - 50) {
//         let strength = map(mover.pos.y, height, height - 50, edgeForce, 0);
//         mover.applyForce(createVector(0, -strength));
//     }
// }
