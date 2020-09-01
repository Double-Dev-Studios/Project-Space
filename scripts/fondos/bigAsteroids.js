//fondo
					
// fondos
	var bgJupiter = new Image()
	bgJupiter.src = "../../bg/jupiter.png"

	var bgChallengeComplete = new Image()
	bgChallengeComplete.src = "../../bg/challengeComplete.png"

	var minOffset = -900

	actualChallenge = "bigAsteroids"

// variables de fondo
	var actualBG = bgJupiter
	var actualBGString = "bgJupiter"
	
	var bg = {
		offset: 300,
		speed: 0.07,
		minTemp: -50,
		tempAdd: -0.03
	}
	
// funciones de fondo
	function dibujarFondo(){
		if (actualBGString == "bgChallengeComplete"){
			ctx.drawImage(actualBG, bg.offset, 0, canvas.width, canvas.height)
			ctx.fillStyle = "yellow";
			ctx.fillText("Big Asteroids Challenge", 100, canvas.height / 1.25)
		} else {
			ctx.drawImage(actualBG, bg.offset, 0,)
		}
	}
						
	function actualizarFondo(){
		bg.offset -= (ship.speed / 2 * bg.speed)

		if (bg.offset <= minOffset){
			siguienteFondo()
			musicPause()
			musicStart()
			disableEnemies()
			cambiarBG()
		}
	}

	function siguienteFondo(){
		bg.offset = 0
		minOffset = -1
		actualBG = bgChallengeComplete
		actualBGString = "bgChallengeComplete"

		bg.speed = 0
		bg.minTemp = -99
		bg.tempAdd = 0
		ship.show = false
	}

	function disableEnemies(){
		asteroidUse = false
		asteroid2Use = false
		miniAsteroidUse = false
		sateliteUse = false
		sateliteSpecialUse = false
		lavaUse = false
		waterUse = false
		twisterUse = false
		fireAsteroidUse = false
		fireAsteroidAuraUse = false
		iceAsteroidUse = false
		iceAsteroidAuraUse = false
	}