// An array to keep track of how often random numbers are picked
let randomCounts = [];
// The total number of counts
let total = 50;

function setup() {
    createCanvas(640, 600);
    for (let i = 0; i < total; i++) {
        randomCounts[i] = 600;
    }
}

function draw() {
    background(255);
    //{!2} Pick a random number and increase the count.
    let index = floor(random(randomCounts.length));
    randomCounts[index]++;
    // stroke(0);
    // fill(127);
    //   rect(100,300,500,400);
    let w = width / randomCounts.length;
    fill(random(225), random(250), random(265),random(255)); 
    // Graph the results.
    for (let x = 0; x < randomCounts.length; x++) {
        rect(x * w, height - randomCounts[x], w - 1, randomCounts[x]);

    // let randomcolor = ["black","black","orange","white","blue","yellow","pink","green","red","aqua"];


    }
}