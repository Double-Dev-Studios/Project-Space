//fondo
					
// fondos
	var bgJupiter = new Image()
	bgJupiter.src = "bg/jupiter.png"

// variables de fondo
	var actualBG = bgJupiter
		
		var actualBGString = "bgJupiter"
	
	var bg = {
		offset: 200,
		speed: 0.1,
		minTemp: -50,
		tempAdd: -0.03
	}
	
// funciones de fondo
	function dibujarFondo(){
		ctx.drawImage(actualBG, bg.offset, 0,)
	}
						
	function actualizarFondo(){
		if (ship.speed == 1.5) {
			bg.offset -= bg.speed
		}
		if (ship.speed == 3) {
			bg.offset -= (bg.speed * 2)
		}
	}
