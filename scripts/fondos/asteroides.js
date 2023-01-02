//fondo

// fondos
	var bgAsteroides = new Image()
	bgAsteroides.src = "../../bg/asteroides.png"

	var bgLvlComplete = new Image()
	bgLvlComplete.src = "../../bg/lvlComplete.png"

// variables de fondo
	var actualBG = bgAsteroides
	var actualBGString = "bgAsteroides"

	var bg = {
		offset: 0,
		speed: 0.1,
		minTemp: -90,
		tempAdd: 0
	}

	var minOffset = -1100

// funciones de fondo
	function dibujarFondo(){
		if (actualBGString == "bgLvlComplete"){
			ctx.drawImage(actualBG, bg.offset, 0, canvas.width, canvas.height)
			ctx.fillStyle = "yellow";
			ctx.fillText("Asteroid Belt", canvas.width / 3, canvas.height / 1.25)
		} else {
			ctx.drawImage(actualBG, 0, 0,)
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

			if (actualBGString == "bgAsteroides"){

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
			waterUse = false
			twisterUse = false
			fireAsteroidUse = false
			fireAsteroidAuraUse = false
			iceAsteroidUse = false
			iceAsteroidAuraUse = false
			bigAsteroidUse = false
		}
