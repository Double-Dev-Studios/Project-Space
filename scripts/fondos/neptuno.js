//fondo
					
// fondos
	var bgNeptuno = new Image()
	bgNeptuno.src = "../../bg/neptuno.png"

// variables de fondo
	var actualBG = bgNeptuno
		
		var actualBGString = "bgNeptuno"
	
	var bg = {
		offset: 400,
		speed: 0.09,
		minTemp: -50,
		tempAdd: -0.09
	}
	
// funciones de fondo
	function dibujarFondo(){
		ctx.drawImage(actualBG, bg.offset, 0,)
	}
						
	function actualizarFondo(){
		bg.offset -= (ship.speed / 2 * bg.speed)
	}
