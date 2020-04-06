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

var sprLava = sprLava0
var sprLavaString = "sprLava0"


//variables de lava

var contadorLava = 600

var lavaUse = false

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
	y2: this.height + this.y
}


//funciones de lava

function dibujarLava(){
	if (lava.show == true){
		ctx.drawImage(sprLava, lava.x, lava.y, lava.width, lava.height)
	}
}

function actualizarLava(){
	if (lavaUse == true){
		
		lava.y = canvas.height - (64 * gameScale),
		
		lava.x -= ship.speed
		
		lavaHitbox.x = lava.x
		lavaHitbox.width = lava.width
		
		if (sprLavaString == "sprLava0"){
			lavaHitbox.height = 0
		}
		
		lavaHitbox.x2 = lavaHitbox.width + lavaHitbox.x
		lavaHitbox.y2 = lavaHitbox.height + lavaHitbox.y
	}
}



function generarLava(){
		if (sprLavaString == "sprLava0"){
			lavaHitbox.height = 16
			lavaHitbox.x2 = lavaHitbox.width + lavaHitbox.x
			lavaHitbox.y2 = lavaHitbox.height + lavaHitbox.y
			lavaHitbox.y = canvas.height - (16 * gameScale)
			
			sprLava = sprLava1
			sprLavaString = "sprLava1"
		}
		
		else if (sprLavaString == "sprLava1"){
			lavaHitbox.height = 32 * gameScale
			lavaHitbox.x2 = lavaHitbox.width + lavaHitbox.x
			lavaHitbox.y2 = lavaHitbox.height + lavaHitbox.y
			lavaHitbox.y = canvas.height - (32 * gameScale)
			
			sprLava = sprLava2
			sprLavaString = "sprLava2"
		}
		
		else if (sprLavaString == "sprLava2"){
			lavaHitbox.height = 48 * gameScale
			lavaHitbox.x2 = lavaHitbox.width + lavaHitbox.x
			lavaHitbox.y2 = lavaHitbox.height + lavaHitbox.y
			lavaHitbox.y = canvas.height - (48 * gameScale)
			
			sprLava = sprLava3
			sprLavaString = "sprLava3"
		}
		
		else if (sprLavaString == "sprLava3"){
			lavaHitbox.height = 64 * gameScale
			lavaHitbox.x2 = lavaHitbox.width + lavaHitbox.x
			lavaHitbox.y2 = lavaHitbox.height + lavaHitbox.y
			lavaHitbox.y = canvas.height - (64 * gameScale)
			
			sprLava = sprLava4
			sprLavaString = "sprLava4"
		}
		
	
}

