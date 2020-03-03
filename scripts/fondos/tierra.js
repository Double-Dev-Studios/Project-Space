//fondo
					
// fondos
	var bgTierra = new Image()
	bgTierra.src = "bg/tierra.png"

// variables de fondo
	var actualBG = bgTierra
		
		var actualBGString = "bgTierra"
	
	var bg = {
		offset: 0,
		speed: 0.05,
		minTemp: -30,
		tempAdd: 0
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
