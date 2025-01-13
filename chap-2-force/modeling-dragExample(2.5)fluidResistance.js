// let movers = [];
// let liquid;

// function setup() {
//     createCanvas(640, 240);    // Initialize an array of Mover objects.
//     for (let i = 0; i < 9; i++) {  // Use a random mass for each one.
//         let mass = random(0.1, 5);     // The x-values are spaced out evenly according to i.
//         movers[i] = new Mover(40 + i * 70, 0, mass);
//     }
//     liquid = new Liquid(0, height / 2, width, height / 2, 0.1);
// }

// function draw() {
//     background(255);

//     let c = 0.1;
//     let speed = this.velocity.mag(); //{!1} Part 1 of the formula (magnitude)
//     let dragMagnitude = c * speed * speed;
//     let drag = this.velocity.copy(); // Part 2 of the formula (direction)
//     drag.mult(-1); // Magnitude and direction together!
//     drag.setMag(dragMagnitude);

//     liquid.show();  // Draw the liquid.
//     for (let i = 0; i < movers.length; i++) {    // Is the mover in the liquid?
//         if (liquid.contains(movers[i])) {            // Calculate the drag force.
//             let dragForce = liquid.drag(movers[i]);    // Apply the drag force to the mover.
//             movers[i].applyForce(dragForce);
//         }

//         // // If the liquid contains the mover, apply the drag force.
//         // if (liquid.contains(mover)) {
//         //     let dragForce = liquid.calculateDrag(mover);
//         //     mover.applyForce(dragForce);
//         // }


//         let gravity = createVector(0, 0.1 * movers[i].mass); // Gravity is scaled by mass here!
//         movers[i].applyForce(gravity);  // Apply gravity.

//         movers[i].update();  // Update and display the mover.
//         movers[i].show();
//         movers[i].checkEdges();
//     }
// }
// class Liquid {
//     constructor(x, y, w, h, c) {
//         this.pos.x = createVector(0,0);
//         this.y = y;
//         this.w = w;
//         this.h = h;
//         this.c = c; // The Liquid object includes a variable defining its coefficient of drag.
//     }
//     update(){
//         this.pos.add(this.vel);
//         this.vel.add(this.acc);
//         this.acc.set(0,0);
//     }

//     show() {
//         noStroke();
//         fill(175);
//         rect(this.x, this.y, this.w, this.h);
//     }

//     contains(mover) {  // Store position in a separate variable to make the code more readable.
//         let pos = mover[i].position; // This Boolean expression determines whether the position vector is contained within the rectangle defined by the Liquid class.
//         return (pos.x > this.x && pos.x < this.x + this.w &&
//             pos.y > this.y && pos.y < this.y + this.h);
//     }

//     calculateDrag(mover) {
//         let speed = mover[i].velocity.mag();  // Calculate the force’s magnitude.
//         let dragMagnitude = this.c * speed * speed; // Calculate the force’s direction.
//         let dragForce = mover[i].velocity.copy();
//         dragForce.mult(-1); // Finalize the force: set the magnitude and direction together.
//         dragForce.setMag(dragMagnitude); // Return the force.
//         return dragForce;
//     }
//     checkEdges(){
//         if(this.pos.x>=width ||this.pos.x <=0){
//             this.vel.x *= -1;
//         }
//     }
// }

let movers = [];
let liquid;

function setup() {
    createCanvas(640, 240);
    for (let i = 0; i < 9; i++) {
        let mass = random(0.1, 5);
        movers[i] = new Mover(40 + i * 70, 0, mass);
    }
    liquid = new Liquid(0, height / 2, width, height / 2, 0.1);
}

function draw() {
    background(255);

    liquid.show();
    for (let i = 0; i < movers.length; i++) {
        if (liquid.contains(movers[i])) {
            let dragForce = liquid.calculateDrag(movers[i]);
            movers[i].applyForce(dragForce);
        }

        let gravity = createVector(0, 0.1 * movers[i].mass);
        movers[i].applyForce(gravity);

        movers[i].update();
        movers[i].show();
        movers[i].checkEdges();
    }
}

class Mover {
    constructor(x, y, mass) {
        this.position = createVector(x, y);
        this.velocity = createVector(0, 0);
        this.acceleration = createVector(0, 0);
        this.mass = mass;
    }

    applyForce(force) {
        let f = p5.Vector.div(force, this.mass);
        this.acceleration.add(f);
    }

    update() {
        this.velocity.add(this.acceleration);
        this.position.add(this.velocity);
        this.acceleration.mult(0);
    }

    show() {
        stroke(0);
        fill(175);
        ellipse(this.position.x, this.position.y, this.mass * 16, this.mass * 16);
    }

    checkEdges() {
        if (this.position.y > height) {
            this.position.y = height;
            this.velocity.y *= -0.9;
        }
        if (this.position.x > width || this.position.x < 0) {
            this.velocity.x *= -0.9;
        }
    }
}

class Liquid {
    constructor(x, y, w, h, c) {
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.c = c;
    }

    show() {
        noStroke();
        fill(175);
        rect(this.x, this.y, this.w, this.h);  // Use correct properties
    }

    contains(mover) {
        let pos = mover.position;
        return (pos.x > this.x && pos.x < this.x + this.w &&
            pos.y > this.y && pos.y < this.y + this.h);  // Use correct properties
    }

    calculateDrag(mover) {
        let speed = mover.velocity.mag();
        let dragMagnitude = this.c * speed * speed;
        let dragForce = mover.velocity.copy();
        dragForce.mult(-1);
        dragForce.setMag(dragMagnitude);
        return dragForce;
    }
}
