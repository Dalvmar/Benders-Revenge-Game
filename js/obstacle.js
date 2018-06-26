//Obstaculos vertical

function Obstacle(game) {
  this.game = game;

  this.w = 15;
  this.h = this.w * 3;

  this.dy = 0.5;
  this.obstacle= new Image();
  this.obstacle.src= 'img/micro.png'

  this.x = this.game.canvas.h;
  this.y = this.game.player.dy -this.game.player.h - this.h - 5;
}

Obstacle.prototype.draw = function() {
  this.game.ctx.fillStyle = "black";
  this.game.ctx.fillRect(this.x, this.y, this.w, this.h);
};

Obstacle.prototype.move = function() {
  this.y += this.dy;
};