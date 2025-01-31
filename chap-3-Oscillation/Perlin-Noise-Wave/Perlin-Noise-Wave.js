let xOffset = 0; // Initial Perlin noise offset
let deltaOffset = 0.02; // Step size for Perlin noise
let amplitude = 50; // Height of wave

function setup() {
    createCanvas(600, 400); // Create canvas
}

function draw() {
    background(220); // Set background color
    stroke(0); // Set stroke color to black
    let noiseOffset = xOffset; // Start Perlin noise from initial offset

    for (let x = 0; x <= width; x += 24) { // Loop through x positions
        let y = map(noise(noiseOffset), 0, 1, height / 2 - amplitude, height / 2 + amplitude); // Map noise to wave height

        let r = random(255); // Random red value
        let g = random(255); // Random green value
        let b = random(255); // Random blue value
        fill(r, g, b, 150); // Set random fill color with transparency

        circle(x, y, 15); // Draw circle at (x, y)

        noiseOffset += deltaOffset; // Increment Perlin noise offset for smooth variation
    }

    xOffset += 0.01; // Slowly shift the Perlin noise for motion effect
}

// ==================================================================

// let waves = [];

// function setup() {
//     createCanvas(600, 400);

//     // Create 6 waves with random amplitude, period, and phase
//     for (let i = 0; i < 6; i++) {
//         waves[i] = new Wave(random(20, 80), random(100, 600), random(TWO_PI));
//     }
// }

// function draw() {
//     background(204, 255, 229); // Set background color

//     // Update each wave to animate its Perlin noise movement
//     for (let wave of waves) {
//         wave.update();
//     }

//     //  width of the canvas in steps of 10 pixels
//     for (let x = 0; x < width; x += 10) {
//         let y = 0; // Start with y = 0

//         // Sum up the contributions of all waves at position x
//         for (let wave of waves) {
//             y += wave.evaluate(x);
//         }

//         // Draw moving wave points as small black circles
//         noStroke();
//         fill(0);
//         ellipse(x, y + height / 2, 10);
//     }
// }
//     class Wave {
//         constructor(amp, period, phase) {
//             this.amplitude = amp; // The height of the wave (peak value)
//             this.period = period; // The wavelength (distance for a full cycle)
//             this.phase = phase; // The starting position of the wave
//             this.noiseOffset = random(0, 100); // Starting offset for noise
//             this.speed = random(0.01, 0.09); // Speed at which the noise moves
//         }
    
//         evaluate(x) {
//             // Use Perlin noise for smooth and continuous wave movement
//             let n = noise(this.noiseOffset + x / this.period); // Get Perlin noise value based on x
//             return n * this.amplitude; // Scale the noise by amplitude
//         }
    
//         update() {
//             this.noiseOffset += this.speed; // Increment noise offset to animate the wave
//         }
    
// }