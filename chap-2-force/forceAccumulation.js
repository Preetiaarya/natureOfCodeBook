
let balloon;

function setup() {
  createCanvas(1200, 800);
  balloon = new Balloon(400, 500,1);
}
function draw() {
    background(0, 153, 153);
  
    // Upward force to simulate helium
    let helium = createVector(0, -0.02);
  
    // Wind force based on Perlin noise
    let windStrength = noise(frameCount * 0.01) * 0.2 - 0.1; // Varies between -0.1 and 0.1
    
    let wind = createVector(windStrength, 0);
  
    
    balloon.applyForce(helium);
    balloon.applyForce(wind);
  
    
    balloon.update();
    balloon.edges();
    balloon.show();
  }


