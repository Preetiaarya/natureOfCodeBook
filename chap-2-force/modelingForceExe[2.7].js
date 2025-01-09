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

    moverA.updste();
    moverA.show();

    moverB.update();
    moverB.show();

}

class Mover{
    constructor(x,y,mass){
        this.pos = createVector(x,y);
        this.vel = createVector(0.5,0);
        this.acc = createVector(0,0);
        this.mass = mass;
    }

    applyForce(force){
        let f = p5.Vector.div(force,this.mass);
        this.acc.add(f);
    }

    update(){
    this.pos.add(this.vel);
    this.vel.add(this.acc);
    this.acc.set(0,0);
    }

    show(){
        fill(220);
        stroke(0);
        ellipse(this.pos.x,this.pos,y,this.mass *16);
    }
}
