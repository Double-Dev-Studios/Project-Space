//fondo
					
// fondos
	var bgUrano = new Image()
	bgUrano.src = "../../bg/urano.png"

// variables de fondo
	var actualBG = bgUrano
		
		var actualBGString = "bgUrano"
	
	var bg = {
		offset: 400,
		speed: 0.09,
		minTemp: -50,
		tempAdd: -0.08
	}
	
// funciones de fondo
	function dibujarFondo(){
		ctx.drawImage(actualBG, bg.offset, 0,)
	}
						
	function actualizarFondo(){
		bg.offset -= (ship.speed / 2 * bg.speed)
	}
