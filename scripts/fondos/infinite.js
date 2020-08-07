//fondo
					
// fondos
	
	var bgTierra = new Image()
	bgTierra.src = "../../bg/tierra.png"

	var bgLuna = new Image()
	bgLuna.src = "../../bg/luna.png"

	var bgVenus = new Image()
	bgVenus.src = "../../bg/venus.png"

	var bgMarte = new Image()
	bgMarte.src = "../../bg/marte.png"

	var bgJupiter = new Image()
	bgJupiter.src = "../../bg/jupiter.png"

	var bgSaturno = new Image()
	bgSaturno.src = "../../bg/saturno.png"

	var bgUrano = new Image()
	bgUrano.src = "../../bg/urano.png"

	var bgNeptuno = new Image()
	bgNeptuno.src = "../../bg/neptuno.png"

	var bgChallengeComplete = new Image()
	bgChallengeComplete.src = "../../bg/challengeComplete.png"

	//tierra = -550
	var minOffset = -550

// variables de fondo
	var actualBG = bgTierra
	var actualBGString = "bgTierra"
	
	var bg = {
		offset: 0,
		speed: 0.1,
		minTemp: -30,
		tempAdd: 0.00
	}
	
// funciones de fondo
	function dibujarFondo(){
		if (actualBGString == "bgChallengeComplete"){
			ctx.drawImage(actualBG, bg.offset, 0, canvas.width, canvas.height)
			ctx.fillStyle = "yellow";
			ctx.fillText("Space Machines Challenge", 100, canvas.height / 1.25)
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

		if (actualBGString == "bgNeptuno"){ //cambia a saturno

			bg.offset = 0
			minOffset = -1
			actualBG = bgChallengeComplete
			actualBGString = "bgChallengeComplete"

			bg.speed = 0
			bg.minTemp = -99
			bg.tempAdd = 0
			ship.show = false
		}

		if (actualBGString == "bgUrano"){ //cambia a saturno

			bg.offset = 950
			minOffset = -900
			actualBG = bgNeptuno
			actualBGString = "bgNeptuno"

			bg.speed = 0.09
			bg.minTemp = -50
			bg.tempAdd = -0.09
		}

		if (actualBGString == "bgSaturno"){ //cambia a saturno

			bg.offset = 950
			minOffset = -900
			actualBG = bgUrano
			actualBGString = "bgUrano"

			bg.speed = 0.09
			bg.minTemp = -50
			bg.tempAdd = -0.08
		}

		if (actualBGString == "bgJupiter"){ //cambia a saturno

			bg.offset = 950
			minOffset = -900
			actualBG = bgSaturno
			actualBGString = "bgSaturno"

			bg.speed = 0.09
			bg.minTemp = -50
			bg.tempAdd = -0.04
		}

		if (actualBGString == "bgMarte"){ //cambia a jupiter salteando nivel estatico

			bg.offset = 950
			minOffset = -900
			actualBG = bgJupiter
			actualBGString = "bgJupiter"

			bg.speed = 0.07
			bg.minTemp = -50
			bg.tempAdd = -0.03
		}

		if (actualBGString == "bgVenus"){ //cambia a marte

			bg.offset = 950
			minOffset = -900
			actualBG = bgMarte
			actualBGString = "bgMarte"

			bg.speed = 0.1
			bg.minTemp = -20
			bg.tempAdd = 0
		}

		if (actualBGString == "bgLuna"){ //cambia a venus

			bg.offset = 750
			minOffset = -900
			actualBG = bgVenus
			actualBGString = "bgVenus"

			bg.speed = 0.1
			bg.minTemp = -10
			bg.tempAdd = 0.03
		}

		if (actualBGString == "bgTierra"){ //cambia a luna

			bg.offset = 900
			minOffset = -850
			actualBG = bgLuna
			actualBGString = "bgLuna"

			bg.speed = 0.2
			bg.minTemp = -40
			bg.tempAdd = 0
		}

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
