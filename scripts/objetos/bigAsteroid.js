
//bigAsteroid
					
	//sprites de bigAsteroid
		var sprBigAsteroidNormal = new Image()
		var sprBigAsteroidDestruct1 = new Image()
		var sprBigAsteroidDestruct2 = new Image()
		var sprBigAsteroidDestruct3 = new Image()
		var sprBigAsteroid = sprBigAsteroidNormal
		var sprBigAsteroidString = "sprBigAsteroidNormal"
		sprBigAsteroidNormal.src = "../../sprites/bigAsteroid/normal.png"
		sprBigAsteroidDestruct1.src = "../../sprites/bigAsteroid/destruct1.png"
		sprBigAsteroidDestruct2.src = "../../sprites/bigAsteroid/destruct2.png"
		sprBigAsteroidDestruct3.src = "../../sprites/bigAsteroid/destruct3.png"
		
	//variables de bigAsteroid
		
		var contadorBigAsteroid = 20
		var bigAsteroidDamaged = false
		
		var bigAsteroidUse = false
		
		var bigAsteroid = {
			x: canvas.width + 128 * getRandomInt(1, 4),
			y: getRandomInt(40, canvas.height - 40),
			width: 32 * gameScale,
			height: 32 * gameScale,
			x2: this.width * gameScale + this.x,
			y2: this.height * gameScale + this.y,
			speedX: 1,
			delayTime: 30,
			show: false
		}
		
		
		
	//funciones de bigAsteroid
		function dibujarBigAsteroid(){
			
			if (bigAsteroid.show == true) {
				ctx.drawImage(sprBigAsteroid, bigAsteroid.x, bigAsteroid.y, bigAsteroid.width, bigAsteroid.height)
			}
		}
		
		
		function actualizarBigAsteroid(){
			if (bigAsteroidUse == true) {
					
				bigAsteroid.x -= ship.speed
				
				bigAsteroid.x -= bigAsteroid.speedX
				
				bigAsteroid.x2 = bigAsteroid.width + bigAsteroid.x
				bigAsteroid.y2 = bigAsteroid.height + bigAsteroid.y
				
			} else {
				bigAsteroid.show = false
			}
		}
		
		
		function bigAsteroidDamage(){
			
			bigAsteroidDamaged = true
			contadorBigAsteroid = bigAsteroid.delayTime
			
			if (sprBigAsteroidString == "sprBigAsteroidNormal") {
				sprBigAsteroid = sprBigAsteroidDestruct1
				sprBigAsteroidString = "sprBigAsteroidDestruct1"
			} else {
				
				if (sprBigAsteroidString == "sprBigAsteroidDestruct1") {
					sprBigAsteroid = sprBigAsteroidDestruct2
					sprBigAsteroidString = "sprBigAsteroidDestruct2"
				} else {
					
					if (sprBigAsteroidString == "sprBigAsteroidDestruct2") {
						sprBigAsteroid = sprBigAsteroidDestruct3
						sprBigAsteroidString = "sprBigAsteroidDestruct3"
						
					} else {
						
						if (sprBigAsteroidString == "sprBigAsteroidDestruct3") {
							score.number += 3
							sprBigAsteroid = sprBigAsteroidNormal
							sprBigAsteroidString = "sprBigAsteroidNormal"
							bigAsteroid.show = false
							
							
						}
					}
				}
			}
		}
	
//fin de bigAsteroid

