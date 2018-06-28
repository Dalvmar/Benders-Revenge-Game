window.onload = function() {

  var game = new Game("canvas");
document.getElementById("start-btn").onclick = function(){
  document.getElementById('canvas').style.display='block';
  document.getElementsByClassName('bender-cover')[0].style.display='none';
  game.sounds.backgroundAudio.play();
  game.start();
};

};