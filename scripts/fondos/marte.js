//fondo
					
// fondos
	var bgMarte = new Image()
	bgMarte.src = "bg/marte.png"

// variables de fondo
	var actualBG = bgMarte
		
		var actualBGString = "bgMarte"
	
	var bg = {
		offset: 200,
		speed: 0.1
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
		
		if (ship.speed >= 4.5) {
			bg.offset -= (bg.speed * 3)
		}
	}
