
boton.addEventListener("click", iniciarParar);

fullboton.addEventListener("click", fullscreen);
			
			
			function dibujar(){
				//no saques ni comentes el ctx.clearRect a menos de que sepas lo que haces
				ctx.clearRect(0, 0, canvas.width, canvas.height);
				//todo lo que dibujes
				dibujarFondo()
				
				dibujarDisparos()
				
				dibujarEnemigos()
				
				dibujarShip()
				dibujarParticles()
				
				dibujarShield()
				
				
				
				
				dibujarScore()
			}
			
			function dibujarEnemigos(){
				dibujarLava()
				dibujarSatelite()
				dibujarSateliteSpecial()
				dibujarAsteroid()
				dibujarAsteroid2()
				dibujarMiniAsteroid()
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
				actualizarMiniAsteroid()
				actualizarSatelite()
				actualizarSateliteSpecial()
				actualizarLava()
			}
			
			
			
			function musicBucle(){
				// currentTime guarda el tiempo en segundos
				if (musicEarth.currentTime > 62){
					musicEarth.currentTime = 0;
					musicEarth.play();
				}
				
				if (musicLuna.currentTime > 51){
					musicLuna.currentTime = 0;
					musicLuna.play();
				}
				
				if (musicVenus.currentTime > 76){
					musicVenus.currentTime = 0;
					musicVenus.play();
				}
			}
			
			
			function musicStart(){
				if (actualBGString == "bgTierra") {
					musicEarth.currentTime = 0;
					musicEarth.play();
				}
				
				if (actualBGString == "bgLuna") {
					musicLuna.currentTime = 0;
					musicLuna.play();
				}
				
				if (actualBGString == "bgVenus") {
					musicVenus.currentTime = 0;
					musicVenus.play();
				}
			}
			
			
			
			
			
			function contadores(){
				
				//particles
				
				contadorParticles -= 1
				
				if (contadorParticles <= 0) {
					
					if (sprParticlesString == "sprParticles1") {
						
						sprParticlesString = "sprParticles2"
						sprParticles = sprParticles2
					} else {
						
						sprParticlesString = "sprParticles1"
						sprParticles = sprParticles1
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
				musicLuna.pause()
				musicVenus.pause()
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
				if (actualBG == bgTierra){
					satelite.use = true
					asteroid.use = true
					asteroid2.use = true
					miniAsteroid.use = false
				}
						
				if (actualBG == bgLuna){
					satelite.use = true
					asteroid.use = true
					asteroid2.use = true
					miniAsteroid.use = true
				}
				
				if (actualBG == bgVenus){
					satelite.use = true
					sateliteSpecial.use = true
					asteroid.use = true
					asteroid2.use = true
					miniAsteroid.use = true
					lava.use = true
				}
			}
			
			
			cambiarBG()
