//fondo
					
// fondos
	var bgEspacio = new Image()
	bgEspacio.src = "../../bg/espacio.png"

// variables de fondo
	var actualBG = bgEspacio
		
		var actualBGString = "bgEspacio"
	
	var bg = {
		offset: 0,
		speed: 0,
		minTemp: -99,
		tempAdd: 0
	}
	
// funciones de fondo
	function dibujarFondo(){
		ctx.drawImage(actualBG, bg.offset, 0,)
	}
						
	function actualizarFondo(){
		bg.offset -= (ship.speed / 2 * bg.speed)
	}
