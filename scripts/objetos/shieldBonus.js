//shield bonus

var shieldBonus = {
  x: 0,
  y: 0,
  width: 10 * gameScale,
  height: 10 * gameScale,
  show: false
}

var shieldBonusHitbox = {
  x: shieldBonus.x,
  y: shieldBonus.y,
  width: 10 * gameScale,
  height: 10 * gameScale,
  x2: this.width + this.x,
  y2: this.height + this.y
}

var sprShieldBonus = new Image()
sprShieldBonus.src = "../../sprites/ship/life.png"

//funciones

function dibujarShieldBonus(){
  if (shieldBonus.show){
    ctx.drawImage(sprShieldBonus, shieldBonus.x, shieldBonus.y, shieldBonus.width, shieldBonus.height)
  }
}

function actualizarShieldBonus(){
  shieldBonusHitbox.x = shieldBonus.x
  shieldBonusHitbox.y = shieldBonus.y
  shieldBonusHitbox.x2 = shieldBonusHitbox.width + shieldBonusHitbox.x
  shieldBonusHitbox.y2 = shieldBonusHitbox.height + shieldBonusHitbox.y

  shieldBonus.x -= ship.speed
}

function touchShieldBonus(){
  shieldBonus.show = false
  useSFX(sfxShield)
  sprShieldString += 1
  contadorShield = 30
  sprShip = sprShipHP
  sprShipString = "sprShipHP"
  oneActualizarShield()
}
