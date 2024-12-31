let moverA;
let moverB;

function setup() {
    createCanvas(1200, 800);

    moverA = new Mover(100, 200, 2);
    moverB = new Mover(300, 200, 4);
}
function draw() {
    background(153, 153, 0);

    if (mouseIsPressed) {
        let wind = createVector(0.1, 0);
        moverA.applyForce(wind);
        moverB.applyForce(wind);

        moverA.update();
        moverA.edges();
        moverA.show();

        moverB.update();
        moverB.edges();
        mover.show();
    }

    
}