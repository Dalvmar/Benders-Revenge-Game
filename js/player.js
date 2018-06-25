function Player(game) {
	this.game = game;

	this.x = this.game.canvas.width * 0.08;
	this.y0 = this.game.canvas.height * 0.8;
	this.y = this.y0;

	//this.dirX = 1;
	//this.dirY = 1;

	this.img = new Image();
	this.img.src = 'img/player.png';
	this.img.frames = 3;
	this.img.frameIndex = 0;

	this.w = 50;
	this.h = 70;

	this.maxSpeed = 2;
	this.vel = 16;
	this.grav= 0.08;//gravedad

	this.vy = 2; //velocidad eje y

	
	this.balls = [];

	this.setListeners();
}

Player.prototype.draw = function() {

	this.game.ctx.drawImage(
		this.img,
		this.img.frameIndex * Math.floor(this.img.width / this.img.frames),
		0,
		Math.floor(this.img.width / this.img.frames),
		this.img.height,
		this.x,
		this.y,
		this.w,
		this.h
	);
	//balls
	
};

Player.prototype.forward = function() {
  this.x -=this.maxSpeed * this.vel;
};
Player.prototype.back = function() {
	this.x += this.maxSpeed * this.vel;
};
Player.prototype.jump = function() {
	//this.y -= this.maxSpeed * this.vy ;
	this.y -= 5;
	this.vy -= 15;
	this.x += 10; //evitar que se vaya al infinito
};

Player.prototype.move = function() {
	var grav = 0.8;

	if (this.y >= this.y0) {
	  this.vy = 1;
	  this.y = this.y0;
	} else {
	  this.vy += grav;
	  this.y += this.vy;
	}
  };

Player.prototype.setListeners = function() {
  var that = this;
	document.onkeydown = function(e) {
		switch (e.keyCode) {
			case 39:
				that.back();
				break;
			case 37:
				that.forward();
				break;
			case 38:
				that.jump();
				break;
			case 32:
				//that.shootBall();
				break;
		}
	};
};




