//SHIP
					
					
	// sprites de ship
		var sprShipNormal = new Image()
		var sprShipDmg = new Image()
		var sprShipExplosion = new Image()
		sprShipNormal.src = "sprites/ship/ship.png"
		sprShipDmg.src = "sprites/ship/shipDmg.png"
		sprShipExplosion.src = "sprites/ship/explosion.png"
		
		
		sprShip = sprShipNormal
		sprShipString = "sprShipNormal"
		
	// variables de ship
		
		shipDamaged = false
		var contadorExplosion;
		
		var ship = {
			x: canvas.width / 2,
			y: canvas.height / 2,
			speedX: 0,
			speedY: 0,
			width: 16 * gameScale,
			height: 16 * gameScale,
			speed: 1.5,
			show: true
		}
						
	// hitbox de ship
		var shipHitbox = {
			x: ship.x + 8,
			y: ship.y + 20,
			width: 27, //desde 8 hasta 35
			height: 27, //desde 20 hasta 47
			x2: this.width + this.x,
			y2: this.height + this.y
		}
						
	// funciones de ship
		function dibujarShip(){
			if (ship.show == true){
				ctx.drawImage(sprShip, ship.x, ship.y, ship.width, ship.height)
			}
		}
		
		function actualizarShip(){
			ship.x += ship.speedX
			ship.y += ship.speedY
			ship.x -= ship.speed
							
							
			//hitbox
			shipHitbox.x = ship.x + 8,
			shipHitbox.y = ship.y + 20,
			shipHitbox.x2 = shipHitbox.width + shipHitbox.x,
			shipHitbox.y2 = shipHitbox.height + shipHitbox.y
		}
		
		function shipDamage() {
			if (contadorShield <= 0) {
				
				if (sprShield == sprShield5) {
					sprShip = sprShipDmg
					
					sprShield = sprShield4
					sprShieldString = "sprShield4"
				}
								
				else if (sprShield == sprShield4) {
					sprShip = sprShipDmg
					
					sprShield = sprShield3
					sprShieldString = "sprShield3"
				}
				
				else if (sprShield == sprShield3) {
					sprShip = sprShipDmg
					
					sprShield = sprShield2
					sprShieldString = "sprShield2"
				}
				
				else if (sprShield == sprShield2) {
					sprShip = sprShipDmg
					
					sprShield = sprShield1
					sprShieldString = "sprShield1"
				}
								
				else if (sprShield == sprShield1) {
					sprShip = sprShipExplosion
					
					sprShield = sprShield0
					sprShieldString = "sprShield0"
					ship.speed = 0
					particles.use = false
					particles.show = false
					
					contadorExplosion = 10
				}
				
				contadorShield = 30
				shipDamaged = true
			}
			
		}
		
		
		function shipKill() {
			sprShip = sprShipExplosion
			
			sprShield = sprShield0
			sprShieldString = "sprShield0"
			ship.speed = 0
			particles.use = false
			particles.show = false
			
			contadorExplosion = 10
			
		}
		
		
		function shipGAMEOVER(){
			alert("G A M E  O V E R")
			ship.show = false
			ship.use = false
			
			
			
			contadorExplosion = "NULL"
		}
		
		
//fin de SHIP





//SHIELD
				
	//sprites de shield
	var sprShield0 = new Image()
	var sprShield1 = new Image()
	var sprShield2 = new Image()
	var sprShield3 = new Image()
	var sprShield4 = new Image()
	var sprShield5 = new Image()
	sprShield0.src = "sprites/shield/0.png"
	sprShield1.src = "sprites/shield/1.png"
	sprShield2.src = "sprites/shield/2.png"
	sprShield3.src = "sprites/shield/3.png"
	sprShield4.src = "sprites/shield/4.png"
	sprShield5.src = "sprites/shield/5.png"
		
	var sprShield = sprShield5
	var sprShieldString = "sprShield5"
	
	//variables de shield
	
	var contadorShield = 30
	
	var shield = {
		x: 200,
		y: 16,
		show: true
	}
	
	//funciones de shield
		
	function dibujarShield() {
		if (shield.show == true){
			ctx.drawImage(sprShield, shield.x, shield.y,)
		}
	}
	
	
	
	
//fin de SHIELD
				
				
				
//PARTICLES
	
	//sprites de particles
	
	var sprParticles1 = new Image()
	var sprParticles2 = new Image()
	var sprParticlesBlue1 = new Image()
	var sprParticlesBlue2 = new Image()
	sprParticles1.src = "sprites/ship/particles.png"
	sprParticles2.src = "sprites/ship/particles2.png"
	sprParticlesBlue1.src = "sprites/ship/particlesBlue.png"
	sprParticlesBlue2.src = "sprites/ship/particlesBlue2.png"
	
	
	var sprParticles = sprParticles1
	var sprParticlesString = "sprParticles1"
					
					
	//variables de particles
					
	var contadorParticles = 13
	
	var particles = {
		x: ship.x -64,
		y: ship.y,
		blue: false,
		show: true,
		use: true
	}
					
					
//funciones de particles
	
	function dibujarParticles() {
		if (particles.show == true) {
			ctx.drawImage(sprParticles, particles.x, particles.y)
		}
	}				
	
	function actualizarParticles() {
		if (particles.show == true) {
			
			particles.x = ship.x -64
			particles.y = ship.y
			
			if (ship.speedX == 0) {
				particles.show = false
			}
			
			
			if (particles.use == false) {
				particles.show = false
			}
			
			if (ship.speed >= 4.5){
				particles.blue = true
			} else {
				particles.blue = false
			}
			
		}
	}
	
	
//fin de PARTICLES
