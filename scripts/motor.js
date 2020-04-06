
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
				dibujarParticles()
				
				
				dibujarGameover()
				
				dibujarShield()
				dibujarTemp()
				dibujarScore()
			}

			function dibujarEnemigos(){
				if (iceAsteroidAuraUse == true) {dibujarIceAsteroidAura()}
				if (fireAsteroidAuraUse == true) {dibujarFireAsteroidAura()}
				if (lavaUse == true) {dibujarLava()}
				if (waterUse == true) {dibujarWater()}
				if (sateliteUse == true) {dibujarSatelite()}
				if (sateliteSpecialUse == true) {dibujarSateliteSpecial()}
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

				actualizarShip()
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
				if (lavaUse == true) {actualizarLava()}
				if (waterUse == true) {actualizarWater()}
				if (twisterUse == true) {actualizarTwister()}
			}



			function musicBucle(){
				// currentTime guarda el tiempo en segundos
				if (musicEarth.currentTime > 108){
					musicEarth.currentTime = 0;
					musicEarth.play();
				}

				if (musicMoon.currentTime > 51){
					musicMoon.currentTime = 0;
					musicMoon.play();
				}

				if (musicVenus.currentTime > 76){
					musicVenus.currentTime = 0;
					musicVenus.play();
				}

				if (musicMars.currentTime > 89){
					musicMars.currentTime = 0;
					musicMars.play();
				}
				
				if (musicAsteroidBelt.currentTime > 76){
					musicAsteroidBelt.currentTime = 0;
					musicAsteroidBelt.play();
				}
				
				if (musicJupiter.currentTime > 118){
					musicJupiter.currentTime = 0;
					musicJupiter.play();
				}
				
				if (musicSaturn.currentTime > 89){
					musicSaturn.currentTime = 0;
					musicSaturn.play();
				}
				
				if (musicUranus.currentTime > 89){
					musicUranus.currentTime = 0;
					musicUranus.play();
				}
				
				if (musicNeptune.currentTime > 76){
					musicNeptune.currentTime = 0;
					musicNeptune.play();
				}
				
				if (musicSpace.currentTime > 85){
					musicSpace.currentTime = 0;
					musicSpace.play();
				}
			}


			function musicStart(){
				if (actualBGString == "bgTierra") {
					musicEarth.currentTime = 0;
					musicEarth.play();
				}

				if (actualBGString == "bgLuna") {
					musicMoon.currentTime = 0;
					musicMoon.play();
				}

				if (actualBGString == "bgVenus") {
					musicVenus.currentTime = 0;
					musicVenus.play();
				}

				if (actualBGString == "bgMarte") {
					musicMars.currentTime = 0;
					musicMars.play();
				}
				
				if (actualBGString == "bgAsteroides") {
					musicAsteroidBelt.currentTime = 0;
					musicAsteroidBelt.play();
				}
				
				if (actualBGString == "bgJupiter") {
					musicJupiter.currentTime = 0;
					musicJupiter.play();
				}
				
				if (actualBGString == "bgSaturno") {
					musicSaturn.currentTime = 0;
					musicSaturn.play();
				}
				
				if (actualBGString == "bgUrano") {
					musicUranus.currentTime = 0;
					musicUranus.play();
				}
				
				if (actualBGString == "bgNeptuno") {
					musicNeptune.currentTime = 0;
					musicNeptune.play();
				}
				
				if (actualBGString == "bgEspacio") {
					musicSpace.currentTime = 0;
					musicSpace.play();
				}
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

						if (contadorLava < 51){
							if (contadorLava > 49){
								lava.x = getRandomInt(256, canvas.width + 256),
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

				}
				
				
				
				
				//water
				if (waterUse == true){

					if (contadorWater > 0){
						contadorWater -= 1

						if (contadorWater < 51){
							if (contadorWater > 49){
								water.x = getRandomInt(256, canvas.width + 256),
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
						disparo.disparado = false
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
			}


			function fullscreen(){
				if (fullscreenVar == false){

					fullscreenVar = true
					canvas.width = 1000
					canvas.height = 600
				}

				else{

					fullscreenVar = false
					canvas.width = 800
					canvas.height = 500
				}
			}



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
					musicStart()
					bucle = setInterval(frame, 16)
				} else {
					pausa = true;
					musicPause()
					clearInterval(bucle)
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

			}


			cambiarBG()
