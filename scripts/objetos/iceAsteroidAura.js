// ice asteroid aura
					
	//sprites de ice asteroid aura
		var sprIceAsteroidAura = new Image()
		sprIceAsteroidAura.src = "../../sprites/iceAsteroid/aura.png"
		
	//variables de ice asteroid aura
		
		var contadorIceAsteroidAura = 20
		
		var iceAsteroidAuraUse = false
		
		var iceAsteroidAura = {
			x: canvas.width + 128 * getRandomInt(1, 5),
			y: getRandomInt(256, canvas.height - 256),
			width: 64 * gameScale,
			height: 64 * gameScale,
			x2: this.width + this.x,
			y2: this.height + this.y,
			speedX: 0.8,
			show: false
		}
		
		
	//funciones de ice asteroid aura
		function dibujarIceAsteroidAura(){
			
			if (iceAsteroidAura.show == true) {
					ctx.drawImage(sprIceAsteroidAura, iceAsteroidAura.x, iceAsteroidAura.y, iceAsteroidAura.width, iceAsteroidAura.height)
			}
		}
		
		
		function actualizarIceAsteroidAura(){
			if (iceAsteroidAuraUse == true) {
					
				iceAsteroidAura.x -= ship.speed
				
				iceAsteroidAura.x -= iceAsteroidAura.speedX
				
				iceAsteroidAura.x2 = iceAsteroidAura.width + iceAsteroidAura.x
				iceAsteroidAura.y2 = iceAsteroidAura.height + iceAsteroidAura.y
					
			} else {
				iceAsteroidAura.show = false
			}
		}
	
//fin de ice asteroid aura
