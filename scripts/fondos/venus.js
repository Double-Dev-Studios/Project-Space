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
		minTemp: -5,
		tempAdd: 0.03
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
