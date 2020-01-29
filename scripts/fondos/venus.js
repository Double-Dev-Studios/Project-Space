//fondo
					
// fondos
	var bgTierra = new Image()
	var bgLuna = new Image()
	var bgVenus = new Image()
	bgTierra.src = "bg/tierra.png"
	bgLuna.src = "bg/luna.png"
	bgVenus.src = "bg/venus.png"

// variables de fondo
	var actualBG = bgVenus
		
		var actualBGString = "bgVenus"
	
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
	}
