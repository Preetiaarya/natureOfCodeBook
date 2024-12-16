// let vector;
function setup(){
    createCanvas(400,400);
}
function draw(){
    background(155);
    let vector = createVector(mouseX,mouseY);
    fill("black");
    line(200,200,mouseX,mouseY);
}