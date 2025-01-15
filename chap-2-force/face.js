let faceImage;

function preload() {
  // Load the 2D face image
  faceImage = loadImage('https://example.com/face.jpg');  // Replace with your own image URL
}

function setup() {
  createCanvas(600, 600, WEBGL); // Set up canvas in 3D (WEBGL)
  noStroke();
}

function draw() {
  background(240);  // Light background
  rotateY(frameCount * 0.01); // Rotate for 3D effect

  // Map the image onto a sphere
  texture(faceImage);  // Apply the image texture
  sphere(150);  // Draw a sphere with the image texture mapped to it
}
