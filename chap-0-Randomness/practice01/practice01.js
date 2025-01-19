let randomNum = [];//random array
let totalRect = 50;//total rect

function setup() {
    createCanvas(640, 600);
    for (let i = 0; i < totalRect; i++) {    //loop for rect
        randomNum[i] = 600;
    }
}

function draw() {
    background(255);
    //{!2} take a random number and increase the count.
    let num = floor(random(randomNum.length));
    randomNum[num]++;
    
    let w = width / randomNum.length;
    fill(random(225), random(250), random(265),random(255)); 
    fill(random(25,25,112), random(1390,0,139), random(0,255,0),random(139,69,19)); 

    // results.
    for (let x = 0; x < randomNum.length; x++) {
        rect(x * w, height - randomNum[x], w - 1, randomNum[x]);

    }
}