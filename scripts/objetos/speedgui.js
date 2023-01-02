var sprSpeedGui = new Image()
var sprSpeed0 = new Image()
var sprSpeed1 = new Image()
var sprSpeed2 = new Image()
var sprSpeed3 = new Image()
var sprSpeed4 = new Image()
sprSpeed0.src = "../../sprites/speedgui/0.png"
sprSpeed1.src = "../../sprites/speedgui/1.png"
sprSpeed2.src = "../../sprites/speedgui/2.png"
sprSpeed3.src = "../../sprites/speedgui/3.png"
sprSpeed4.src = "../../sprites/speedgui/4.png"

sprSpeedGui = sprSpeed2 // velocidad media por defecto

var speedGui = {
  //original
  //x: canvas.width / 1.23,
  //y: 4 * gameScale,
  //bajo los escudos
  //x: 225,
  //y: 16 * gameScale,
  x: 8 * gameScale,
  y: canvas.height - 10 * gameScale,
  width: 32 * gameScale,
  height: 8 * gameScale,
  show: true
}

function dibujarSpeedGui(){
  if (speedGui.show){
    ctx.drawImage(sprSpeedGui, speedGui.x, speedGui.y, speedGui.width, speedGui.height)
  }
}

function actualizarSpeedGui(){
  speedGui.x = 8 * gameScale
  speedGui.y = canvas.height - 10 * gameScale
  sfxWind.pause()

  if (ship.speed <= 0.4){
    sprSpeedGui = sprSpeed0;
  } else if (ship.speed == 0.5){
    sprSpeedGui = sprSpeed1;
  } else if (ship.speed == 1.5){
    sprSpeedGui = sprSpeed2;
  } else if (ship.speed == 3){
    sprSpeedGui = sprSpeed3;
  } else if (ship.speed > 3){
    sprSpeedGui = sprSpeed4;
    useSFX(sfxWind)
  }
}
