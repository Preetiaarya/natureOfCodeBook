let particles = []; // Array to store the particles

function setup() {
    createCanvas(600, 400); // Create a 600x400 canvas
}

function draw() {
    background(220); // Clear the canvas with a light gray background

    particles.push(new Particle(width / 2, 20)); // Add a new particle at the center-top of the canvas

    // Loop through the array in reverse order to safely remove elements
    for (let i = particles.length - 1; i >= 0; i--) {
        let particle = particles[i];
        particle.run(); // Update and display the particle

        if (particle.isDead()) {
            particles.splice(i, 1); // Remove the particle if it has "died" (e.g., faded out or gone off-screen)
        }
    }
}
