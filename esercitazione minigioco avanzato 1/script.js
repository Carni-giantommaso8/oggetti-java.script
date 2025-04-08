function startGame() {
    myGameArea.start();
    animatedObject.loadImages();
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
    drawGameObject: function(gameObject) {
        this.context.drawImage(
          gameObject.image,
          gameObject.x,
          gameObject.y,
          gameObject.width,
          gameObject.height
        );  
    },
};

function moveUp() {
    animatedObject.speedY = -4;
}

function moveDown() {
    animatedObject.speedY = 4;
}

function moveLeft() {
    animatedObject.speedX = -4;
}

function moveRight() {
    animatedObject.speedX = 4;
}

function clearMove() {
    animatedObject.speedX = 0;
    animatedObject.speedY = 0;
}

function updateGameArea() {
    myGameArea.context.clearRect(0, 0, myGameArea.canvas.width, myGameArea.canvas.height);
    animatedObject.update();
    myGameArea.drawGameObject(animatedObject);
    

}

window.addEventListener("keydown", function(event) {
    if (event.key === "w") moveUp();
    if (event.key === "s") moveDown();
    if (event.key === "a") moveLeft();
    if (event.key === "d") moveRight();
});

window.addEventListener("keyup", function(event) {
    if (["w", "s", "a", "d"].includes(event.key)) {
        clearMove();
    }
});
var animatedObject = {
    speedX: 0,
    speedY: 0,
    width: 100,
    height: 80,
    x: 10,
    y: 120,
    imageList: [], 
    contaFrame: 0, //Tiene conto di quanti frame sono passati
    actualFrame: 0, //Specifica quale frame disegnare
  
    update: function() {
      this.x += this.speedX;
      this.y += this.speedY;
      this.contaFrame++;
      if (this.contaFrame == 2) {
        this.contaFrame = 0;
        this.actualFrame = (1 + this.actualFrame) % this.imageList.length;
        //console.log(this.actualFrame);
        this.image = this.imageList[this.actualFrame];
      }
    },
  
    loadImages: function() {
       for (imgPath of running) {
        var img = new Image(this.width, this.height);
        img.src = imgPath;
        this.imageList.push(img);
        //console.log(img);
      }
      this.image = this.imageList[this.actualFrame];
    }
};  
