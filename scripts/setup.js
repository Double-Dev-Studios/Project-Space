//S E T U P 
	var canvas = document.getElementById("canvas");
	var ctx = canvas.getContext("2d");
	var pausa = true;
	var bucle;
	var boton = document.getElementById("boton");
	var fullboton = document.getElementById("fullboton");
	
	//setup del teclado
	var k = 0
	var kRight = 39
	var kLeft = 37
	var kUp = 38	
	var kDown = 40
	var kZ = 90
	var kX = 88
	var kC = 67
	
	var k1 = 49
	var k2 = 50
	var k3 = 51
	var k4 = 52
	
	//setup de escala y otros
	var fullscreenVar = false
	var gameScale = 4
	
	//var charge = false
	
	
	//setup de musica
	
	var musicEarth = document.createElement('audio');
	var musicMoon = document.createElement('audio');
	var musicVenus = document.createElement('audio');
	var musicMars = document.createElement('audio');
	musicEarth.setAttribute('src', 'music/earth.mp3');
	musicMoon.setAttribute('src', 'music/moon.mp3');
	musicVenus.setAttribute('src', 'music/venus.mp3');
	musicMars.setAttribute('src', 'music/mars.mp3');

// getRandomInt, si necesitas un numero entero random entre tal y tal numero usa esta funcion
	function getRandomInt(min, max) {
		return Math.floor(Math.random() * (max - min + 1) ) + min;
	}

