
function Sounds() {

    // BACKGROUND MUSIC
    this.backgroundAudio = new Audio("./sound/Futurama.mp3");
    this.backgroundAudio.loop = true;
    this.backgroundAudio.volume = .2;
    this.backgroundAudio.load();
    // COLLISION EFFECT
    this.gameoverAudio = new Audio("./sound/brillante.mov");
    this.gameoverAudio.volume = .7;
    this.gameoverAudio.load();

  }
  
 
  