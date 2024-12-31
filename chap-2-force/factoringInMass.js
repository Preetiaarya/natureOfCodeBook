
// let moverA;
// let moverB;

// function setup() {
//     createCanvas(1200, 800);

//     moverA = new Mover(100, 200, 4);
//     moverB = new Mover(300, 200, 4);
// }

// function draw() {
//     background(153, 153, 0);

//     let wind = createVector(0.1, 0);
//     moverA.applyForce(wind);
//     moverB.applyForce(wind);


//     moverA.update();
//     moverA.edges();
//     moverA.show();

//     moverB.update();
//     moverB.edges();
//     moverB.show(); // Fix
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
//         fill("white");
//         circle(this.pos.x, this.pos.y, this.mass * 10);
//     }

//     edges() {
//         if (this.pos.y <= 0 || this.pos.y >= height) {
//             this.vel.y *= -1;
//         }
//     }
// }


let moverA;
let moverB;

function setup() {
    createCanvas(1200, 800);

    moverA = new Mover(400, 200, 4);
    moverB = new Mover(700, 200, 4);
}

function draw() {
    background(153, 153, 0);

    let wind = createVector(0, 0.2);
    moverA.applyForce(wind);
    moverB.applyForce(wind);


    moverA.update();
    moverA.edges();
    moverA.show();

    moverB.update();
    moverB.edges();
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
        fill("white");
        circle(this.pos.x, this.pos.y, this.mass * 10);
    }

    edges() {
        if (this.pos.y <= 0||this.pos.y >= height) {
            this.vel.y *= -1;
        }
       
    }
}







