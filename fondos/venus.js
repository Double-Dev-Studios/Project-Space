//fondo
					
// fondos
	var bgVenus = new Image()
	bgVenus.src = "bg/venus.png"

// variables de fondo
	var actualBG = bgVenus
		
		var actualBGString = "bgVenus"
	
	var bg = {
		offset: 200,
		speed: 0.1,
		minTemp: -10,
		tempAdd: 0.03
	}
	
// funciones de fondo
	function dibujarFondo(){
		ctx.drawImage(actualBG, bg.offset, 0,)
	}
						
	function actualizarFondo(){
		bg.offset -= (ship.speed / 2 * bg.speed)
	}
