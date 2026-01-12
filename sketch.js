let ball1, ball2;

function setup() {
    createCanvas(400, 400);

    ball1 = new Ball(100, 200);
    ball2 = new Ball(200, 200);

}

function draw() {
    background(220);
    ball2.x = mouseX;
    ball2.y = mouseY;
    if (ball1.overlap(ball2)) {
        background('pink');
    }
    ball1.show();
    ball2.show();
    ball1.move();

}

class Ball {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.r = 40;
        this.col = 220;
    }

    show() {
        fill(this.col);
        stroke(120);
        strokeWeight(2);
        circle(this.x, this.y, this.r);
    }

    move() {
        this.x += random(-2, 2);
        this.y += random(-2, 2);
    }
    overlap(other) {
        let d = dist(this.x, this.y, other.x, other.y);
        if (d < this.r) {
            return true;
        } else {
            return false;
        }
    }


}