function startGame() {
    myGameArea.start();
    myGameArea.draw(redSquare);
};

var redSquare = {
    width: 20,
    height: 20,
    x: 10,
    y: 120,
    color: "red",
    speedX: 0,
    speedY: 0,
    updatePosition: function() {
        this.x += this.speedX;
        this.y += this.speedY;
    }
};

var myGameArea = {
    canvas : document.createElement("canvas"),
    start : function() {
      this.canvas.width = 480; 
      this.canvas.height = 270;
      this.context = this.canvas.getContext("2d");
      document.body.insertBefore(this.canvas, document.body.childNodes[0])
      this.interval = setInterval(updateGameArea, 20);
    },

    draw: function(component) {
        this.context.fillStyle = component.color;
        this.context.fillRect(component.x, component.y, component.width, component.height);
    },  
};

function moveUp() {
    redSquare.speedY = -1.25;
}

function moveDown() {
    redSquare.speedY = 1.25;
}

function moveLeft() {
    redSquare.speedX = -1.25;
}

function moveRight() {
    redSquare.speedX = 1.25;
}

function clearMove() {
    redSquare.speedX = 0;
    redSquare.speedY = 0;
}

function updateGameArea() {
    myGameArea.context.clearRect(0, 0, myGameArea.canvas.width, myGameArea.canvas.height);
    redSquare.updatePosition();
    myGameArea.draw(redSquare);
}

window.addEventListener("keydown", function(event) {
    if (event.key === "ArrowUp") moveUp();
    if (event.key === "ArrowDown") moveDown();
    if (event.key === "ArrowLeft") moveLeft();
    if (event.key === "ArrowRight") moveRight();
});

window.addEventListener("keyup", function(event) {
    if (["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"].includes(event.key)) {
        clearMove();
    }
});