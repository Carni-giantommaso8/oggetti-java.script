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
    speedX: 1,
    speedY: 1,
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
    redSquare.speedY = -1;
}

function moveDown() {
    redSquare.speedY = 1;
}

function moveLeft() {
    redSquare.speedX = -1;
}

function moveRight() {
    redSquare.speedX = 1;
}

function updateGameArea() {
    myGameArea.context.clearRect(0, 0, myGameArea.canvas.width, myGameArea.canvas.height);
    redSquare.updatePosition();
    myGameArea.draw(redSquare);
}

window.addEventListener("keydown", function(event) {
    if (event.key === "ArrowUp") redSquare.speedY = -1;
    if (event.key === "ArrowDown") redSquare.speedY = 1;
    if (event.key === "ArrowLeft") redSquare.speedX = -1;
    if (event.key === "ArrowRight") redSquare.speedX = 1;
});