function setup(){
    createCanvas(1000,800);
    background("green");
}

function draw(){
    translate(width/2,height/2);

    let pos = createVector(200,250);
    let mouse = createVector(mouseX,mouseY);

    let v = p5.Vector.sub(mouse,pos);

    // let v = createVector(random(100,100),random(100,50));
    // v = p5.Vector.random2D();

    // let m  = v.mag();
    // v.div(m);
    // v.normalize();
    // v.mult(100);

    // v.setMag(50);

    v.mult(random(100,500));

    stroke("white");
    strokeWeight(3);
    line(0,0,v.x,v.y);

}