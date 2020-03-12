//fondo
					
// fondos
	var bgJupiter = new Image()
	bgJupiter.src = "bg/jupiter.png"

// variables de fondo
	var actualBG = bgJupiter
		
		var actualBGString = "bgJupiter"
	
	var bg = {
		offset: 200,
		speed: 0.07,
		minTemp: -50,
		tempAdd: -0.03
	}
	
// funciones de fondo
	function dibujarFondo(){
		ctx.drawImage(actualBG, bg.offset, 0,)
	}
						
	function actualizarFondo(){
		bg.offset -= (ship.speed / 2 * bg.speed)
	}
