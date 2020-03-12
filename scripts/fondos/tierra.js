//fondo
					
// fondos
	var bgTierra = new Image()
	bgTierra.src = "bg/tierra.png"

// variables de fondo
	var actualBG = bgTierra
		
		var actualBGString = "bgTierra"
	
	var bg = {
		offset: 0,
		speed: 0.05,
		minTemp: -30,
		tempAdd: 0
	}
				
// funciones de fondo
	function dibujarFondo(){
		ctx.drawImage(actualBG, bg.offset, 0,)
	}
						
	function actualizarFondo(){
		bg.offset -= (ship.speed / 2 * bg.speed)
	}
