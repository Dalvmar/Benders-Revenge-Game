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

    if (this.framesCounter % 250 === 0) {
    this.generateEnemies();
    }

   /* if (this.framesCounter % 50 === 0) {
      this.generateObstacles();
      }*/
    
    this.draw();
    this.moveAll();
    this.clearEnemies();
    //this.clearObsacles();

    if (this.isCollisionEnemy()) {
     this.gameOver();
    }
    // if (this.isCollisionBall()){
    //   //puntos ++
    //   console.log('iscollision')
    //   //elimino el enemigo
    //   this.clearEnemies();
    // } else {console.log('aqui si')}
   
  }.bind(this), 1000 / this.fps);
};


Game.prototype.stop = function() {
  clearInterval(this.interval);
};

Game.prototype.gameOver = function() {
  this.stop();
 
  if(confirm("GAME OVER. Play again?")) {
    this.reset();
    this.start();
}
};

Game.prototype.clear = function() {
  this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
};

Game.prototype.reset = function() {
  this.background = new Background(this);
  this.player = new Player(this);
  this.enemies = [];
  this.framesCounter = 0;
  this.obstacles =[];
 
};

Game.prototype.draw = function() {

  this.background.draw();
  this.player.draw();

  this.enemies.forEach(function(enemies) { 
    enemies.draw(); 
  
  });

 /* this.obstacles.forEach(function(obstacles) { 
    obstacles.draw(); 
  
  });*/

};

Game.prototype.moveAll = function() {

  this.player.move();
  var that = this;
  this.enemies.forEach(function(enemy) { 
    console.log(that.isCollisionBall())
    if(that.isCollisionBall()) that.clearEnemies();
    enemy.move(); 
  });

  /*this.obstacles.forEach(function(obstacles) { 
    obstacle.move(); 
  });*/
  
};


Game.prototype.clearEnemies = function() {
  this.enemies = this.enemies.filter(function(enemy) {
    console.log('clearEnemies')
    return enemy.x >= 0;
  });
};

/*Game.prototype.clearObstacles = function() {
  this.obstacles = this.obstacles.filter(function(obstacle) {
    return obstacle.y >= 0;
  });
};*/

Game.prototype.generateEnemies = function() {
  this.enemies.push(new Enemy(this));
};

/*Game.prototype.generateObstacles = function() {
  this.obstacles.push(new Obstacle(this));
};
*/
Game.prototype.isCollisionEnemy = function() {
  return this.enemies.some(function(enemy) {
    return (
      ((this.player.x + this.player.w-30) >= enemy.x &&
       this.player.x < (enemy.x + enemy.w-40) &&
       this.player.y + (this.player.h -35) >= enemy.y)
    );
  }.bind(this));
};

Game.prototype.isCollisionBall = function() {
  for (var i = 0; i < this.enemies.length; i++) {
    console.log(this.enemies[i])
    for (var a = 0; a < this.player.balls.length; a++) {
      console.log(this.player.balls[a])
      if (this.player.balls[a].x < this.enemies[i].x + this.enemies[i].w && this.player.balls[a].x + this.player.balls[a].r  > this.enemies[i].x && this.player.balls[a].y < this.enemies[i].y + this.enemies[i].h && this.player.balls[a].y + this.player.balls[a].r > this.enemies[i].y){
            return true;
      }
      return false;              
    }         
  }
};

