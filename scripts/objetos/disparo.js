//DISPARO 1
	
	//sprites de disparos (aplica a todos)
	
	var sprBullet = new Image()
	sprBullet.src = "../../sprites/ship/bullet.png"
	
	
	
	
	//variables de disparo 1
	
		var contadorDisparo;
		
		var disparo = {
			x: 50,
			y: 100,
			width: 8 * gameScale,
			height: 1 * gameScale,
			x2: this.x + this.width,
			y2: this.y + this.height,
			speedX: 0,
			disparado: false
		}
		
		
		//funciones de disparo 1
		function dibujarDisparo(){
			if (ship.show == true){
				if (disparo.disparado == true){
					ctx.drawImage(sprBullet, disparo.x, disparo.y, disparo.width, disparo.height)
				}
			}
		}
		
		function actualizarDisparo(){
			disparo.x += disparo.speedX
			
			disparo.x2 = disparo.x + disparo.width
			disparo.y2 = disparo.y + disparo.height 
			
			if (disparo.disparado == false) {
				disparo.speedX = 0
				disparo.x = ship.x + 10
				disparo.y = ship.y + 30
			} else {
				disparo.speedX = 6
			}
		}
				
		function disparar(){
			useShoot()
			disparo.disparado = true
			contadorDisparo = 50
		}
				
				
	//fin de disparo 1
				
	// DISPARO 2
		//variables de disparo 2
		
		var contadorDisparo2;
		
		var disparo2 = {
			x: 50,
			y: 100,
			width: 8 * gameScale,
			height: 1 * gameScale,
			x2: this.x + this.width,
			y2: this.y + this.height,
			speedX: 0,
			disparado: false
		}
		
		
		//funciones de disparo 2
		function dibujarDisparo2(){
			if (ship.show == true){
				if (disparo2.disparado == true){
					ctx.drawImage(sprBullet, disparo2.x, disparo2.y, disparo2.width, disparo2.height)
				}
			}
		}
		
		function actualizarDisparo2(){
			disparo2.x += disparo2.speedX
			
			disparo2.x2 = disparo2.x + disparo2.width
			disparo2.y2 = disparo2.y + disparo2.height 
			
			
			if (disparo2.disparado == false) {
				disparo2.speedX = 0
				disparo2.x = ship.x + 10
				disparo2.y = ship.y + 30
			} else {
				disparo2.speedX = 6
			}
		}
		
		function disparar2(){
			useShoot2()
			disparo2.disparado = true
			contadorDisparo2 = 50
		}
				
	//fin de disparo 2
		
	// DISPARO 3
		//variables de disparo 3
		
		var contadorDisparo3;
		
		var disparo3 = {
			x: 50,
			y: 100,
			width: 8 * gameScale,
			height: 1 * gameScale,
			x2: this.x + this.width,
			y2: this.y + this.height,
			speedX: 0,
			disparado: false
		}
		
		
		//funciones de disparo 3
		function dibujarDisparo3(){
			if (ship.show == true){
				if (disparo3.disparado == true){
					ctx.drawImage(sprBullet, disparo3.x, disparo3.y, disparo3.width, disparo3.height)
				}
			}
		}
		
		function actualizarDisparo3(){
			disparo3.x += disparo3.speedX
			
			disparo3.x2 = disparo3.x + disparo3.width
			disparo3.y2 = disparo3.y + disparo3.height 
			
			if (disparo3.disparado == false) {
				disparo3.speedX = 0
				disparo3.x = ship.x + 10
				disparo3.y = ship.y + 30
			} else {
				disparo3.speedX = 6
			}
		}
		
		function disparar3(){
			useShoot()
			disparo3.disparado = true
			contadorDisparo3 = 50
		}
		
		//fin de disparo 3
		
	function dibujarDisparos() {
		dibujarDisparo()
		dibujarDisparo2()
		dibujarDisparo3()
	}
			
	function actualizarDisparos() {
		actualizarDisparo()
		actualizarDisparo2()
		actualizarDisparo3()
	}
			

