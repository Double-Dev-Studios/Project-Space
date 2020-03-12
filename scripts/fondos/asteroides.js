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
		bg.offset -= (ship.speed / 2 * bg.speed)
	}
