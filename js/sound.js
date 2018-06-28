
function Sounds() {

    // BACKGROUND MUSIC
    this.backgroundAudio = new Audio("./sound/Futurama.mp3");
    this.backgroundAudio.loop = true;
    this.backgroundAudio.volume = .2;
    this.backgroundAudio.load();
    // COLLISION EFFECT
    this.collisionAudio = new Audio("./sound/brillante.mov");
    this.collisionAudio.volume = .7;
    this.collisionAudio.load();
    //GAME OVER
    this.gameoverAudio = new Audio("./sound/gameOver.ogg");
    this.gameoverAudio.volume = .6;
    this.gameoverAudio.load();
  }
  
 
  