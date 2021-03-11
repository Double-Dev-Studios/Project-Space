//LAVA

//sprites de lava

var sprLava0 = new Image()
var sprLava1 = new Image()
var sprLava2 = new Image()
var sprLava3 = new Image()
var sprLava4 = new Image()
sprLava0.src = "../../sprites/lava/lava0.png"
sprLava1.src = "../../sprites/lava/lava1.png"
sprLava2.src = "../../sprites/lava/lava2.png"
sprLava3.src = "../../sprites/lava/lava3.png"
sprLava4.src = "../../sprites/lava/lava4.png"

// Lava Right
var sprLavaR0 = new Image()
var sprLavaR1 = new Image()
var sprLavaR2 = new Image()
var sprLavaR3 = new Image()
var sprLavaR4 = new Image()
sprLavaR0.src = "../../sprites/lava/lavaR0.png"
sprLavaR1.src = "../../sprites/lava/lavaR1.png"
sprLavaR2.src = "../../sprites/lava/lavaR2.png"
sprLavaR3.src = "../../sprites/lava/lavaR3.png"
sprLavaR4.src = "../../sprites/lava/lavaR4.png"

var sprLavaParticles1 = new Image()
var sprLavaParticles2 = new Image()
var sprLavaParticles3 = new Image()
var sprLavaParticles4 = new Image()
sprLavaParticles1.src = "../../sprites/lava/particles1.png"
sprLavaParticles2.src = "../../sprites/lava/particles2.png"
sprLavaParticles3.src = "../../sprites/lava/particles3.png"
sprLavaParticles4.src = "../../sprites/lava/particles4.png"

var sprLava = sprLava0
var sprLavaString = "sprLava0"

var sprLavaR = sprLavaR0
var sprLavaRString = "sprLavaR0"

var sprLavaParticles = sprLavaParticles1
var sprLavaPString = "sprLavaParticles1"

//variables de lava

var contadorLava = 600
var contadorLavaR = 600
var contadorLavaParticles;

var lavaUse = false
var lavaRUse = false

var lava = {
	x: getRandomInt(64, canvas.width - 64),
	y: canvas.height - (64 * gameScale),
	width: 16 * gameScale,
	height: 64 * gameScale,
	x2: this.width * gameScale + this.x,
	y2: this.height * gameScale + this.y,
	show: false
}

var lavaHitbox = {
	x: lava.x,
	y: canvas.height,
	width: lava.width,
	height: 0,
	x2: this.width + this.x,
	y2: this.height + this.y,
	use: false
}

// lava r

var lavaR = {
	x: 0,
	y: getRandomInt(64, canvas.width - 64), 
	width: 64 * gameScale,
	height: 16 * gameScale,
	x2: this.width * gameScale + this.x,
	y2: this.height * gameScale + this.y,
	show: false
}

var lavaRHitbox = {
	x: 0,
	y: lavaR.y,
	width: 0,
	height: lavaR.height,
	x2: this.width + this.x,
	y2: this.height + this.y,
	use: false
}

// lava particles

var lavaParticles = {
	x: lava.x,
	y: canvas.height -64,
	width: 32 * gameScale,
	height: 16 * gameScale,
	show: false
}

function startLavaParticles(){
	sprLavaParticles = sprLavaParticles1
	sprLavaPString = "sprLavaParticles1"
	lavaParticles.show = true
	contadorLavaParticles = 3
}

function nextLavaParticle(){
	switch(sprLavaPString){
		case "sprLavaParticles5":
			lavaParticles.show = false
		break;

		case "sprLavaParticles4":
			sprLavaParticles = sprLavaParticles1
			sprLavaPString = "sprLavaParticles5"
		break;

		case "sprLavaParticles3":
			sprLavaParticles = sprLavaParticles4
			sprLavaPString = "sprLavaParticles4"
		break;

		case "sprLavaParticles2":
			sprLavaParticles = sprLavaParticles3
			sprLavaPString = "sprLavaParticles3"
		break;

		case "sprLavaParticles1":
			sprLavaParticles = sprLavaParticles2
			sprLavaPString = "sprLavaParticles2"
		break;
	}
}



//funciones de lava

function dibujarLava(){
	if (lava.show == true){
		ctx.drawImage(sprLava, lava.x, lava.y, lava.width, lava.height)
	}

	if (lavaR.show == true){
		ctx.drawImage(sprLavaR, lavaR.x, lavaR.y, lavaR.width, lavaR.height)
	}

	if (lavaParticles.show == true){
		ctx.drawImage(sprLavaParticles, lavaParticles.x, lavaParticles.y, lavaParticles.width, lavaParticles.height)
	}
}

