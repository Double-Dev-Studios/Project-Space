//fondo

// fondos

	var bgFobos = new Image()
	bgFobos.src = "../../bg/fobos.png"

	var bgDeimos = new Image()
	bgDeimos.src = "../../bg/deimos.png"

	var bgMercurio = new Image()
	bgMercurio.src = "../../bg/mercurio.png"

	var bgEuropa = new Image()
	bgEuropa.src = "../../bg/europa.png"

	var bgIo = new Image()
	bgIo.src = "../../bg/io.png"

	var bgTitan = new Image()
	bgTitan.src = "../../bg/titan.png"

	var bgTitania = new Image()
	bgTitania.src = "../../bg/titania.png"

	var bgPluton = new Image()
	bgPluton.src = "../../bg/pluton.png"

    var bgTriton = new Image()
	bgTriton.src = "../../bg/Triton.png"

    var bgSun = new Image()
	bgSun.src = "../../bg/Sol.png"

	var bgChallengeComplete = new Image()
	bgChallengeComplete.src = "../../bg/challengeComplete.png"

	//fobos = -400
	var minOffset = -400

	actualChallenge = "infinite"

// variables de fondo
	var actualBG = bgFobos
	var actualBGString = "bgFobos"

	var bg = {
		offset: 550,
		speed: 0.15,
		minTemp: -40,
		tempAdd: -0.01
	}

// funciones de fondo
	function dibujarFondo(){
		if (actualBGString == "bgChallengeComplete"){
			ctx.drawImage(actualBG, bg.offset, 0, canvas.width, canvas.height)
			ctx.fillStyle = "yellow";
			ctx.fillText("The Lost Levels Challenge", 100, canvas.height / 1.25)
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

		if (actualBGString == "bgSun"){ //cambia a challenge complete

			bg.offset = 0
			minOffset = -1
			actualBG = bgChallengeComplete
			actualBGString = "bgChallengeComplete"

			bg.speed = 0
			bg.minTemp = -99
			bg.tempAdd = 0
			ship.show = false
		}

        if (actualBGString == "bgTriton"){ //cambia a sol

			bg.offset = 900
			minOffset = -1050
			actualBG = bgSun
			actualBGString = "bgSun"

			bg.speed = 0.1
			bg.minTemp = 50
			bg.tempAdd = 0.1
		}

        if (actualBGString == "bgPluton"){ //cambia a triton

			bg.offset = 750
			minOffset = -900
			actualBG = bgTriton
			actualBGString = "bgTriton"

			bg.speed = 0.1
			bg.minTemp = -90
			bg.tempAdd = -0.073
		}

		if (actualBGString == "bgTitania"){ //cambia a pluto

			bg.offset = 700
			minOffset = -900
			actualBG = bgPluton
			actualBGString = "bgPluton"

			bg.speed = 0.1
			bg.minTemp = -60
			bg.tempAdd = -0.05
		}

		if (actualBGString == "bgTitan"){ //cambia a titania

			bg.offset = 700
			minOffset = -800
			actualBG = bgTitania
			actualBGString = "bgTitania"

			bg.speed = 0.1
			bg.minTemp = -90
			bg.tempAdd = -0.03
		}

		if (actualBGString == "bgIo"){ //cambia a titan

			bg.offset = 800
			minOffset = -800
			actualBG = bgTitan
			actualBGString = "bgTitan"

			bg.speed = 0.2
			bg.minTemp = -90
			bg.tempAdd = -0.04
		}

		if (actualBGString == "bgEuropa"){ //cambia a io

			bg.offset = 800
			minOffset = -450
			actualBG = bgIo
			actualBGString = "bgIo"

			bg.speed = 0.2
			bg.minTemp = -90
			bg.tempAdd = 0.05
		}

		if (actualBGString == "bgMercurio"){ //cambia a europa

			bg.offset = 800
			minOffset = -800
			actualBG = bgEuropa
			actualBGString = "bgEuropa"

			bg.speed = 0.1
			bg.minTemp = -90
			bg.tempAdd = -0.06
		}

		if (actualBGString == "bgDeimos"){ //cambia a mercurio

			bg.offset = 750
			minOffset = -500
			actualBG = bgMercurio
			actualBGString = "bgMercurio"

			bg.speed = 0.1
			bg.minTemp = -10
			bg.tempAdd = 0.05
		}

		if (actualBGString == "bgFobos"){ //cambia a deimos

			bg.offset = 800
			minOffset = -400
			actualBG = bgDeimos
			actualBGString = "bgDeimos"

			bg.speed = 0.12
			bg.minTemp = -40
			bg.tempAdd = -0.03
		}
	}

	// for progressbar
	var totalOffset = 13601

	function disableEnemies(){
		asteroidUse = false
		asteroid2Use = false
		miniAsteroidUse = false
		bigAsteroidUse = false
		sateliteUse = false
		sateliteSpecialUse = false
		lavaUse = false
        lavaRUse = false
		waterUse = false
		twisterUse = false
		fireAsteroidUse = false
		fireAsteroidAuraUse = false
		iceAsteroidUse = false
		iceAsteroidAuraUse = false
	}
