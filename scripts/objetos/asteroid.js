
//asteroid
					
	//sprites de asteroid
		var sprAsteroidNormal = new Image()
		var sprAsteroidDestruct1 = new Image()
		var sprAsteroidDestruct2 = new Image()
		var sprAsteroidDestruct3 = new Image()
		var sprAsteroid = sprAsteroidNormal
		var sprAsteroidString = "sprAsteroidNormal"
		sprAsteroidNormal.src = "../../sprites/asteroid/normal.png"
		sprAsteroidDestruct1.src = "../../sprites/asteroid/destruct1.png"
		sprAsteroidDestruct2.src = "../../sprites/asteroid/destruct2.png"
		sprAsteroidDestruct3.src = "../../sprites/asteroid/destruct3.png"
		
	//variables de asteroid
		
		var contadorAsteroid = 20
		var asteroidDamaged = false
		
		var asteroidUse = false
		
		var asteroid = {
			x: canvas.width + 72,
			y: 200,
			width: 18 * gameScale,
			height: 18 * gameScale,
			x2: this.width * gameScale + this.x,
			y2: this.height * gameScale + this.y,
			speedX: 1,
			delayTime: 20,
			show: true
		}
		
		
		
	//funciones de asteroid
		function dibujarAsteroid(){
			
			if (asteroid.show == true) {
				ctx.drawImage(sprAsteroid, asteroid.x, asteroid.y, asteroid.width, asteroid.height)
			}
		}
		
		
		function actualizarAsteroid(){
			if (asteroidUse == true) {
					
				asteroid.x -= ship.speed
				
				asteroid.x -= asteroid.speedX
				
				asteroid.x2 = asteroid.width + asteroid.x
				asteroid.y2 = asteroid.height + asteroid.y
				
			} else {
				asteroid.show = false
			}
		}
		
		
		function asteroidDamage(){
			
			asteroidDamaged = true
			contadorAsteroid = asteroid.delayTime
			
			if (sprAsteroidString == "sprAsteroidNormal") {
				sprAsteroid = sprAsteroidDestruct1
				sprAsteroidString = "sprAsteroidDestruct1"
			} else {
				
				if (sprAsteroidString == "sprAsteroidDestruct1") {
					sprAsteroid = sprAsteroidDestruct2
					sprAsteroidString = "sprAsteroidDestruct2"
				} else {
					
					if (sprAsteroidString == "sprAsteroidDestruct2") {
						sprAsteroid = sprAsteroidDestruct3
						sprAsteroidString = "sprAsteroidDestruct3"
						
					} else {
						
						if (sprAsteroidString == "sprAsteroidDestruct3") {
							score.number += 3
							sprAsteroid = sprAsteroidNormal
							sprAsteroidString = "sprAsteroidNormal"
							asteroid.show = false
							
						}
					}
				}
			}
		}
	
//fin de asteroid



//asteroid 2
	
	//sprites de asteroid 2
		
		var sprAsteroid2 = sprAsteroidNormal
		var sprAsteroid2String = "sprAsteroidNormal"
						
	//variables de asteroid 2
		
		var contadorAsteroid2 = 20
		var asteroid2Damaged = false
		
		var asteroid2Use = false
		
		var asteroid2 = {
			x: canvas.width + getRandomInt(72, 72 * 7),
			y: getRandomInt(40, canvas.height - 40),
			width: 18 * gameScale,
			height: 18 * gameScale,
			x2: this.width * gameScale + this.x,
			y2: this.height * gameScale + this.y,
			speedX: 1,
			speedY: 0,
			delayTime: 20,
			show: true
		}
						
						
						
	//funciones de asteroid
		function dibujarAsteroid2(){
			
			if (asteroid2.show == true) {
				ctx.drawImage(sprAsteroid2, asteroid2.x, asteroid2.y, asteroid2.width, asteroid2.height)
			}
		}
		
		
		function actualizarAsteroid2(){
			if (asteroid2Use == true) {
			
				asteroid2.x -= ship.speed
				
				asteroid2.x -= asteroid2.speedX
				asteroid2.y += asteroid2.speedY
				
				asteroid2.x2 = asteroid2.width + asteroid2.x
				asteroid2.y2 = asteroid2.height + asteroid2.y
			
			}
		}
		
		
		function asteroid2Damage(){
			
			asteroid2Damaged = true
			contadorAsteroid2 = asteroid2.delayTime
			
			if (sprAsteroid2String == "sprAsteroidNormal") {
				sprAsteroid2 = sprAsteroidDestruct1
				sprAsteroid2String = "sprAsteroidDestruct1"
			} else {
				
				if (sprAsteroid2String == "sprAsteroidDestruct1") {
					sprAsteroid2 = sprAsteroidDestruct2
					sprAsteroid2String = "sprAsteroidDestruct2"
				} else {
					
					if (sprAsteroid2String == "sprAsteroidDestruct2") {
						sprAsteroid2 = sprAsteroidDestruct3
						sprAsteroid2String = "sprAsteroidDestruct3"
						
					} else {
						
						if (sprAsteroid2String == "sprAsteroidDestruct3") {
							score.number += 3
							sprAsteroid2 = sprAsteroidNormal
							sprAsteroid2String = "sprAsteroidNormal"
							asteroid2.show = false
							
						}
					}
				}
			}
		}
	
//fin de asteroid 2
