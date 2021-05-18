// S O L T A R   T E C L A S
	//lo que pase cuando sueltas una tecla
	function soltarTecla(){
		var kf = event.keyCode;
		//izquierda o derecha suelta
			if (kf == kRight) {ship.speedX = 0};
			if (kf == kLeft) {ship.speedX = 0};
		//arriba o abajo suelta
			if (kf == kUp) {ship.speedY = 0};
			if (kf == kDown) {ship.speedY = 0};
			
		//A o D suelta
			if (kf == kD) {ship.speedX = 0};
			if (kf == kA) {ship.speedX = 0};
		//W o S suelta
			if (kf == kW) {ship.speedY = 0};
			if (kf == kS) {ship.speedY = 0};
	}
	
	
//T E C L A S
		
		function detectarTecla(event){
			var k = event.keyCode;
			
			if (ship.show == true) {
				if (ship.speed > 0) {
					
					// k == derecha
					if (k == kRight || k == kD) {
						ship.speedX = 8
						
						if (particles.use == true){
							particles.show = true
						}
					}
					
					// k == izquierda
					if (k == kLeft || k == kA) {
						ship.speedX = -8
						particles.show = false
					}
					
					// k == arriba
					if (k == kUp || k == kW) {
						ship.speedY = -6
					}
					
					// k == abajo
					if (k == kDown || k == kS) {
						ship.speedY = 9
					}
					
				}
				
				// k == Z || P
				if (k == kZ || k == kP) {
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
				
				// k == X || U
				if (k == kX || k == kU) {
					ship.speed = 0.5
				}
				
				// k == C || I
				if (k == kC || k == kI) {
					ship.speed = 1.5
				}
				
				// k == V || O
				if (k == kV || k == kO) {
					ship.speed = 3
				}

				// k == debug (9)
				/*if (k == k9) {
					ship.speed = 6
					temp.value = 0
					bg.speed += 1
				}*/
			}
		}
