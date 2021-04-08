let x = 0;
let y = 0;
let easing = 0.05;

function setup() {
   createCanvas(windowWidth, windowHeight);
     // 만약 백그라운드를 드로우에 집어넣으면 궤적이 보이지 않게 된다.
}

function draw() {
    background(3,244, 252, 20);
    let targetX = mouseX;
    x += (targetX - x) * easing;
    

    let targetY = mouseY;
    y += (targetY - y) * easing;

    ellipse(x, y, 50, 50);
}

function windowResized() {
     resizeCanvas(windowWidth, windowHeight);
}