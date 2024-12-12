let position;
let velocity;
let mouseX;
let mouseY;

function setup() {
    createCanvas(800, 800);

    position = createVector(100, 100);
    velocity = createVector(2.5, 4);
}

function draw() {
    background("pink");

    position.add(velocity);

    if (position.x > width || position.x < 0) {
        velocity.x = velocity.x * - 1;

    }
    if (position.y > height || position.y < 0) {
        velocity.y = velocity.y * - 1;
    }
    fill("black");
    stroke("white");
    strokeWeight(4);
    circle(position.x, position.y, 50);

    fill("green")
    rect(0, 200, 50, 400);
    //   rect(750,200,50,400);
    fill("blue");
    rect(mouseX - 25, mouseY - 25, 50, 50);

}












// let mover;

// function setup() {
//     createCanvas(800, 800);
//     // background("yellow");

//     mover = new Mover();
// }

// function draw() {
//     background("yellow");

//     mover.update();
//     mover.show();
// }
// class Mover {
//     constructor() {
//         this.position = createVector(width / 2, height / 2);
//         this.velocity = createVector(2.5, 4);
//     }
//     update() {
//         let mouse = createVector(mouseX, mouseY);

//         // this.position.add(this.velocity);

//     }
//     show() {
//         fill("black");
//         stroke("white");
//         strokeWeight(4);
//         circle(this.position.x, this.position.y, 50);

//         fill("green");
//         rect(0,200,50,400);
//         rect(750,200,50,400);
//     }
// }



