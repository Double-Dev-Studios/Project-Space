
boton.addEventListener("click", iniciarParar);
fullboton.addEventListener("click", fullscreen);

			function dibujar(){
				//no saques ni comentes el ctx.clearRect a menos de que sepas lo que haces
				ctx.clearRect(0, 0, canvas.width, canvas.height);
				//todo lo que dibujes
				dibujarFondo()

				dibujarEnemigos()

				dibujarDisparos()
				dibujarShip()
				dibujarTutorial()
				dibujarParticles()


				dibujarGameover()

				dibujarTemp()
				dibujarShield()
				dibujarSpeedGui()
				dibujarScore()
				dibujarProgress()
			}

			function dibujarEnemigos(){
				if (iceAsteroidAuraUse == true) {dibujarIceAsteroidAura()}
				if (fireAsteroidAuraUse == true) {dibujarFireAsteroidAura()}
				if (lavaUse == true) {dibujarLava()}
				if (lavaRUse == true) {dibujarLava()}
				if (waterUse == true) {dibujarWater()}
				if (sateliteUse == true) {dibujarSatelite()}
				if (sateliteSpecialUse == true) {dibujarSateliteSpecial()}
				dibujarShieldBonus()
				if (asteroidUse == true) {dibujarAsteroid()}
				if (asteroid2Use == true) {dibujarAsteroid2()}
				if (fireAsteroidUse == true) {dibujarFireAsteroid()}
				if (iceAsteroidUse == true) {dibujarIceAsteroid()}
				if (miniAsteroidUse == true) {dibujarMiniAsteroid()}
				if (twisterUse == true) {dibujarTwister()}
				if (bigAsteroidUse == true) {dibujarBigAsteroid()}
			}



			function actualizar(){
				//todo lo que se mueva

				actualizarFondo()
				actualizarProgress()

				actualizarShip()
				actualizarTutorial()
				actualizarParticles()

				actualizarEnemigos()

				actualizarTemp()
				actualizarDisparos()

			}

			function actualizarEnemigos() {
				if (asteroidUse == true) {actualizarAsteroid()}
				if (asteroid2Use == true) {actualizarAsteroid2()}
				if (fireAsteroidUse == true) {actualizarFireAsteroid()}
				if (fireAsteroidAuraUse == true) {actualizarFireAsteroidAura()}
				if (iceAsteroidUse == true) {actualizarIceAsteroid()}
				if (iceAsteroidAuraUse == true) {actualizarIceAsteroidAura()}
				if (bigAsteroidUse == true) {actualizarBigAsteroid()}
				if (miniAsteroidUse == true) {actualizarMiniAsteroid()}
				if (sateliteUse == true) {actualizarSatelite()}
				if (sateliteSpecialUse == true) {actualizarSateliteSpecial()}
				actualizarShieldBonus()
				if (lavaUse == true) {actualizarLava()}
				if (waterUse == true) {actualizarWater()}
				if (lavaRUse == true) {actualizarLavaR()}
				if (twisterUse == true) {actualizarTwister()}
			}

			function CurrentTimeLoop(music, s){ // CurrentTimeLoop(Musica a loopear, segundo en el que reiniciarla)
				if(music.currentTime > s){
					music.currentTime = 0;
					music.play();
				}
			}

			function musicBucle(){
				// currentTime guarda el tiempo en segundos

				CurrentTimeLoop(musicEarth, 108);
				CurrentTimeLoop(musicMoon, 51);
				CurrentTimeLoop(musicVenus, 76);
				CurrentTimeLoop(musicMars, 89);
				CurrentTimeLoop(musicAsteroidBelt, 76);
				CurrentTimeLoop(musicJupiter, 118);
				CurrentTimeLoop(musicSaturn, 89);
				CurrentTimeLoop(musicUranus, 89);
				CurrentTimeLoop(musicNeptune, 76);
				CurrentTimeLoop(musicSpace, 85);

				CurrentTimeLoop(musicPhobos, 76);
				CurrentTimeLoop(musicDeimos, 118);
				CurrentTimeLoop(musicMercury, 83);
				CurrentTimeLoop(musicEurope, 76);
				CurrentTimeLoop(musicIo, 68);
				CurrentTimeLoop(musicTitan, 115);
				CurrentTimeLoop(musicTitania, 83);
				CurrentTimeLoop(musicPluto, 70);
				CurrentTimeLoop(musicTriton, 92);
				CurrentTimeLoop(musicSun, 111);
				CurrentTimeLoop(sfxWind, 22);
			}

			function musicStartIf(music, bg){ // (musicMusica, "bgNivel")
				if (actualBGString == bg) {
					music.currentTime = 0;
					music.play();
				}
			}

			function musicStart(){
				musicStartIf(musicEarth, "bgTierra");
				musicStartIf(musicMoon, "bgLuna");
				musicStartIf(musicVenus, "bgVenus");
				musicStartIf(musicMars, "bgMarte");
				musicStartIf(musicAsteroidBelt, "bgAsteroides");
				musicStartIf(musicJupiter, "bgJupiter");
				musicStartIf(musicSaturn, "bgSaturno");
				musicStartIf(musicUranus, "bgUrano");
				musicStartIf(musicNeptune, "bgNeptuno");
				musicStartIf(musicSpace, "bgEspacio");

				musicStartIf(musicChallengeC, "bgChallengeComplete");
				musicStartIf(musicLvl, "bgLvlComplete");

				// lost levels

				musicStartIf(musicPhobos, "bgFobos");
				musicStartIf(musicDeimos, "bgDeimos");
				musicStartIf(musicMercury, "bgMercurio");
				musicStartIf(musicEurope, "bgEuropa");
				musicStartIf(musicIo, "bgIo");
				musicStartIf(musicTitan, "bgTitan");
				musicStartIf(musicTitania, "bgTitania");
				musicStartIf(musicPluto, "bgPluton");
				musicStartIf(musicTriton, "bgTriton");
				musicStartIf(musicSun, "bgSun");
			}

			function musicPause(){
				musicEarth.pause()
				musicMoon.pause()
				musicVenus.pause()
				musicMars.pause()
				musicAsteroidBelt.pause()
				musicJupiter.pause()
				musicSaturn.pause()
				musicUranus.pause()
				musicNeptune.pause()
				musicSpace.pause()

				musicChallengeC.pause()
				musicLvl.pause()

				musicPhobos.pause()
				musicDeimos.pause()
				musicMercury.pause()
				musicEurope.pause()
				musicIo.pause()
				musicTitan.pause()
				musicTitania.pause()
				musicPluto.pause()
				musicTriton.pause()
				musicSun.pause()
				sfxWind.pause()
			}

			function contadores(){

				//particles

				contadorParticles -= 1

				if (contadorParticles <= 0) {
					if (particles.blue == false){
						if (sprParticlesString == "sprParticles1") {

							sprParticlesString = "sprParticles2"
							sprParticles = sprParticles2
						} else {

							sprParticlesString = "sprParticles1"
							sprParticles = sprParticles1
						}
					} else {
						if (sprParticlesString == "sprParticlesBlue1") {

							sprParticlesString = "sprParticlesBlue2"
							sprParticles = sprParticlesBlue2
						} else {

							sprParticlesString = "sprParticlesBlue1"
							sprParticles = sprParticlesBlue1
						}
					}


					contadorParticles = 13
				}

				//shield

				if (contadorShield > 0){
					contadorShield -= 1
				}

				if (contadorShield <= 0){
					shipDamaged = false
				}

				if (contadorShield <= 15){
					sprShip = sprShipNormal
				}


				//explosion

				if (contadorExplosion > 0){
					sprShip = sprShipExplosion
					contadorExplosion -= 1
				}

				if (contadorExplosion <= 0){
					ship.show = false
					shipGAMEOVER()
				}


				//asteroid
				if (asteroidUse == true){

					if (contadorAsteroid > 0){
						contadorAsteroid -= 1
					}

					if (contadorAsteroid <= 0){
						asteroidDamaged = false
					}

				}

				//asteroid 2
				if (asteroid2Use == true){

					if (contadorAsteroid2 > 0){
						contadorAsteroid2 -= 1
					}

					if (contadorAsteroid2 <= 0){
						asteroid2Damaged = false
					}
				}



				//miniAsteroid

				if (miniAsteroidUse == true) {
					if (contadorMiniAsteroid > 0){
						contadorMiniAsteroid -= 1
					}

					if (contadorMiniAsteroid <= 0){
						miniAsteroidDamaged = false
					}
				}



				//fireAsteroid

				if (fireAsteroidUse == true) {
					if (contadorFireAsteroid > 0){
						contadorFireAsteroid -= 1
					}

					if (contadorFireAsteroid <= 0){
						fireAsteroidDamaged = false
					}
				}





				//iceAsteroid

				if (iceAsteroidUse == true) {
					if (contadorIceAsteroid > 0){
						contadorIceAsteroid -= 1
					}

					if (contadorIceAsteroid <= 0){
						iceAsteroidDamaged = false
					}
				}


				//bigAsteroid

				if (bigAsteroidUse == true) {
					if (contadorBigAsteroid > 0){
						contadorBigAsteroid -= 1
					}

					if (contadorBigAsteroid <= 0){
						bigAsteroidDamaged = false
					}
				}



				//satelite
				if (sateliteUse == true) {
					if (contadorSatelite > 0){
						contadorSatelite -= 1
					}

					if (contadorSatelite <= 0){
						sateliteDamaged = false
					}
				}


				//lava
				if (lavaUse == true){

					if (contadorLava > 0){
						contadorLava -= 1

						if (contadorLava <= 51){
							if (contadorLava >= 49){
								lava.x = getRandomInt(256, canvas.width + 256)
								sprLava = sprLava0
								sprLavaString = "sprLava0"
								lava.show = true
							}
						}
					}

					if (contadorLava <= 0){
						generarLava()
						contadorLava = 5
						if (sprLavaString == "sprLava4"){
							contadorLava = 200
						}
					}

					if (contadorLavaParticles > 0){
						contadorLavaParticles -= 1
					}

					if (contadorLavaParticles <= 0){
						nextLavaParticle()
						contadorLavaParticles = 5
					}

				}

				if (lavaRUse == true){

					if (contadorLavaR > 0){
						contadorLavaR -= 1

						if (contadorLavaR <= 51){
							if (contadorLavaR >= 49){
								lavaR.y = getRandomInt(64, canvas.height - 64)
								sprLavaR = sprLavaR0
								sprLavaRString = "sprLavaR0"
								lavaR.show = true
							}
						}
					}

					if (contadorLavaR <= 0){
						generarLavaR()
						contadorLavaR = 5
						if (sprLavaRString == "sprLavaR4"){
							contadorLavaR = 200
						}
					}
				}




				//water
				if (waterUse == true){

					if (contadorWater > 0){
						contadorWater -= 1

						if (contadorWater < 51){
							if (contadorWater > 49){
								water.x = getRandomInt(256, canvas.width + 256)
								sprWater = sprWater0
								sprWaterString = "sprWater0"
								water.show = true
							}
						}
					}

					if (contadorWater <= 0){
						generarWater()
						contadorWater = 5
						if (sprWaterString == "sprWater4"){
							contadorWater = 200
						}
					}

				}


				//disparos

				if (disparo.disparado == true){

					if (contadorDisparo > 0){
						contadorDisparo -= 1
					}

					if (contadorDisparo <= 0){
						disparo.disparado = false //esto hay que cambiar
					}
				}

				if (disparo2.disparado == true){

					if (contadorDisparo2 > 0){
						contadorDisparo2 -= 1
					}

					if (contadorDisparo2 <= 0){
						disparo2.disparado = false
					}
				}

				if (disparo3.disparado == true){

					if (contadorDisparo3 > 0){
						contadorDisparo3 -= 1
					}

					if (contadorDisparo3 <= 0){
						disparo3.disparado = false
					}
				}

				if (disparo4.disparado == true){

					if (contadorDisparo4 > 0){
						contadorDisparo4 -= 1
					}

				if (contadorDisparo4 <= 0){
						disparo4.disparado = false
					}
				}
			}

			function challenge(){
				if (actualChallenge == "bigAsteroids"){
					asteroid.width = 36 * gameScale
					asteroid.height = 36 * gameScale
					asteroid.delayTime = 40

					asteroid2.width = 36 * gameScale
					asteroid2.height = 36 * gameScale
					asteroid2.delayTime = 40

					fireAsteroid.width = 36 * gameScale
					fireAsteroid.height = 36 * gameScale
					fireAsteroid.delayTime = 40

					iceAsteroid.width = 36 * gameScale
					iceAsteroid.height = 36 * gameScale
					iceAsteroid.delayTime = 40

					iceAsteroid.width = 36 * gameScale
					iceAsteroid.height = 36 * gameScale
					iceAsteroid.delayTime = 50
				}
			}


			function fullscreen(){
				if (fullscreenVar == false){

					useSFX(sfxSelect)
					fullscreenVar = true
					canvas.width = 1000
					canvas.height = 600
					actualizarSpeedGui()
				}

				else{

					useSFX(sfxSelect)
					fullscreenVar = false
					canvas.width = 800
					canvas.height = 500
					actualizarSpeedGui()
				}
			}



			function cambiarBG(){
				if (actualBGString == "bgTierra"){
					sateliteUse = true
					asteroidUse = true
					asteroid2Use = true
				}

				if (actualBGString == "bgLuna"){
					sateliteUse = true
					asteroidUse = true
					asteroid2Use = true
					miniAsteroidUse = true
				}

				if (actualBGString == "bgVenus"){
					sateliteUse = true
					sateliteSpecialUse = true
					asteroidUse = true
					asteroid2Use = true
					miniAsteroidUse = true
					fireAsteroidAuraUse = true
					lavaUse = true
				}

				if (actualBGString == "bgMarte"){
					sateliteUse = true
					asteroidUse = true
					asteroid2Use = true
					miniAsteroidUse = true
					fireAsteroidUse = true
					fireAsteroidAuraUse = true
				}

				if (actualBGString == "bgAsteroides"){
					sateliteUse = true
					sateliteSpecialUse = true
					asteroidUse = true
					asteroid2Use = true
					miniAsteroidUse = true
					fireAsteroidUse = true
					iceAsteroidUse = true
					bigAsteroidUse = true
				}

				if (actualBGString == "bgJupiter"){
					sateliteUse = true
					sateliteSpecialUse = true
					asteroidUse = true
					asteroid2Use = true
					twisterUse = true
					fireAsteroidUse = true
					iceAsteroidUse = true
					bigAsteroidUse = true
				}

				if (actualBGString == "bgSaturno"){
					sateliteUse = true
					asteroidUse = true
					asteroid2Use = true
					twisterUse = true
					fireAsteroidUse = true
					miniAsteroidUse = true
					iceAsteroidUse = true
				}

				if (actualBGString == "bgUrano"){
					sateliteUse = true
					sateliteSpecialUse = true
					asteroidUse = true
					asteroid2Use = true
					fireAsteroidUse = true
					fireAsteroid.hotLevel = 0.15
					iceAsteroidUse = true
					iceAsteroidAura.use = true
				}

				if (actualBGString == "bgNeptuno"){
					sateliteUse = true
					sateliteSpecialUse = true
					asteroidUse = true
					asteroid2Use = true
					fireAsteroidUse = true
					fireAsteroid.hotLevel = 0.16
					iceAsteroidUse = true
					iceAsteroidAuraUse = true
					waterUse = true
				}

				if (actualBGString == "bgEspacio"){
					sateliteUse = true
					sateliteSpecialUse = true
					asteroidUse = true
					asteroid2Use = true
					fireAsteroidUse = true
					fireAsteroidAuraUse = true
					iceAsteroidUse = true
					iceAsteroidAuraUse = true
					bigAsteroidUse = true
				}

				if (actualBGString == "bgChallengeComplete"){
					sateliteUse = false
					sateliteSpecialUse = false
					asteroidUse = false
					asteroid2Use = false
					fireAsteroidUse = false
					fireAsteroidAuraUse = false
					iceAsteroidUse = false
					iceAsteroidAuraUse = false
					bigAsteroidUse = false
					waterUse = false
					lavaUse = false
					miniAsteroidUse = false
				}

				if (actualBGString == "bgFobos"){
					sateliteUse = true
					asteroidUse = true
					asteroid2Use = true
					miniAsteroidUse = true
					bigAsteroidUse = true
					fireAsteroidUse = true
					fireAsteroidAuraUse = true
					miniAsteroid.speedX = miniAsteroid.speedXDefault + 2
					miniAsteroid.speedY = miniAsteroid.speedYDefault + 1
					asteroid.speedX = asteroid.speedYDefault + 2
				}

				if (actualBGString == "bgDeimos"){
					sateliteUse = true
					sateliteSpecialUse = true
					asteroidUse = true
					asteroid2Use = true
					miniAsteroidUse = true
					fireAsteroidUse = true
					miniAsteroid.speedX = miniAsteroid.speedXDefault + 2
					miniAsteroid.speedY = miniAsteroid.speedYDefault + 1
					asteroid.speedX = asteroid.speedXDefault + 2
					asteroid2.speedY = asteroid.speedYDefault + 0.5
				}

				if (actualBGString == "bgMercurio"){
					sateliteUse = true
					asteroidUse = true
					asteroid2Use = true
					miniAsteroidUse = true
					fireAsteroidUse = true
					fireAsteroidAuraUse = true
					miniAsteroid.speedX = miniAsteroid.speedXDefault + 2
					miniAsteroid.speedY = miniAsteroid.speedYDefault - 1
					asteroid.speedX = asteroid.speedXDefault + 3
					asteroid2.speedY = asteroid2.speedYDefault + 0.5
					lavaRUse = true
				}

				if (actualBGString == "bgEuropa"){
					sateliteUse = true
					sateliteSpecialUse = true
					asteroidUse = true
					asteroid2Use = true
					miniAsteroidUse = true
					fireAsteroidUse = true
					iceAsteroidUse = true
					miniAsteroid.speedX = miniAsteroid.speedXDefault + 2
					miniAsteroid.speedY = miniAsteroid.speedYDefault + 1
					asteroid.speedX = asteroid.speedXDefault + 3
					asteroid2.speedY = asteroid2.speedYDefault - 0.5
				}

				if (actualBGString == "bgIo"){
					sateliteUse = true
					sateliteSpecialUse = true
					asteroidUse = true
					asteroid2Use = true
					miniAsteroidUse = true
					fireAsteroidUse = true
					fireAsteroidAuraUse = true
					iceAsteroidUse = true
					miniAsteroid.speedX = miniAsteroid.speedXDefault + 2
					miniAsteroid.speedY = miniAsteroid.speedYDefault + 1
					asteroid.speedX = asteroid.speedXDefault + 3
					asteroid2.speedY = asteroid2.speedYDefault - 0.5
					lavaUse = true
					waterUse = true
				}

				if (actualBGString == "bgTitan"){
					sateliteUse = true
					sateliteSpecialUse = true
					asteroidUse = true
					asteroid2Use = true
					miniAsteroidUse = true
					fireAsteroidUse = true
					fireAsteroidAuraUse = true
					iceAsteroidUse = true
					iceAsteroidAuraUse = true
					miniAsteroid.speedX = miniAsteroid.speedXDefault + 2
					miniAsteroid.speedY = miniAsteroid.speedYDefault - 1
					asteroid.speedX = asteroid.speedXDefault + 3
					asteroid2.speedY = asteroid2.speedYDefault + 0.5
					waterUse = true
				}

				if (actualBGString == "bgTitania"){
					sateliteSpecialUse = true
					asteroidUse = true
					asteroid2Use = true
					miniAsteroidUse = true
					fireAsteroidUse = true
					iceAsteroidUse = true
					iceAsteroidAuraUse = true
					miniAsteroid.speedX = miniAsteroid.speedXDefault + 2
					miniAsteroid.speedY = miniAsteroid.speedYDefault - 1
					asteroid.speedX = asteroid.speedXDefault + 3
					asteroid2.speedY = asteroid2.speedYDefault + 0.5
				}

				if (actualBGString == "bgPluton"){
					sateliteUse = true
					asteroidUse = true
					asteroid2Use = true
					miniAsteroidUse = true
					fireAsteroidUse = true
					fireAsteroidAuraUse = true
					iceAsteroidAuraUse = true
					miniAsteroid.speedX = miniAsteroid.speedXDefault + 2
					miniAsteroid.speedY = miniAsteroid.speedYDefault + 1
					asteroid.speedX = asteroid.speedXDefault + 4
					asteroid2.speedY = asteroid2.speedYDefault - 1.8
				}

				if (actualBGString == "bgTriton"){
					sateliteSpecialUse = true
					asteroidUse = true
					asteroid2Use = true
					miniAsteroidUse = true
					fireAsteroidUse = true
					fireAsteroidAuraUse = true
					iceAsteroidAuraUse = true
					miniAsteroid.speedX = miniAsteroid.speedXDefault + 3
					asteroid.speedX = asteroid.speedXDefault + 2
					asteroid.speedY = asteroid.speedYDefault + 1.8
					waterUse = true
				}

				if (actualBGString == "bgSun"){
					sateliteSpecialUse = true
					asteroidUse = true
					asteroid2Use = true
					miniAsteroidUse = true
					fireAsteroidUse = true
					fireAsteroidAuraUse = true
					bigAsteroidUse = true
					lavaUse = true
					lavaRUse = true
					sateliteSpecial.speedX = sateliteSpecial.speedXDefault + 10
					miniAsteroid.speedX = miniAsteroid.speedXDefault + 8
					miniAsteroid.speedY = miniAsteroid.speedYDefault + 2
					asteroid.speedX = asteroid.speedXDefault + 6
					asteroid2.speedX = asteroid2.speedXDefault + 4
					fireAsteroid.speedX = fireAsteroid.speedXDefault + 5
					fireAsteroidAura.speedX = fireAsteroidAura.speedXDefault + 5
					bigAsteroid.speedX = bigAsteroid.speedXDefault + 2
					sprMiniAsteroidNormal.src = "../../sprites/miniAsteroid/fire.png"
				}
			}


			cambiarBG()


			function frame(){
				//esto pasa en cada frame
				musicBucle();
				contadores();
				actualizar();
				colisiones();
				dibujar();
			}


			//iniciarParar, puedes asignar lo que sea para pausar y despausar el juego
			function iniciarParar(){
				if (pausa){
					pausa = false;
					playstop.src = "../../menu/pause.png"
					challenge()
					useSFX(sfxSelect)
					musicStart()
					bucle = setInterval(frame, 16)
				} else {
					drawPauseScreen()
					pausa = true;
					playstop.src = "../../menu/play.png"
					useSFX(sfxSelect)
					musicPause()
					clearInterval(bucle)
				}
			}
