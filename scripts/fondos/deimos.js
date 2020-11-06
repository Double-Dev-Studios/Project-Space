//fondo
					
// fondos
	var bgDeimos = new Image()
	bgDeimos.src = "../../bg/deimos.png"

// variables de fondo
	var actualBG = bgDeimos
	var actualBGString = "bgDeimos"
	
	var bg = {
		offset: 500,
		speed: 0.12,
		minTemp: -40,
		tempAdd: -0.03
	}
				
// funciones de fondo
	function dibujarFondo(){
		ctx.drawImage(actualBG, bg.offset, 0,)
	}
						
	function actualizarFondo(){
		bg.offset -= (ship.speed / 2 * bg.speed)
		
	}
