//fondo

// fondos
	var bgSun = new Image()
	bgSun.src = "../../bg/sol.png"

	var bgLvlComplete = new Image()
	bgLvlComplete.src = "../../bg/lvlComplete.png"

// variables de fondo
	var actualBG = bgSun
	var actualBGString = "bgSun"
	
	var bg = {
		offset: 400,
		speed: 0.1,
		minTemp: 50,
		tempAdd: 0.1
	}

	var minOffset = -1050
				
// funciones de fondo
	function dibujarFondo(){
		if (actualBGString == "bgLvlComplete"){
			ctx.drawImage(actualBG, bg.offset, 0, canvas.width, canvas.height)
			ctx.fillStyle = "yellow";
			ctx.fillText("Sun", canvas.width / 2.5, canvas.height / 1.25)
		} else {
			ctx.drawImage(actualBG, bg.offset, 0,)
		}
	}
						
	function actualizarFondo(){
		bg.offset -= (ship.speed / 2 * bg.speed)

		if (bg.offset <= minOffset){
			endLevel()
			musicPause()
			musicStart()
			disableEnemies()
			cambiarBG()
		}
	}

	function endLevel(){

		if (actualBGString == "bgSun"){

			bg.offset = 0
			minOffset = -1
			actualBG = bgLvlComplete
			actualBGString = "bgLvlComplete"

			bg.speed = 0
			bg.minTemp = -99
			bg.tempAdd = 0
			ship.show = false
		}
	}

	function disableEnemies(){
		asteroidUse = false
		asteroid2Use = false
		miniAsteroidUse = false
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





    // DALE QUE ME CAGO QUEMANDOOOOOOOOO