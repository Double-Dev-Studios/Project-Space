// fire asteroid

	//sprites de fire asteroid
		var sprFireAsteroidNormal = new Image()
		var sprFireAsteroidDestruct1 = new Image()
		var sprFireAsteroidDestruct2 = new Image()
		var sprFireAsteroidDestruct3 = new Image()
		var sprFireAsteroid = sprFireAsteroidNormal
		var sprFireAsteroidString = "sprFireAsteroidNormal"
		sprFireAsteroidNormal.src = "../../sprites/fireAsteroid/normal.png"
		sprFireAsteroidDestruct1.src = "../../sprites/fireAsteroid/destruct1.png"
		sprFireAsteroidDestruct2.src = "../../sprites/fireAsteroid/destruct2.png"
		sprFireAsteroidDestruct3.src = "../../sprites/fireAsteroid/destruct3.png"

	//variables de fire asteroid


		var fireAsteroidDamaged = false
		var fireAsteroidUse = false

		var fireAsteroid = {
			x: canvas.width + 72,
			y: getRandomInt(40, canvas.height - 40),
			width: 18 * gameScale,
			height: 18 * gameScale,
			x2: this.width * gameScale + this.x,
			y2: this.height * gameScale + this.y,
			speedX: 1.5,
			speedXDefault: 1.5,
			hotLevel: 0.1,
			hitDelay: 8,
			show: false
		}

		var contadorFireAsteroid = fireAsteroid.hitDelay;



	//funciones de fire asteroid
		function dibujarFireAsteroid(){

			if (fireAsteroid.show == true) {
				ctx.drawImage(sprFireAsteroid, fireAsteroid.x, fireAsteroid.y, fireAsteroid.width, fireAsteroid.height)
			}
		}


		function actualizarFireAsteroid(){
			if (fireAsteroidUse == true) {

				fireAsteroid.x -= ship.speed

				fireAsteroid.x -= fireAsteroid.speedX

				fireAsteroid.x2 = fireAsteroid.width + fireAsteroid.x
				fireAsteroid.y2 = fireAsteroid.height + fireAsteroid.y

			} else {
				fireAsteroid.show = false
			}
		}


		function fireAsteroidDamage(){

			fireAsteroidDamaged = true
			contadorFireAsteroid = fireAsteroid.hitDelay

			if (sprFireAsteroidString == "sprFireAsteroidNormal") {
				sprFireAsteroid = sprFireAsteroidDestruct1
				sprFireAsteroidString = "sprFireAsteroidDestruct1"
			} else {

				if (sprFireAsteroidString == "sprFireAsteroidDestruct1") {
					sprFireAsteroid = sprFireAsteroidDestruct2
					sprFireAsteroidString = "sprFireAsteroidDestruct2"
				} else {

					if (sprFireAsteroidString == "sprFireAsteroidDestruct2") {
						sprFireAsteroid = sprFireAsteroidDestruct3
						sprFireAsteroidString = "sprFireAsteroidDestruct3"

					} else {

						if (sprFireAsteroidString == "sprFireAsteroidDestruct3") {
							score.number += 3
							useSFX(sfxScore)
							sprFireAsteroid = sprFireAsteroidNormal
							sprFireAsteroidString = "sprFireAsteroidNormal"
							fireAsteroid.show = false

						}
					}
				}
			}
		}

//fin de fire asteroid