function actualizarLava(){
	if (lavaUse == true){
		
		lava.y = canvas.height - (64 * gameScale),
		
		lava.x -= ship.speed

		lavaHitbox.x = lava.x
		lavaHitbox.width = lava.width

		lavaParticles.x = lava.x - 32
		
		if (sprLavaString == "sprLava0"){
			lavaHitbox.height = 0
			lavaHitbox.use = false
			lavaParticles.show = false
		} else {lavaHitbox.use = true}
		
		lavaHitbox.x2 = lavaHitbox.width + lavaHitbox.x
		lavaHitbox.y2 = lavaHitbox.height + lavaHitbox.y
	}
}

function actualizarLavaR(){
	if (lavaRUse == true){
		
		lavaRHitbox.y = lavaR.y
		lavaRHitbox.height = lavaR.height
		
		if (sprLavaRString == "sprLavaR0"){
			lavaRHitbox.width = 0
			lavaRHitbox.use = false
		} else {lavaRHitbox.use = true}
		
		lavaRHitbox.x2 = lavaRHitbox.width + lavaRHitbox.x
		lavaRHitbox.y2 = lavaRHitbox.height + lavaRHitbox.y
	}
}



function generarLava(){
	switch(sprLavaString){
		case "sprLava3":
			lavaHitbox.height = 64 * gameScale;
			lavaHitbox.x2 = lavaHitbox.width + lavaHitbox.x;
			lavaHitbox.y2 = lavaHitbox.height + lavaHitbox.y;
			lavaHitbox.y = canvas.height - (64 * gameScale);

			sprLava = sprLava4;
			sprLavaString = "sprLava4";
		break;

		case "sprLava2":
			lavaHitbox.height = 48 * gameScale;
			lavaHitbox.x2 = lavaHitbox.width + lavaHitbox.x;
			lavaHitbox.y2 = lavaHitbox.height + lavaHitbox.y;
			lavaHitbox.y = canvas.height - (48 * gameScale);
				
			sprLava = sprLava3;
			sprLavaString = "sprLava3";
		break;

		case "sprLava1":
			lavaHitbox.height = 32 * gameScale;
			lavaHitbox.x2 = lavaHitbox.width + lavaHitbox.x;
			lavaHitbox.y2 = lavaHitbox.height + lavaHitbox.y;
			lavaHitbox.y = canvas.height - (32 * gameScale);
			startLavaParticles();
			
			sprLava = sprLava2;
			sprLavaString = "sprLava2";
		break;

		case "sprLava0":
			lavaHitbox.height = 16 * gameScale;
			lavaHitbox.x2 = lavaHitbox.width + lavaHitbox.x;
			lavaHitbox.y2 = lavaHitbox.height + lavaHitbox.y;
			lavaHitbox.y = canvas.height - (16 * gameScale);
			
			sprLava = sprLava1;
			sprLavaString = "sprLava1";
	}
}

function generarLavaR(){
	switch(sprLavaRString){
		case "sprLavaR3":
			lavaRHitbox.width = 64 * gameScale;
			lavaRHitbox.x2 = lavaRHitbox.width + lavaRHitbox.x;
			lavaRHitbox.y2 = lavaRHitbox.height + lavaRHitbox.y;
		
			sprLavaR = sprLavaR4;
			sprLavaRString = "sprLavaR4";
		break;

		case "sprLavaR2":
			lavaRHitbox.width = 48 * gameScale;
			lavaRHitbox.x2 = lavaRHitbox.width + lavaRHitbox.x;
			lavaRHitbox.y2 = lavaRHitbox.height + lavaRHitbox.y;
		
			sprLavaR = sprLavaR3;
			sprLavaRString = "sprLavaR3";
		break;

		case "sprLavaR1":
			lavaRHitbox.width = 32 * gameScale;
			lavaRHitbox.x2 = lavaRHitbox.width + lavaRHitbox.x;
			lavaRHitbox.y2 = lavaRHitbox.height + lavaRHitbox.y;
		
			sprLavaR = sprLavaR2;
			sprLavaRString = "sprLavaR2";
		break;

		case "sprLavaR0":
			lavaRHitbox.width = 16 * gameScale;
			lavaRHitbox.x2 = lavaRHitbox.width + lavaRHitbox.x;
			lavaRHitbox.y2 = lavaRHitbox.height + lavaRHitbox.y;
			
			sprLavaR = sprLavaR1;
			sprLavaRString = "sprLavaR1";
			//lavaRHitbox.use = true;
	}
}

