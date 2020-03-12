//fondo
					
// fondos
	var bgMarte = new Image()
	bgMarte.src = "bg/marte.png"

// variables de fondo
	var actualBG = bgMarte
		
		var actualBGString = "bgMarte"
	
	var bg = {
		offset: 200,
		speed: 0.1,
		minTemp: -20,
		tempAdd: 0
	}
				
// funciones de fondo
	function dibujarFondo(){
		ctx.drawImage(actualBG, bg.offset, 0,)
	}
						
	function actualizarFondo(){
		bg.offset -= (ship.speed / 2 * bg.speed)
	}
