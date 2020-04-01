
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
				dibujarIceAsteroidAura()
				dibujarLava()
				dibujarSatelite()
				dibujarSateliteSpecial()
				dibujarAsteroid()
				dibujarAsteroid2()
				dibujarFireAsteroid()
				dibujarIceAsteroid()
				dibujarMiniAsteroid()
				dibujarTwister()
				dibujarBigAsteroid()
			}



			function actualizar(){
				//todo lo que se mueva

				actualizarFondo()

				actualizarShip()
				actualizarParticles()

				actualizarEnemigos()
				actualizarDisparos()

			}

			function actualizarEnemigos() {
				actualizarAsteroid()
				actualizarAsteroid2()
				actualizarFireAsteroid()
				actualizarIceAsteroid()
				actualizarIceAsteroidAura()
				actualizarMiniAsteroid()
				actualizarSatelite()
				actualizarSateliteSpecial()
				actualizarLava()
				actualizarTwister()
				actualizarTemp()
				actualizarBigAsteroid()
				
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
				if (contadorAsteroid > 0){
					contadorAsteroid -= 1
				}

				if (contadorAsteroid <= 0){
					asteroidDamaged = false
				}


				//asteroid 2
				if (contadorAsteroid2 > 0){
					contadorAsteroid2 -= 1
				}

				if (contadorAsteroid2 <= 0){
					asteroid2Damaged = false
				}




				//miniAsteroid

				if (miniAsteroid.use == true) {
					if (contadorMiniAsteroid > 0){
						contadorMiniAsteroid -= 1
					}

					if (contadorMiniAsteroid <= 0){
						miniAsteroidDamaged = false
					}
				}



				//fireAsteroid

				if (fireAsteroid.use == true) {
					if (contadorFireAsteroid > 0){
						contadorFireAsteroid -= 1
					}

					if (contadorFireAsteroid <= 0){
						fireAsteroidDamaged = false
					}
				}
				
				
				
				
				
				//iceAsteroid

				if (iceAsteroid.use == true) {
					if (contadorIceAsteroid > 0){
						contadorIceAsteroid -= 1
					}

					if (contadorIceAsteroid <= 0){
						iceAsteroidDamaged = false
					}
				}
				
				
				//bigAsteroid
				if (contadorBigAsteroid > 0){
					contadorBigAsteroid -= 1
				}

				if (contadorBigAsteroid <= 0){
					bigAsteroidDamaged = false
				}
				


				//satelite
				if (contadorSatelite > 0){
					contadorSatelite -= 1
				}

				if (contadorSatelite <= 0){
					sateliteDamaged = false
				}


				//lava
				if (lava.use == true){

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
					satelite.use = true
					asteroid.use = true
					asteroid2.use = true
				}

				if (actualBGString == "bgLuna"){
					satelite.use = true
					asteroid.use = true
					asteroid2.use = true
					miniAsteroid.use = true
				}

				if (actualBGString == "bgVenus"){
					satelite.use = true
					sateliteSpecial.use = true
					asteroid.use = true
					asteroid2.use = true
					miniAsteroid.use = true
					lava.use = true
				}

				if (actualBGString == "bgMarte"){
					satelite.use = true
					asteroid.use = true
					asteroid2.use = true
					miniAsteroid.use = true
					fireAsteroid.use = true
				}
				
				if (actualBGString == "bgAsteroides"){
					satelite.use = true
					sateliteSpecial.use = true
					asteroid.use = true
					asteroid2.use = true
					miniAsteroid.use = true
					fireAsteroid.use = true
					iceAsteroid.use = true
					bigAsteroid.use = true
				}
				
				if (actualBGString == "bgJupiter"){
					satelite.use = true
					sateliteSpecial.use = true
					asteroid.use = true
					asteroid2.use = true
					twister.use = true
					fireAsteroid.use = true
					iceAsteroid.use = true
					bigAsteroid.use = true
				}
				
				if (actualBGString == "bgSaturno"){
					satelite.use = true
					asteroid.use = true
					asteroid2.use = true
					twister.use = true
					fireAsteroid.use = true
					miniAsteroid.use = true
					iceAsteroid.use = true
				}
				
				if (actualBGString == "bgUrano"){
					satelite.use = true
					sateliteSpecial.use = true
					asteroid.use = true
					asteroid2.use = true
					fireAsteroid.use = true
					fireAsteroid.hotLevel = 0.15
					iceAsteroid.use = true
					iceAsteroidAura.use = true
				}

			}


			cambiarBG()
