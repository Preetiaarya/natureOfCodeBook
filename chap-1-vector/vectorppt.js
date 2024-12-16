function setup(){
    createCanvas(400,400);
}
function draw(){
    background(153,0,153);

    let vector = createVector(mouseX,mouseY);
    line(mouseX,mouseY,200,200);
}