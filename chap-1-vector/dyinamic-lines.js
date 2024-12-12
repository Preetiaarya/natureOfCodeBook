function setup(){
    createCanvas(1000,500);
    background("green");
}

function draw(){
    translate(width/2,height/2);

    let v = createVector(random(-100,100),random(-100,50));
    v = p5.Vector.random2D();
    v.mult(random(-100,500));

    stroke("white");
    strokeWeight(5);
    line(0,0,v.x,v.y);

}