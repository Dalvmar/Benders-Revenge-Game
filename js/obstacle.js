//Obstaculos vertical

function VerticalObs(game, x){
  this.game = game;
  //var random = Math.floor(Math.random()*300);
  this.x = x;
  this.y = 0;


  
  this.verticalObs= new Image();
  this.verticalObs.src= 'img/Magnet-Transparent.png'
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


