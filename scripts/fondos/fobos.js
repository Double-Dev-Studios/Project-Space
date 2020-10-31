//fondo
					
// fondos
	var bgFobos = new Image()
	bgFobos.src = "../../bg/fobos.png"

// variables de fondo
	var actualBG = bgFobos
	var actualBGString = "bgFobos"
	
	var bg = {
		offset: 500,
		speed: 0.15,
		minTemp: -40,
		tempAdd: -0.01
	}
				
// funciones de fondo
	function dibujarFondo(){
		ctx.drawImage(actualBG, bg.offset, 0,)
	}
						
	function actualizarFondo(){
		bg.offset -= (ship.speed / 2 * bg.speed)
		
	}
