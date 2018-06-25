function Game(canvadId) {
  this.canvas = document.getElementById(canvadId);
  this.ctx = this.canvas.getContext("2d");
  this.fps = 60;

  this.reset();
}

Game.prototype.start = function() {
  this.interval = setInterval(function() {
   this.clear();

    this.framesCounter++;

    if (this.framesCounter > 1000) {
      this.framesCounter = 0;
    }

    if (this.framesCounter % 50 === 0) {
  
    }
    this.draw();
    this.moveAll();

   
  }.bind(this), 1000 / this.fps);
};


Game.prototype.clear = function() {
  this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
};

Game.prototype.reset = function() {
  this.background = new Background(this);
  this.player = new Player(this);
  this.obstacles = [];
  this.framesCounter = 0;
 
};


Game.prototype.draw = function() {

  this.background.draw();
  this.player.draw();
 
};

Game.prototype.moveAll = function() {

  this.player.move();

  
};