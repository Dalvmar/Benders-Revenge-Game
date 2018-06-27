//Obstaculos vertical

function VerticalObs(game, x){
  this.game = game;
  //var random = Math.floor(Math.random()*300);
  this.x = x;
  this.y = 0;


  
  this.verticalObs= new Image();
  this.verticalObs.src= 'img/enemy.png'
  this.verticalObs.frames = 3;
  this.verticalObs.frameIndex = 0;

  this.width = 70;
  this.height = 80;
  this.dy= 5;
}

VerticalObs.prototype.draw = function() {
  this.game.ctx.drawImage(
		this.verticalObs,
		this.x,
		this.y,
		this.width,
		this.height
  ) 
  ;  
};

VerticalObs.prototype.move = function() {
  this.y += this.dy;
};


/*function verticalObs(game) {
  this.game = game;

  this.w = 15;
  this.h = this.w * 3;

  this.dy = 0.5;
  //this.verticalObs= new Image();
  //this.verticalObs.src= 'img/micro.png'

  this.x = this.game.canvas.w;
  this.y = this.game.player.dy //-this.game.player.h - this.h - 5;
}

verticalObs.prototype.draw = function() {
  this.game.ctx.fillStyle = "black";
  this.game.ctx.fillRect(this.x, this.y, this.w, this.h);
};

verticalObs.prototype.move = function() {
  this.y += this.dy;
};*/