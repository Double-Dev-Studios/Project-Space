//fondo
					
// fondos
	var bgSaturno = new Image()
	bgSaturno.src = "../../bg/saturno.png"

// variables de fondo
	var actualBG = bgSaturno
		
		var actualBGString = "bgSaturno"
	
	var bg = {
		offset: 400,
		speed: 0.09,
		minTemp: -50,
		tempAdd: -0.04
	}
	
// funciones de fondo
	function dibujarFondo(){
		ctx.drawImage(actualBG, bg.offset, 0,)
	}
						
	function actualizarFondo(){
		bg.offset -= (ship.speed / 2 * bg.speed)
	}
