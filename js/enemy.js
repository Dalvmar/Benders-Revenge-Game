function Enemy(game) {
  this.game = game;

	

	this.enemy = new Image();
	this.enemy.src = 'img/enemy1.png';
	this.enemy.frames = 3;
	this.enemy.frameIndex = 0;

	this.w = 80;
	this.h = 120;

	this.x = this.game.canvas.width;
	//this.y = 50;
	this.dx = 5;//mayor vel
	//this.y = this.game.player.y0 + this.game.player.h - this.h - 5;
	this.y0 = this.game.canvas.height * 0.72;
	this.y = this.y0;


}

Enemy.prototype.draw = function() {
	this.game.ctx.drawImage(
		this.enemy,
		this.x,
		this.y,
		this.w,
		this.h


	);

	
};

Enemy.prototype.move = function() {
  this.x -= this.dx;
};