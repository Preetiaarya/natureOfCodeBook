// let movers = [];

// function setup() {
//     createCanvas(600, 600);

//   
//     for (let i = 0; i < 5; i++) {
//         let mass = random(1, 5);
//         let x = random(width);
//         let y = random(height / 2); 
//         movers.push(new Mover(x, y, mass));
//     }
// }

// function draw() {
//     background(0,204, 204);

//     
//     let gravity = createVector(0, 0.1);

//     for (let mover of movers) {
// 
//         let gravityScaled = p5.Vector.mult(gravity, mover.mass);
//         mover.applyForce(gravityScaled);

//         mover.update();
//         mover.checkEdges();
//         mover.show();
//     }
// }

// class Mover {
//     constructor(x, y, mass) {
//         this.pos = createVector(x, y);
//         this.vel = createVector(0, 0);
//         this.acc = createVector(0, 0);
//         this.mass = mass; 
//         this.radius = mass * 10; 
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

//     checkEdges() {
//     
//         if (this.pos.x + this.radius > width) {
//             this.pos.x = width - this.radius;
//             this.vel.x *= -1;
//         }
//         if (this.pos.x - this.radius < 0) {
//             this.pos.x = this.radius;
//             this.vel.x *= -1;
//         }
//         if (this.pos.y + this.radius > height) {
//             this.pos.y = height - this.radius;
//             this.vel.y *= -1;
//         }
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




let moverA, moverB;

function setup() {
    createCanvas(600, 600);

    moverA = new Mover(200, 100, 10);
    moverB = new Mover(400, 100, 2);
}

function draw() {
    background(204, 204, 255);

    let gravity = createVector(0, 0.1);

    let gravityA = p5.Vector.mult(gravity, moverA.mass);
    moverA.applyForce(gravityA);

    let gravityB = p5.Vector.mult(gravity, moverB.mass);
    moverB.applyForce(gravityB);


    if (mouseIsPressed) {
        let wind = createVector(0.5, 0);
        moverA.applyForce(wind);
        moverB.applyForce(wind);
    }

    moverA.update();
    moverA.checkEdges();
    moverA.show();

    moverB.update();
    moverB.checkEdges();
    moverB.show();
}

class Mover {
    constructor(x, y, mass) {
        this.pos = createVector(x, y);
        this.vel = createVector(0, 0);
        this.acc = createVector(0, 0);
        this.mass = mass;
        this.radius = mass * 10;
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
        if (this.pos.x + this.radius > width) {
            this.pos.x = width - this.radius;
            this.vel.x *= -1;
        }
        if (this.pos.x - this.radius < 0) {
            this.pos.x = this.radius;
            this.vel.x *= -1;
        }
        if (this.pos.y + this.radius > height) {
            this.pos.y = height - this.radius;
            this.vel.y *= -1;
        }
        if (this.pos.y - this.radius < 0) {
            this.pos.y = this.radius;
            this.vel.y *= -1;
        }
    }

    show() {
        fill("white");
        noStroke();
        circle(this.pos.x, this.pos.y, this.radius * 2);
    }
}
