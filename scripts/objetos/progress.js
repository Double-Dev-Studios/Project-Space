// progress bar

var sprProgressNo = new Image()
var sprProgressYes = new Image()
var sprProgressPoint = new Image()
sprProgressNo.src = "../../sprites/progressbar/progressNo.png"
sprProgressYes.src = "../../sprites/progressbar/progressYes.png"
sprProgressPoint.src = "../../sprites/progressbar/progressPoint.png"

var progress = {
  x: canvas.width / 4,
  y: canvas.height - (7 * gameScale),
  width: 0,
  height: 6 * gameScale,
  pointWidth: 8 * gameScale,
  pointHeight: 8 * gameScale
}

if (actualChallenge !== "infinite"){
  var totalOffset = bg.offset - minOffset
}

function dibujarProgress(){
  //ctx.fillStyle = "gray";
  //ctx.fillRect(progress.x, progress.y, 550, progress.height)
  ctx.drawImage(sprProgressNo, progress.x, progress.y, 550, progress.height)

  //ctx.fillStyle = "white";
  //ctx.fillRect(progress.x, progress.y, progress.width, progress.height)
  ctx.drawImage(sprProgressYes, progress.x, progress.y, progress.width, progress.height)

  ctx.fillStyle = "white";
  ctx.fillRect(progress.x - 1 * gameScale, progress.y + 1 * gameScale, 1 * gameScale, 4 * gameScale)
  ctx.fillRect(progress.x + 550, progress.y + 1 * gameScale, 1 * gameScale, 4 * gameScale)

  ctx.fillStyle = "black";
  ctx.fillRect(progress.x, progress.y + 2 * gameScale, 1 * gameScale, 2 * gameScale)
  ctx.fillRect(progress.x + 546, progress.y + 2 * gameScale, 1 * gameScale, 2 * gameScale)

  // point
  ctx.drawImage(sprProgressPoint, progress.x + progress.width, progress.y - (1 * gameScale), progress.pointWidth, progress.pointHeight)
}

function actualizarProgress(){
  progress.x = canvas.width / 4
  progress.y = canvas.height - (7 * gameScale)
  progress.width += (ship.speed / 2 * bg.speed) / totalOffset * 550
}
