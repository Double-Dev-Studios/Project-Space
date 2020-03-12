// S O L T A R   T E C L A S
	//lo que pase cuando sueltas una tecla
	function soltarTecla(){
		var kf = event.keyCode;
		
		//izquierda o derecha suelta
			if (kf == kRight){ship.speedX = 0}
			if (kf == kLeft){ship.speedX = 0}
		//arriba o abajo suelta
			if (kf == kUp){ship.speedY = 0}
			if (kf == kDown){ship.speedY = 0}
	}
	
	
//T E C L A S
	// recorda: http://giovaelpetv.blogspot.com/p/codigos-teclas-javascript.html
		
		
		function detectarTecla(event){
			var k = event.keyCode;
			
			if (ship.show == true) {
				if (ship.speed > 0) {
					
					// k == derecha
					if (k == kRight) {
						ship.speedX = 8
						
						if (particles.use == true){
							particles.show = true
						}
					}
					
					// k == izquierda
					if (k == kLeft) {
						ship.speedX = -8
						particles.show = false
					}
					
					// k == arriba
					if (k == kUp) {
						ship.speedY = -6
					}
					
					// k == abajo
					if (k == kDown) {
						ship.speedY = 6
					}
					
				}
				
				// k == Z
				if (k == kZ) {
					if (disparo.disparado == false) {
						disparar()
					}
					
					else if (disparo2.disparado == false) {
						disparar2()
					}
					
					else if (disparo3.disparado == false) {
						disparar3()
					}
				}
				
				// k == X
				if (k == kX) {
					ship.speed = 0.5
				}
				
				// k == C
				if (k == kC) {
					ship.speed = 1.5
				}
				
				// k == V
				if (k == kV) {
					ship.speed = 3
				}
			}
			
			
			//cualquier tecla que quieras saber su codigo: http://giovaelpetv.blogspot.com/p/codigos-teclas-javascript.html
		}
