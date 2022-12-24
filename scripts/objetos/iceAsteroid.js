// ice asteroid
					
	//sprites de ice asteroid
		var sprIceAsteroidNormal = new Image()
		var sprIceAsteroidDestruct1 = new Image()
		var sprIceAsteroidDestruct2 = new Image()
		var sprIceAsteroidDestruct3 = new Image()
		var sprIceAsteroid = sprIceAsteroidNormal
		var sprIceAsteroidString = "sprIceAsteroidNormal"
		sprIceAsteroidNormal.src = "../../sprites/iceAsteroid/normal.png"
		sprIceAsteroidDestruct1.src = "../../sprites/iceAsteroid/destruct1.png"
		sprIceAsteroidDestruct2.src = "../../sprites/iceAsteroid/destruct2.png"
		sprIceAsteroidDestruct3.src = "../../sprites/iceAsteroid/destruct3.png"
		
	//variables de ice asteroid
		
		
		var iceAsteroidDamaged = false
		var iceAsteroidUse = false
		
		var iceAsteroid = {
			x: canvas.width + 72 * getRandomInt(1, 5),
			y: getRandomInt(40, canvas.height - 40),
			width: 18 * gameScale,
			height: 18 * gameScale,
			x2: this.width + this.x,
			y2: this.height + this.y,
			speedX: 0.7,
			hitDelay: 8,
			show: false
		}

		var contadorIceAsteroid = iceAsteroid.hitDelay;
		
		
	//funciones de ice asteroid
		function dibujarIceAsteroid(){
			
			if (iceAsteroid.show == true) {
					ctx.drawImage(sprIceAsteroid, iceAsteroid.x, iceAsteroid.y, iceAsteroid.width, iceAsteroid.height)
			}
		}
		
		
		function actualizarIceAsteroid(){
			if (iceAsteroidUse == true) {
					
				iceAsteroid.x -= ship.speed
				
				iceAsteroid.x -= iceAsteroid.speedX
				
				iceAsteroid.x2 = iceAsteroid.width + iceAsteroid.x
				iceAsteroid.y2 = iceAsteroid.height + iceAsteroid.y
					
			} else {
				iceAsteroid.show = false
			}
		}
		
		
		function iceAsteroidDamage(){
			
			iceAsteroidDamaged = true
			contadorIceAsteroid = iceAsteroid.hitDelay
			
			if (sprIceAsteroidString == "sprIceAsteroidNormal") {
				sprIceAsteroid = sprIceAsteroidDestruct1
				sprIceAsteroidString = "sprIceAsteroidDestruct1"
			} else {
				
				if (sprIceAsteroidString == "sprIceAsteroidDestruct1") {
					sprIceAsteroid = sprIceAsteroidDestruct2
					sprIceAsteroidString = "sprIceAsteroidDestruct2"
				} else {
					
					if (sprIceAsteroidString == "sprIceAsteroidDestruct2") {
						sprIceAsteroid = sprIceAsteroidDestruct3
						sprIceAsteroidString = "sprIceAsteroidDestruct3"
						
					} else {
						
						if (sprIceAsteroidString == "sprIceAsteroidDestruct3") {
							score.number += 3
							sprIceAsteroid = sprIceAsteroidNormal
							sprIceAsteroidString = "sprIceAsteroidNormal"
							iceAsteroid.show = false
							
						}
					}
				}
			}
		}
	
//fin de ice asteroid
