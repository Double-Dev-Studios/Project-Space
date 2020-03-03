//fondo
					
// fondos
	var bgAsteroides = new Image()
	bgAsteroides.src = "bg/asteroides.png"

// variables de fondo
	var actualBG = bgAsteroides
	var actualBGString = "bgAsteroides"
	
	var bg = {
		offset: 0,
		speed: 0,
		minTemp: -90,
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
		
		if (ship.speed >= 4.5) {
			bg.offset -= (bg.speed * 3)
		}
	}
