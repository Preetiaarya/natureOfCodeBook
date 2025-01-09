let moverA;
let moverB;

function setup() {
    createCanvas(600, 600);

    moverA = new Mover(200, 400, 4);
    moverB = new Mover(300, 400, 4);

}
function draw() {
    background(220);

    let gravityA = createVector(0, 0.5);
    let gravityB = createVector(0, 0.5);
    moverA.applyForce(gravityA);
    moverB.applyForce(gravityB);
}
