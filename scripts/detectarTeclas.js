// S O L T A R   T E C L A S
	//lo que pase cuando sueltas una tecla
	function soltarTecla(){
		var kf = event.keyCode;
		//izquierda o derecha suelta
			if (kf == kRight) {ship.rightKey = 0; particles.show = false};
			if (kf == kLeft) {ship.leftKey = 0};
		//arriba o abajo suelta
			if (kf == kUp) {ship.upKey = 0};
			if (kf == kDown) {ship.downKey = 0};

		//A o D suelta
			if (kf == kD) {ship.rightKey = 0};
			if (kf == kA) {ship.leftKey = 0};
		//W o S suelta
			if (kf == kW) {ship.upKey = 0};
			if (kf == kS) {ship.downKey = 0};

			tutorial.show = false
	}


//T E C L A S

		function detectarTecla(event){
			var k = event.keyCode;

			if (ship.show == true) {
				if (ship.speed > 0) {

					// k == derecha
					if (k == kRight || k == kD) {
						ship.rightKey = 8

						if (particles.use == true){
							particles.show = true
						}
					}

					// k == izquierda
					if (k == kLeft || k == kA) {
						ship.leftKey = 8
						//particles.show = false
					}

					// k == arriba
					if (k == kUp || k == kW) {
						ship.upKey = 6
					}

					// k == abajo
					if (k == kDown || k == kS) {
						ship.downKey = 6
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

					else if (disparo4.disparado == false) {
						disparar4()
					}
				}

				// k == X || U
				if (k == kX || k == kU) {
					ship.speed = 0.5
					actualizarSpeedGui()
				}

				// k == C || I
				if (k == kC || k == kI) {
					ship.speed = 1.5
					actualizarSpeedGui()
				}

				// k == V || O
				if (k == kV || k == kO) {
					ship.speed = 3
					actualizarSpeedGui()
				}

				/*// k == debug (9)
				if (k == k9) {
					ship.speed = 6
					sprShield = sprShield5
					sprShieldString = 5
					temp.value = 0
					bg.speed += 1
				}  //PERO SACAME EL DEBUG
					 //QUE PELOTUDO QUE SOS!*/
			}
		}
