//S E T U P 
	var canvas = document.getElementById("canvas");
	var ctx = canvas.getContext("2d");
	var pausa = true;
	var bucle;
	var boton = document.getElementById("boton");
	var fullboton = document.getElementById("fullboton");
	var playstop = document.getElementById("playstop");
	var resethtml = document.getElementById("reset")
	var gobackhtml = document.getElementById("back")
	
	//setup del teclado
	var k = 0
	
	//movimiento flechas
	var kRight = 39
	var kLeft = 37
	var kUp = 38	
	var kDown = 40
	//disparo y velocidad flechas
	var kZ = 90
	var kX = 88
	var kC = 67
	var kV = 86

	//debug
	var k9 = 57
	
	//movimiento wasd
	var kD = 68
	var kA = 65
	var kW = 87
	var kS = 83
	//disparo y velocidad wasd
	var kP = 80
	var kU = 85
	var kI = 73
	var kO = 79
	
	
	var k1 = 49
	var k2 = 50
	var k3 = 51
	var k4 = 52
	
	//setup de escala y otros
	var fullscreenVar = false
	var gameScale = 4
	var actualChallenge;
	
	
	//setup de musica
	
	var musicEarth = document.createElement('audio');
	var musicMoon = document.createElement('audio');
	var musicVenus = document.createElement('audio');
	var musicMars = document.createElement('audio');
	var musicAsteroidBelt = document.createElement('audio');
	var musicJupiter = document.createElement('audio');
	var musicSaturn = document.createElement('audio');
	var musicUranus = document.createElement('audio');
	var musicNeptune = document.createElement('audio');
	var musicSpace = document.createElement('audio');
	var musicChallengeC = document.createElement('audio');
	var musicLvl = document.createElement('audio');

	var musicPhobos = document.createElement('audio');
	var musicDeimos = document.createElement('audio');
	var musicMercury = document.createElement('audio');
	var musicEurope = document.createElement('audio');
	var musicIo = document.createElement('audio');
	
	musicEarth.setAttribute('src', '../../music/earth.mp3');
	musicMoon.setAttribute('src', '../../music/moon.mp3');
	musicVenus.setAttribute('src', '../../music/venus.mp3');
	musicMars.setAttribute('src', '../../music/mars.mp3');
	musicAsteroidBelt.setAttribute('src', '../../music/asteroids.mp3');
	musicJupiter.setAttribute('src', '../../music/jupiter.mp3');
	musicSaturn.setAttribute('src', '../../music/saturn.mp3');
	musicUranus.setAttribute('src', '../../music/uranus.mp3');
	musicNeptune.setAttribute('src', '../../music/neptune.mp3');
	musicSpace.setAttribute('src', '../../music/space.mp3');
	musicChallengeC.setAttribute('src', '../../music/challengeComplete.mp3');
	musicLvl.setAttribute('src', '../../music/lvlcomplete.mp3');

	musicPhobos.setAttribute('src', '../../music/phobos.mp3');
	musicDeimos.setAttribute('src', '../../music/deimos.mp3');
	musicMercury.setAttribute('src', '../../music/mercury.mp3');
	musicEurope.setAttribute('src', '../../music/europe.mp3');
	musicIo.setAttribute('src', '../../music/io.mp3')
	
	//setup de sfx
	
	var sfxExplosion = document.createElement('audio');
	var sfxHit = document.createElement('audio');
	var sfxSelect = document.createElement('audio');
	var sfxShield = document.createElement('audio');
	var sfxShoot = document.createElement('audio');
	var sfxShoot2 = document.createElement('audio');
	
	sfxExplosion.setAttribute('src', '../../sfx/explosion.wav');
	sfxHit.setAttribute('src', '../../sfx/hit.wav');
	sfxSelect.setAttribute('src', '../../sfx/select.wav');
	sfxShield.setAttribute('src', '../../sfx/shield.wav');
	sfxShoot.setAttribute('src', '../../sfx/shoot.wav');
	sfxShoot2.setAttribute('src', '../../sfx/shoot2.wav');

	//volumen
	sfxExplosion.volume = 0.5
	sfxHit.volume = 0.6
	sfxSelect.volume = 0.5
	sfxShield.volume = 0.6
	sfxShoot.volume = 0.6
	sfxShoot2.volume = 0.6
	
	//misc
	var contadorReset;
	var contadorGoBack;

	//setup de objetos
	
	var asteroidUse = false
	var asteroid2Use = false
	var miniAsteroidUse = false
	var bigAsteroidUse = false
	var fireAsteroidUse = false
	var fireAsteroidAuraUse = false
	var iceAsteroidUse = false
	var iceAsteroidAuraUse = false
	var sateliteUse = false
	var sateliteSpecialUse = false
	var lavaUse = false
	var waterUse = false
	var twisterUse = false
	var lavaRUse = false
	
	


// getRandomInt, si necesitas un numero entero random entre tal y tal numero usa esta funcion
	function getRandomInt(min, max) {
		return Math.floor(Math.random() * (max - min + 1) ) + min;
	}
	
	function randomSatelite(){
		random = Math.floor(Math.random() * 2)
		if (random == 1){
			useShield()
			sprShieldString += 1
			contadorShield = 30
			sprShip = sprShipHP
			sprShipString = "sprShipHP"
			oneActualizarShield()
			} else {
			//si el bool es 0
		}
	}
	
	function randomBigAsteroid(){
		random = Math.floor(Math.random() * 2)
		if (random == 1){
			if (actualChallenge == "bigAsteroids"){
				bigAsteroid.width = 48 * gameScale
				bigAsteroid.height = 48 * gameScale
			} else {
				bigAsteroid.width = 32 * gameScale
				bigAsteroid.height = 32 * gameScale
			}

		} else { //random !== 0

			if (actualChallenge == "bigAsteroids"){
				bigAsteroid.width = 64 * gameScale
				bigAsteroid.height = 64 * gameScale
			} else {
				bigAsteroid.width = 48 * gameScale
				bigAsteroid.height = 48 * gameScale
			}
		}
	}
	
	function randomIceAsteroid(){
		random = Math.floor(Math.random() * 2)
		if (random == 1){
			iceAsteroid.aura = true
		} else {
			iceAsteroid.aura = false
		}
	}