//fondo
					
// fondos
	var bgLuna = new Image()
	bgLuna.src = "bg/luna.png"

// variables de fondo
	var actualBG = bgLuna
		
		var actualBGString = "bgLuna"
	
	var bg = {
		offset: 200,
		speed: 0.2
	}
				
// funciones de fondo
	function dibujarFondo(){
		ctx.drawImage(actualBG, bg.offset, 0,)
	}
						
	function actualizarFondo(){
		if (ship.speed == 1.5) {
			bg.offset -= bg.speed
		}
		if (ship.speed == 3) {
			bg.offset -= (bg.speed * 2)
		}
		
	}
