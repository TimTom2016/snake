canvas = document.getElementById("canvas");
ctx = canvas.getContext("2d");
width = canvas.width;
height = canvas.height;
borderspace = 0.5;

function hard() {
    canvas.width = 250;
    width = 250;
    canvas.height = 250;
    height = 250;
}

function medium() {
    canvas.width = 500;
    width = 500;
    canvas.height = 500;
    height = 500;
}

function easy() {
    canvas.width = 750;
    width = 750;
    canvas.height = 750;
    height = 750;
}

function circle(x, y, radius, fillmode) {
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, Math.PI * 2, false)
    if (fillmode = "fill") {
        ctx.fill();
    } else if (fillmode = "stroke") {
        ctx.stroke
    }
}

function Ball() {
    this.x = width / 2;
    this.y = height / 2;
    this.speedx = 0;
    this.speedy = 0;
}

Ball.prototype.move = function() {
    this.x += this.speedx;
    this.y += this.speedy;
    if (this.x < 0) {
        this.x = width;
    } else if (this.x > width) {
        this.x = 0;
    } else if (this.y < 0) {
        this.y = height;
    } else if (this.y > height) {
        this.y = 0;
    }
};

keycodes = {
    87: "w",
    68: "d",
    83: "s",
    65: "a",
    69: "e"
}

Ball.prototype.draw = function() {
    circle(this.x, this.y, 10, "fill");
}

Ball.prototype.setDirection = function(direction) {
    if (direction === "w" && this.speedy !== 5) {
        this.speedx = 0;
        this.speedy = -5;
    } else if (direction === "s" && this.speedy !== -5) {
        this.speedx = 0;
        this.speedy = 5;
    } else if (direction === "d" && this.speedx !== -5) {
        this.speedx = 5;
        this.speedy = 0;
    } else if (direction === "a" && this.speedx !== 5) {
        this.speedx = -5;
        this.speedy = 0;
    } else if (direction === "e") {
        this.speedx = 0;
        this.speedy = 0;
    }

}
ball = new Ball()

function borders() {
    ctx.fillRect(0, 0, borderspace, width);
    ctx.fillRect(0, width, height, -borderspace);
    ctx.fillRect(height, 0, -borderspace, width);
    ctx.fillRect(0, 0, height, borderspace);
}
borders()
$("body").keydown(function(event) {
    direction = keycodes[event.keyCode];
    ball.setDirection(direction);
})
setInterval(function() {
    ctx.clearRect(0, 0, width, height)
    borders()
    ball.draw()
    ball.move()
    borders()
}, 30)