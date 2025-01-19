function setup(){
    createCanvas(400,400);
}
function draw(){
    background(153,0,153);

    let vector = createVector(mouseX,mouseY);
    let velocity = createVector(0.2,10);
    line(mouseX,mouseY,200,200);
}