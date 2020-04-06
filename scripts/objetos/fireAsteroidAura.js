// fire asteroid aura
					
	//sprites de fire asteroid aura
		var sprFireAsteroidAura = new Image()
		sprFireAsteroidAura.src = "../../sprites/fireAsteroid/aura.png"

		
	//variables de fire asteroid aura
		
		var fireAsteroidAuraUse = false
		
		var fireAsteroidAura = {
			x: canvas.width + 72,
			y: getRandomInt(40, canvas.height - 40),
			width: 50 * gameScale,
			height: 50 * gameScale,
			x2: this.width * gameScale + this.x,
			y2: this.height * gameScale + this.y,
			speedX: 1.5,
			hotLevel: 0.1,
			show: false
		}
		
		
		
	//funciones de fire asteroid aura
		function dibujarFireAsteroidAura(){
			
			if (fireAsteroidAura.show == true) {
				ctx.drawImage(sprFireAsteroidAura, fireAsteroidAura.x, fireAsteroidAura.y, fireAsteroidAura.width, fireAsteroidAura.height)
			}
		}
		
		
		function actualizarFireAsteroidAura(){
			if (fireAsteroidAuraUse == true) {
				
				fireAsteroidAura.x -= ship.speed
				
				fireAsteroidAura.x -= fireAsteroidAura.speedX
				
				fireAsteroidAura.x2 = fireAsteroidAura.width + fireAsteroidAura.x
				fireAsteroidAura.y2 = fireAsteroidAura.height + fireAsteroidAura.y
				
			} else {
				fireAsteroidAura.show = false
			}
		}
		
		
	
//fin de fire asteroid aura
