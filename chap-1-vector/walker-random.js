let walker;

function setup() {
  createCanvas(1000, 800);
  background(204,255,255);

  walker = new Walker(width/2, height/2);
}

function draw() {
  walker.update();
  walker.show();
}

class Walker {
  constructor(x, y) {
    this.pos = createVector(x, y);
    this.vel = p5.Vector.random2D();
    this.vel.mult(random(7));
  }

  update() {
    this.pos.add(this.vel);
  }

  show() {
    stroke("pink");
    strokeWeight(2);
    fill("pink");
    rect(this.pos.x, this.pos.y, 50,250);
  }
}
