let moverA;
let moverB;

function setup(){
    createCanvas(800,800);

    moverA = new Mover(200,200,2);
    moverB = new Mover(300,200,2);
}
function draw(){
    background(220);

    let gravity = createVector(0,0.5);
    mover.applyForce(gravity);

    if(mouseIsPressed){
        let wind = createVector(0,0);
        mover.applyForce(wind);
    }

    moverA.update();
    moverA.show();
    moverA.edges();

    moverB.update();
    moverB.show();
    moverB.edges();
}