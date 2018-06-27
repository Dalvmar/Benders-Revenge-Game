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
    //this.genObsVert-=0.1;
    //this.genEnemies-=0.2;

    if (this.framesCounter > 1000) 
      this.framesCounter = 0;
    

    if (this.framesCounter % this.genEnemies === 0) {
      this.generateEnemies();
    
    }
      
    

   if (this.framesCounter % this.genObsVert  === 0) {
      this.generateVerticalObs(Math.floor(Math.random() * this.canvas.width));
      
    }
      
   
    this.draw();
    this.moveAll();
    this.clearEnemies();
   


    if (this.isCollisionEnemy()) {
     this.gameOver();
    }
    this.isCollisionObj();
    
   
  }.bind(this), 1000 / this.fps);
};


Game.prototype.drawScore = function(){
    
  this.ctx.font = "30px sans-serif";
  this.ctx.fillStyle = "black";
  this.ctx.fillText("Score:" + Math.floor(this.score), 50, 50);
}



Game.prototype.killEnemies=function(pos){
this.enemies.splice(pos,1);

}

Game.prototype.killVerticalObs=function(pos){
  this.verticalObs.splice(pos,1);
  }

Game.prototype.stop = function() {
  clearInterval(this.interval);
};

Game.prototype.gameOver = function() {
  this.stop();
 


alert("YOU LOSE!");
document.location.reload();
};

Game.prototype.clear = function() {
  this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
};

Game.prototype.reset = function() {
  this.background = new Background(this);
  this.player = new Player(this);
  this.enemies = [];
  this.framesCounter = 0;
  this.genEnemies = 50;
  this.genObsVert = 30;
  this.verticalObs =[];
  this.score = 0;
 
};

Game.prototype.draw = function() {

  this.background.draw();
  this.player.draw();
  this.drawScore();

  this.enemies.forEach(function(enemies) { 
    enemies.draw(); 
    
  });

  this.verticalObs.forEach(function(verticalObs) { 
    verticalObs.draw(); 
  
  });

};

Game.prototype.moveAll = function() {

  this.player.move();
  var that = this;

  this.enemies.forEach(function(enemy) { 
    if(!that.isCollisionBall()){
      enemy.move(); 
      
    }
       
  });


  this.verticalObs.forEach(function(verticalOb){
  
    verticalOb.move()
  });
  
};


Game.prototype.clearEnemies = function() {
  this.enemies = this.enemies.filter(function(enemy) {
    return enemy.x >= 0;
  });
};

Game.prototype.clearVerticalObs = function() {
  this.verticalObs = this.verticalObs.filter(function(verticalOb) {
    return verticalOb.y <= this.canvas.height;
  });
};

Game.prototype.generateEnemies = function() {
  this.enemies.push(new Enemy(this));
};

Game.prototype.generateVerticalObs = function(x) {
  this.verticalObs.push(new VerticalObs(this, x));
  
};



/** Collisions **/


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
    for (var a = 0; a < this.player.balls.length; a++) {
      if (this.player.balls[a].x < this.enemies[i].x + this.enemies[i].w && this.player.balls[a].x + this.player.balls[a].r  > this.enemies[i].x && this.player.balls[a].y < this.enemies[i].y + this.enemies[i].h && this.player.balls[a].y + this.player.balls[a].r > this.enemies[i].y){
        this.killEnemies(i); 
        this.score += 1;   
        return true;
      }
      return false;              
    }         
  }
};

Game.prototype.isCollisionObj = function() {

  for (var i = 0; i < this.verticalObs.length; i++) {

    if(this.verticalObs[i].x < this.player.x + this.player.w &&
      this.verticalObs[i].x + this.verticalObs[i].width > this.player.x &&
      this.verticalObs[i].y < this.player.y + this.player.h &&
      this.verticalObs[i].height + this.verticalObs[i].y > this.player.y) {
        this.killVerticalObs();
        this.score -= 0.5;
        //--puntos if(puntos==0)
        //gameOver


      }
    
             // ¡colision detectada!
     }

    
  };


