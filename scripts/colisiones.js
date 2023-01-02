// COLISIONES

// original version: 1250 lineas
// optimized version: 398 lineas
function detectCollision(object1, object2){
	if (object1.x2 >= object2.x) {
		if (object1.x <= object2.x2) {
			if (object1.y2 >= object2.y) {
				if (object1.y <= object2.y2) {
					return true;
				}
			}
		}
	}
};

function colisionDisparo(object, objectHitbox){
	if (object.show){
		if (disparo.disparado){
			if (detectCollision(objectHitbox, disparo)){
				disparo.disparado = false;
				return true;
			} else if (detectCollision(objectHitbox, disparo2)) {
				disparo2.disparado = false;
				return true;
			} else if (detectCollision(objectHitbox, disparo3)) {
				disparo3.disparado = false;
				return true;
			} else if (detectCollision(objectHitbox, disparo4)) {
				disparo4.disparado = false;
				return true;
			}
		}
	}
};

//colisiones, cuando hagas un objeto solido, COLISIONES.
function colisiones(){

	// asteroid -> borde
	if (asteroidUse){
		if (asteroid.x <= 0 - asteroid.width || asteroid.show == false){
			asteroid.x = canvas.width + asteroid.width;
			asteroid.y = getRandomInt(10, canvas.height - 10);
			sprAsteroid = sprAsteroidNormal;
			sprAsteroidString = "sprAsteroidNormal";
			asteroid.show = true;
		}
	};

	// asteroid2 -> borde
	if (asteroid2Use){
		if (asteroid2.x <= 0 - asteroid2.width || asteroid2.show == false){
			asteroid2.x = canvas.width + asteroid2.width;
			if (asteroid2.speedY > 0){
				asteroid2.y = getRandomInt(-100, canvas.height / 2);
			} else {
				asteroid2.y = getRandomInt(10, canvas.height - 10);
			};
			sprAsteroid2 = sprAsteroidNormal;
			sprAsteroid2String = "sprAsteroidNormal";
			asteroid2.show = true;
		}
	};

	// miniAsteroid -> borde
	if (miniAsteroidUse) {
		if (miniAsteroid.x <= 0 - miniAsteroid.width || miniAsteroid.show == false){
			miniAsteroid.x = canvas.width + (miniAsteroid.width * getRandomInt(3, 10));
			if (miniAsteroid.speedY > 0){
				miniAsteroid.y = getRandomInt(-100, canvas.height / 2);
			} else {
				miniAsteroid.y = getRandomInt(40, canvas.height - 40);
			};
			sprMiniAsteroid = sprMiniAsteroidNormal;
			sprMiniAsteroidString = "sprMiniAsteroidNormal";
			miniAsteroid.show = true;
		}
	};


	// fireAsteroid -> borde
	if (fireAsteroidUse){
		if (fireAsteroid.x <= 0 - fireAsteroid.width || fireAsteroid.show == false){
			fireAsteroid.x = canvas.width + fireAsteroid.width;
			fireAsteroid.y = getRandomInt(40, canvas.height - 40);
			sprFireAsteroid = sprFireAsteroidNormal;
			sprFireAsteroidString = "sprFireAsteroidNormal";
			fireAsteroid.show = true;
		}
	};

	// fireAsteroidAura -> borde
	if (fireAsteroidAuraUse){
		if (fireAsteroidAura.x <= -200 || fireAsteroidAura.show == false){
			fireAsteroidAura.x = canvas.width + 200;
			fireAsteroidAura.y = getRandomInt(128, canvas.height - 128);
			fireAsteroidAura.show = true;
		}
	};

	// iceAsteroid -> borde
	if (iceAsteroidUse){
		if (iceAsteroid.x <= 0 - iceAsteroid.width || iceAsteroid.show == false){
			iceAsteroid.x = canvas.width + iceAsteroid.width;
			iceAsteroid.y = getRandomInt(40, canvas.height - 40);
			sprIceAsteroid = sprIceAsteroidNormal;
			sprIceAsteroidString = "sprIceAsteroidNormal";
			iceAsteroid.show = true;
		}
	};

	// iceAsteroidAura -> borde
	if (iceAsteroidAuraUse){
		if (iceAsteroidAura.x <= -256 || iceAsteroidAura.show == false){
			iceAsteroidAura.x = canvas.width + 256;
			iceAsteroidAura.y = getRandomInt(128, canvas.height - 128);
			iceAsteroidAura.show = true;
		}
	};

	// bigAsteroid -> borde
	if (bigAsteroidUse){
		if (bigAsteroid.x <= 0 - bigAsteroid.width || bigAsteroid.show == false){
			bigAsteroid.x = canvas.width + bigAsteroid.width;
			bigAsteroid.y = getRandomInt(40, canvas.height - 40);
			sprBigAsteroid = sprBigAsteroidNormal;
			sprBigAsteroidString = "sprBigAsteroidNormal";
			bigAsteroid.show = true;
			randomBigAsteroid();
		}
	};

	// satelite -> borde
	if (sateliteUse){
		if (satelite.x <= -40 * gameScale || satelite.show == false){
			satelite.x = canvas.width + 72;
			satelite.y = getRandomInt(0, canvas.height - 164);
			sprSatelite = sprSateliteNormal;
			sprSateliteString = "sprSateliteNormal";
			satelite.show = true;
		}
	};

	// sateliteSpecial -> borde
	if (sateliteSpecialUse){
		if (sateliteSpecial.x <= -30 * gameScale || sateliteSpecial.show == false){
			sateliteSpecial.x = canvas.width + 72;
			sateliteSpecial.y = getRandomInt(0, canvas.height - 164);
			sateliteSpecial.show = true;
		}
	};

	// shieldBonus -> borde
	if (shieldBonus.x <= -10 * gameScale){
		shieldBonus.show = false;
	}

	// ship -> borde
	if (ship.show){
		if (ship.x <= -36 || ship.y <= -36||
			ship.x >= canvas.width - 36 ||
			ship.y >= canvas.height - 36){

			ship.x = canvas.width / 2;
			ship.y = canvas.height / 2;
			ship.show = false;
			ship.speed = 0;

			useExplosionSFX();
			sprShield = sprShield0;
			sprShieldString = "sprShield0";
			shipGAMEOVER();
		}
	};
// ------------------------------------------------------- SHIP
	// asteroid -> ship
	if (ship.show){
		if (asteroidUse){
			if (asteroidDamaged == false) {
				if (detectCollision(asteroid, shipHitbox)){
					asteroidDamage();
					shipDamage();
				}
			}
		}
	};

	// asteroid2 -> ship
	if (ship.show){
		if (asteroid2Use){
			if (asteroid2Damaged == false) {
				if (detectCollision(shipHitbox, asteroid2)){
					asteroid2Damage();
					shipDamage();
				}
			}
		}
	};

	// miniAsteroid -> ship
	if (ship.show){
		if (miniAsteroidUse){
			if (miniAsteroidDamaged == false) {
				if (detectCollision(shipHitbox, miniAsteroid)){
					miniAsteroidDamage();
					shipDamage();
				}
			}
		}
	};

	// fireAsteroid -> ship
	if (ship.show){
		if (fireAsteroidUse){
			if (fireAsteroidDamaged == false) {
				if (detectCollision(shipHitbox, fireAsteroid)){
					fireAsteroidDamage();
					shipDamage();
					ship.speed = 4.5;
					actualizarSpeedGui();
				}
			}
		}
	};


	// fireAsteroidAura -> ship
	if (fireAsteroidAuraUse){
		if (ship.show){
			if (detectCollision(shipHitbox, fireAsteroidAura)){
				ship.speed = 4.5;
				actualizarSpeedGui();
			}
		}
	};

	// iceAsteroid -> ship
	if (iceAsteroidUse){
		if (ship.show){
			if (iceAsteroidDamaged == false) {
				if (detectCollision(shipHitbox, iceAsteroid)){
					iceAsteroidDamage();
					shipDamage();
					ship.speed = 0;
					actualizarSpeedGui();
				}
			}
		}
	};

	// iceAsteroidAura -> ship
	if (iceAsteroidAuraUse){
		if (ship.show){
			if(detectCollision(shipHitbox, iceAsteroidAura)){
				ship.speed = 0.5;
				actualizarSpeedGui();
			}
		}
	};

	// bigAsteroid -> ship
	if (bigAsteroidUse){
		if (ship.show){
			if (bigAsteroidDamaged == false) {
				if (detectCollision(shipHitbox, bigAsteroid)){
					bigAsteroidDamage();
					shipDamage();
				}
			}
		}
	};

	// twister -> ship
	if (twisterUse){
		if (ship.show){
			if (twister.show) {
				if (detectCollision(shipHitbox, twister)){
					shipDamage()

					ship.upKey = 9;
					ship.downKey = 0;
				}
			}
		}
	};

	// satelite -> ship
	if (sateliteUse){
		if (ship.show){
			if (sateliteDamaged == false) {
				if (detectCollision(shipHitbox, sateliteHitbox)){
					sateliteDamage(true); // true en shipDamaged porque la nave choco el satelite
					shipDamage();
				}
			}
		}
	};

	// sateliteSpecial -> ship
	if (sateliteSpecialUse){
		if (ship.show){
			if (detectCollision(shipHitbox, sateliteSpecialHitbox)){
				sateliteSpecialDamage(true); // true en shipDamaged porque la nave choco el satelite
				shipDamage();
			}
		}
	};

	// lava -> ship
	if (lavaUse){
		if (ship.show){
			if (lavaHitbox.use) {
				if (detectCollision(shipHitbox, lavaHitbox)){
					shipKill();
				}
			}
		}
	};

	// Water -> ship
	if (waterUse){
		if (ship.show){
			if (waterHitbox.use) {
				if (detectCollision(shipHitbox, waterHitbox)){
					shipKill();
				}
			}
		}
	};

	// lavaR -> ship
	if (lavaRUse){
		if (ship.show){
			if (lavaRHitbox.use) {
				if (detectCollision(shipHitbox, lavaRHitbox)){
					shipKill();
				}
			}
		}
	};
	if (ship.show){
		if (shieldBonus.show){
			if (detectCollision(shipHitbox, shieldBonusHitbox)){
				touchShieldBonus();
			}
		}
	}


	// ----------------------------------------------------------------------- DISPAROS

	// asteroid -> disparos
	if (asteroidUse) {
		if (colisionDisparo(asteroid, asteroid)){
			if (asteroidDamaged == false){
				asteroidDamage();
			}
		}
	};

	// asteroid 2 -> disparos
	if (asteroid2Use){
		if (colisionDisparo(asteroid2, asteroid2)){
			if (asteroid2Damaged == false){
				asteroid2Damage();
			}
		}
	};

	// miniAsteroid -> disparos
	if (miniAsteroidUse) {
		if (colisionDisparo(miniAsteroid, miniAsteroid)){
			if (miniAsteroidDamaged == false){
				miniAsteroidDamage();
			}
		}
	};

	// fireAsteroid -> disparos
	if (fireAsteroidUse == true){
		if(colisionDisparo(fireAsteroid, fireAsteroid)){
			if (fireAsteroidDamaged == false){
				fireAsteroidDamage();
			}
		}
	};

	// iceAsteroid -> disparos
	if (iceAsteroidUse){
		if (colisionDisparo(iceAsteroid, iceAsteroid)){
			if (iceAsteroidDamaged == false){
				iceAsteroidDamage();
			}
		}
	};

	// bigAsteroid -> disparos
	if (bigAsteroidUse){
		if (colisionDisparo(bigAsteroid, bigAsteroid)){
			if (bigAsteroidDamaged == false){
				bigAsteroidDamage();
			}
		}
	};

	// satelite -> disparos
	if (sateliteUse) {
		if (colisionDisparo(satelite, sateliteHitbox)){
			if (sateliteDamaged == false){
				sateliteDamage();
			}
		}
	};

	// sateliteSpecial -> disparos
	if (sateliteSpecialUse == true){
		if (colisionDisparo(sateliteSpecial, sateliteSpecialHitbox)){
			sateliteSpecialDamage();
		}
	};

	// lava -> disparos
	if (lavaUse == true){
		colisionDisparo(lava, lavaHitbox);
	};


	// water -> disparos
	if (waterUse == true){
		colisionDisparo(water, waterHitbox);
	};

	// twister -> disparos
	if (twisterUse == true){
		colisionDisparo(twister, twister);
	};
};
