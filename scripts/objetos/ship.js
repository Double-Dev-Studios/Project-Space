//SHIP


	// sprites de ship
		var sprShipNormal = new Image()
		var sprShipDmg = new Image()
		var sprShipExplosion = new Image()
		var sprShipHP = new Image()
		sprShipNormal.src = "../../sprites/ship/ship.png"
		sprShipDmg.src = "../../sprites/ship/shipDmg.png"
		sprShipExplosion.src = "../../sprites/ship/explosion.png"
		sprShipHP.src = "../../sprites/ship/shipHP.png"

		sprShip = sprShipNormal
		sprShipString = "sprShipNormal"

	// variables de ship

		shipDamaged = false
		var contadorExplosion;

		var ship = {
			x: canvas.width / 2,
			y: canvas.height / 2,
			speedX: 0,
			speedY: 0,
			width: 16 * gameScale,
			height: 16 * gameScale,
			speed: 1.5,
			show: true,

			leftKey: 0,
			rightKey: 0,
			upKey: 0,
			downKey: 0
		}

	// hitbox de ship
		var shipHitbox = {
			x: ship.x + 8,
			y: ship.y + 20,
			width: 27, //desde 8 hasta 35
			height: 27, //desde 20 hasta 47
			x2: this.width + this.x,
			y2: this.height + this.y
		}

	// funciones de ship
		function dibujarShip(){
			if (ship.show == true){
				ctx.drawImage(sprShip, ship.x, ship.y, ship.width, ship.height)
			}
		}

		function actualizarShip(){
			if (ship.show == true){
				ship.speedX = ship.rightKey - ship.leftKey
				ship.speedY = ship.downKey - ship.upKey

				ship.x += ship.speedX
				ship.y += ship.speedY
				ship.x -= ship.speed


				//velocidad normal o rapida
				if (ship.speed >= 1.5){
					temp.value += bg.tempAdd
				}
			}

			if (ship.show == true){
				//velocidad menor que normal
				if (ship.speed < 1.5){
					//temperaura mayor que minima
					if (bg.minTemp < temp.realValue){

						if (bg.tempAdd <= -0.5){
							temp.value -= 0.11
						} else {

							if (bg.tempAdd > 0){
								temp.value -= 0.05

							} else {
								temp.value -= 0.1
							}
						}

					//temperatura menor que minima
					} else {


						if (bg.tempAdd > 0){
							temp.value -= 0.01
						} else {
							temp.value -= 0.1
						}
					}
				}
			}

			//hitbox
			shipHitbox.x = ship.x + 8,
			shipHitbox.y = ship.y + 20,
			shipHitbox.x2 = shipHitbox.width + shipHitbox.x,
			shipHitbox.y2 = shipHitbox.height + shipHitbox.y
		}

		function shipDamage() {
			if (contadorShield <= 0) {

				if (sprShield == sprShield5) {
					sprShip = sprShipDmg

					sprShield = sprShield4
					sprShieldString = 4
				}

				else if (sprShield == sprShield4) {
					sprShip = sprShipDmg

					sprShield = sprShield3
					sprShieldString = 3
				}

				else if (sprShield == sprShield3) {
					sprShip = sprShipDmg

					sprShield = sprShield2
					sprShieldString = 2
				}

				else if (sprShield == sprShield2) {
					sprShip = sprShipDmg

					sprShield = sprShield1
					sprShieldString = 1
				}

				else if (sprShield == sprShield1) {
					sprShip = sprShipExplosion
					useExplosionSFX()

					sprShield = sprShield0
					sprShieldString = 0
					ship.speed = 0
					particles.use = false
					particles.show = false

					contadorExplosion = 15
				}
				useHitSFX()
				contadorShield = 30
				shipDamaged = true
			}

		}


		function shipKill() {
			sprShip = sprShipExplosion
			useExplosionSFX()

			sprShield = sprShield0
			sprShieldString = "sprShield0"
			ship.speed = 0
			particles.use = false
			particles.show = false

			contadorExplosion = 10

		}


		//Game Over

		var gameoverShow = false
		var sprGameover = new Image()
		sprGameover.src = "../../menu/gameover.png"

		var gameOverText = "no flaco";

		switch (getRandomInt(1, 10)){
			default:
				gameOverText = "Nope."
				break
			case 1:
				gameOverText = "Try harder next time."
				break
			case 2:
				gameOverText = "That didn't work."
				break
			case 3:
				gameOverText = "Next time try to stay at 0 ºC."
				break
			case 4:
				gameOverText = "Oh."
				break
			case 5:
				gameOverText = "Ah."
				break
			case 6:
				gameOverText = "Too bad."
				break
			case 7:
				gameOverText = "At least you didn't... nvm."
				break
			case 8:
				gameOverText = "Get owned."
				break
			case 9:
				gameOverText = "Can you don't?"
				break
			case 10:
				gameOverText = "Noooooooooooo"
				break
		}

		function dibujarGameover(){
			if (gameoverShow == true){
				ctx.drawImage(sprGameover, 0, 0, canvas.width, canvas.height)
				ctx.font = "50px Arial"
				ctx.fillStyle = "white";
				ctx.fillText(gameOverText, canvas.width / 5, canvas.height / 1.25)
			}
		}



		function shipGAMEOVER(){
			//alert("G A M E  O V E R")
			ship.show = false
			ship.use = false
			ship.speed = 0
			tutorial.show = false
			gameoverShow = true

			contadorExplosion = "NULL"
		}

