//satelite

	//sprites de satelite
		var sprSateliteNormal = new Image()
		var sprSateliteDestruct1 = new Image()
		var sprSateliteDestruct2 = new Image()
		var sprSateliteDestruct3 = new Image()
		var sprSatelite = sprSateliteNormal
		var sprSateliteString = "sprSateliteNormal"
		sprSateliteNormal.src = "../../sprites/satelite/normal.png"
		sprSateliteDestruct1.src = "../../sprites/satelite/destruct1.png"
		sprSateliteDestruct2.src = "../../sprites/satelite/destruct2.png"
		sprSateliteDestruct3.src = "../../sprites/satelite/destruct3.png"

	//variables de satelite

		var contadorSatelite = 20
		var sateliteDamaged = false

		var sateliteUse = false

		var satelite = {
			x: canvas.width + getRandomInt(164, 164 * 7),
			y: getRandomInt(0, canvas.height - 164),
			width: 41 * gameScale,
			height: 37 * gameScale,
			x2: this.width * gameScale + this.x,
			y2: this.height * gameScale + this.y,
			speedX: 0.2,
			show: true
		}

		var sateliteHitbox = {
			x: satelite.x + 32,
			y: satelite.y + 51,
			width: 30 * gameScale, // width desde 32 hasta 100 de satelite
			height: 20 * gameScale, // height desde 51 hasta 100 de satelite
			x2: this.width + this.x,
			y2: this.height + this.y
		}



	//funciones de satelite
		function dibujarSatelite(){

			if (satelite.show == true) {
				ctx.drawImage(sprSatelite, satelite.x, satelite.y, satelite.width, satelite.height)
			}
		}


		function actualizarSatelite(){
			if (sateliteUse == true) {

				//satelite
				satelite.x -= ship.speed

				satelite.x -= satelite.speedX

				satelite.x2 = satelite.width + satelite.x
				satelite.y2 = satelite.height + satelite.y


				//sateliteHitbox
				sateliteHitbox.x = satelite.x + 32
				sateliteHitbox.y = satelite.y + 51
				sateliteHitbox.x2 = sateliteHitbox.width + sateliteHitbox.x
				sateliteHitbox.y2 = sateliteHitbox.height + sateliteHitbox.y

			}

		}


		function sateliteDamage(shipDamaged){

			sateliteDamaged = true
			contadorSatelite = 15

			if (sprSateliteString == "sprSateliteNormal") {
				sprSatelite = sprSateliteDestruct1
				sprSateliteString = "sprSateliteDestruct1"
			} else {

				if (sprSateliteString == "sprSateliteDestruct1") {
					sprSatelite = sprSateliteDestruct2
					sprSateliteString = "sprSateliteDestruct2"
				} else {

					if (sprSateliteString == "sprSateliteDestruct2") {
						sprSatelite = sprSateliteDestruct3
						sprSateliteString = "sprSateliteDestruct3"

					} else {

						if (sprSateliteString == "sprSateliteDestruct3") {
							score.number -= 5
							sprSatelite = sprAsteroidNormal
							sprSateliteString = "sprSateliteNormal"
							satelite.show = false

							if (!shipDamaged){ // esto evita recuperarte la vida con el satelite cuando te lo chocas
								randomSatelite()
							}
							oneActualizarShield()

						}
					}
				}
			}
		}






//satelite ESPECIAL

	//sprites de satelite especial

		var sprSateliteSpecial = new Image()
		sprSateliteSpecial.src = "../../sprites/satelite/destructSpecial.png"

	//variables de satelite especial

		var sateliteSpecialUse = false

		var sateliteSpecial = {
			x: canvas.width + getRandomInt(164, 164 * 7),
			y: getRandomInt(0, canvas.height - 164),
			x2: satelite.width + this.x,
			y2: satelite.height + this.y,
			speedX: 0.4,
			speedXDefault: 0.4,
			show: true
		}

		var sateliteSpecialHitbox = {
			x: sateliteSpecial.x + 32,
			y: sateliteSpecial.y + 51,
			x2: satelite.width + this.x,
			y2: satelite.height + this.y
		}



	//funciones de satelite especial
		function dibujarSateliteSpecial(){

			if (sateliteSpecial.show == true) {
				ctx.drawImage(sprSateliteSpecial, sateliteSpecial.x, sateliteSpecial.y, satelite.width, satelite.height)
			}
		}


		function actualizarSateliteSpecial(){
			if (sateliteSpecialUse == true) {

				//satelite especial
				sateliteSpecial.x -= ship.speed

				sateliteSpecial.x -= sateliteSpecial.speedX

				sateliteSpecial.x2 = satelite.width + sateliteSpecial.x
				sateliteSpecial.y2 = satelite.height + sateliteSpecial.y


				//satelite especial Hitbox
				sateliteSpecialHitbox.x = sateliteSpecial.x + 32
				sateliteSpecialHitbox.y = sateliteSpecial.y + 51
				sateliteSpecialHitbox.x2 = sateliteHitbox.width + sateliteSpecialHitbox.x
				sateliteSpecialHitbox.y2 = sateliteHitbox.height + sateliteSpecialHitbox.y

			}

		}


		function sateliteSpecialDamage(shipDamaged){

			score.number += 2
			sateliteSpecial.show = false

			if (!shipDamaged){  // esto evita recuperarte la vida con el satelite cuando te lo chocas
				randomSatelite()
			}
			oneActualizarShield()
		}
