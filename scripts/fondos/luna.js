//fondo
					
// fondos
	var bgLuna = new Image()
	bgLuna.src = "../../bg/luna.png"

// variables de fondo
	var actualBG = bgLuna
		
		var actualBGString = "bgLuna"
	
	var bg = {
		offset: 200,
		speed: 0.2,
		minTemp: -40,
		tempAdd: 0
	}
				
// funciones de fondo
	function dibujarFondo(){
		ctx.drawImage(actualBG, bg.offset, 0,)
	}
						
	function actualizarFondo(){
		bg.offset -= (ship.speed / 2 * bg.speed)
		
	}
