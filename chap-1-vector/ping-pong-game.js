// let position;
// let velocity;

// function setup() {
//     createCanvas(800, 800);

//     position = createVector(100, 100);
//     velocity = createVector(2.5, 4);
// }

// function draw() {
//     background("pink");

//     position.add(velocity);

//     if (position.x > width|| position.x < 0) {
//         velocity.x = velocity.x * - 1;

//     }
//     if (position.y > height || position.y <0) {
//         velocity.y = velocity.y * - 1;
//     }
//     fill("black");
//     stroke("white");
//     strokeWeight(4);
//     circle(position.x, position.y, 50);

//     fill("green")
   
//    rect(0,position.y,20,200);
//    rect(780,mouseY,20,200);

// }

let position;
let velocity;

function setup() {
    createCanvas(800, 800);

    position = createVector(100, 100);
    velocity = createVector(2.5, 4);
}

function draw() {
    background(153,76,0);

    position.add(velocity);

    // Wall collision logic
    if (position.x > width || position.x < 0) {
        velocity.x *= -1;
    }
    if (position.y > height || position.y < 0) {
        velocity.y *= -1;
    }

    // Draw ball
    fill("black");
    stroke("white");
    strokeWeight(4);
    circle(position.x, position.y, 50);

    // Draw paddles
    fill("green");
    let paddleHeight = 200;
    let paddleWidth = 20;
    let leftPaddleY = position.y - paddleHeight / 2;
    let rightPaddleY = mouseY - paddleHeight / 2;

    rect(0, leftPaddleY, paddleWidth, paddleHeight);
    rect(width - paddleWidth, rightPaddleY, paddleWidth, paddleHeight);

    // Collision detection for left paddle
    if (
        position.x - 25 <= paddleWidth && // Ball touching the left paddle
        position.y + 25 >= leftPaddleY &&
        position.y - 25 <= leftPaddleY + paddleHeight
    ) {
        velocity.x *= -1; // Reverse x direction
        position.x = paddleWidth + 25; // Adjust ball position to avoid sticking
    }

    // Collision detection for right paddle
    if (
        position.x + 25 >= width - paddleWidth && // Ball touching the right paddle
        position.y + 25 >= rightPaddleY &&
        position.y - 25 <= rightPaddleY + paddleHeight
    ) {
        velocity.x *= -1; // Reverse x direction
        position.x = width - paddleWidth - 25; // Adjust ball position to avoid sticking
    }
}












// let mover;

// function setup() {
//     createCanvas(800, 800);

//     mover = new Mover();
// }

// function draw() {
//     background("yellow");

//     mover.update();
//     mover.show();
// }
// class Mover {
//     constructor() {
//         this.position = createVector(width / 2, height / 2);
//         this.velocity = createVector(2.5, 3);
//     }
//     update() {
//         let mouse = createVector(mouseX, mouseY);

//         this.position.add(this.velocity);

//     }
//     show() {
//         fill("black");
//         stroke("white");
//         strokeWeight(4);
//         circle(this.position.x, this.position.y, 50);

//         fill("green");
//         rect(0,220,20,300);
//         rect(780,mouseY,50,300);
//     }
// }



