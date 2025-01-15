let movers = [];
let attractor;

function setup() {
    createCanvas(640, 360);
    for (let i = 0; i < 10; i++) {
      movers[i] = new Mover(random(width), random(height), random(0.5, 3));
    }
    attractor = new Attractor();
  }
  
function draw() {
    background(220);
}