// PAUSA

	var sprPauseScreen = new Image()
	sprPauseScreen.src = "../../menu/pausescreen.png"

	function drawPauseScreen(){
		ctx.drawImage(sprPauseScreen, 0, 0, canvas.width, canvas.height)
	}




//fin de SHIP





//SHIELD

	//sprites de shield
	var sprShield0 = new Image()
	var sprShield1 = new Image()
	var sprShield2 = new Image()
	var sprShield3 = new Image()
	var sprShield4 = new Image()
	var sprShield5 = new Image()
	sprShield0.src = "../../sprites/shield/0.png"
	sprShield1.src = "../../sprites/shield/1.png"
	sprShield2.src = "../../sprites/shield/2.png"
	sprShield3.src = "../../sprites/shield/3.png"
	sprShield4.src = "../../sprites/shield/4.png"
	sprShield5.src = "../../sprites/shield/5.png"

	var sprShield = sprShield5
	var sprShieldString = 5

	//variables de shield

	var contadorShield = 30

	var shield = {
		x: 200,
		y: 16,
		show: true
	}

	//funciones de shield

	function dibujarShield() {
		if (shield.show == true){
			ctx.drawImage(sprShield, shield.x, shield.y,)
		}
	}

	function oneActualizarShield() {
		if (sprShieldString == 5){ sprShield = sprShield5 }
		if (sprShieldString == 4){ sprShield = sprShield4 }
		if (sprShieldString == 3){ sprShield = sprShield3 }
		if (sprShieldString == 2){ sprShield = sprShield2 }
		if (sprShieldString == 1){ sprShield = sprShield1 }
		if (sprShieldString == 0){ sprShield = sprShield0 }
	}




//fin de SHIELD



//PARTICLES

	//sprites de particles

	var sprParticles1 = new Image()
	var sprParticles2 = new Image()
	var sprParticlesBlue1 = new Image()
	var sprParticlesBlue2 = new Image()
	sprParticles1.src = "../../sprites/ship/particles.png"
	sprParticles2.src = "../../sprites/ship/particles2.png"
	sprParticlesBlue1.src = "../../sprites/ship/particlesBlue.png"
	sprParticlesBlue2.src = "../../sprites/ship/particlesBlue2.png"


	var sprParticles = sprParticles1
	var sprParticlesString = "sprParticles1"


	//variables de particles

	var contadorParticles = 13

	var particles = {
		x: ship.x -64,
		y: ship.y,
		blue: false,
		show: false,
		use: true
	}


//funciones de particles

	function dibujarParticles() {
		if (particles.show == true) {
			ctx.drawImage(sprParticles, particles.x, particles.y)
		}
	}

	function actualizarParticles() {
		if (particles.show == true) {

			particles.x = ship.x -64
			particles.y = ship.y

			/*if (ship.speedX == 0) {
				particles.show = false
			}*/


			if (particles.use == false) {
				particles.show = false
			}

			if (ship.speed >= 4.5){
				particles.blue = true
				temp.value += fireAsteroid.hotLevel
			} else {
				particles.blue = false
			}

		}
	}


//fin de PARTICLES

// Pseudo TUTORIAL

var sprTutorial = new Image()
sprTutorial.src = "../../sprites/ship/tutorial.png"

var tutorial = {
  x: ship.x + 20 * gameScale,
  y: ship.y - 32 * gameScale,
  width: 64 * gameScale,
  height: 64 * gameScale,
  show: false
}

function dibujarTutorial(){
  if (tutorial.show){
    ctx.drawImage(sprTutorial, tutorial.x, tutorial.y, tutorial.width, tutorial.height)
  }
}

function actualizarTutorial(){
  if (tutorial.show){
    tutorial.x = ship.x + 20 * gameScale
    tutorial.y = ship.y - 32 * gameScale
  }
}
