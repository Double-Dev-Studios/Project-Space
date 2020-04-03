//WATER

//sprites de water

var sprWater0 = new Image()
var sprWater1 = new Image()
var sprWater2 = new Image()
var sprWater3 = new Image()
var sprWater4 = new Image()
sprWater0.src = "sprites/water/water0.png"
sprWater1.src = "sprites/water/water1.png"
sprWater2.src = "sprites/water/water2.png"
sprWater3.src = "sprites/water/water3.png"
sprWater4.src = "sprites/water/water4.png"

var sprWater = sprWater0
var sprWaterString = "sprWater0"


//variables de water

var contadorWater = 600

var water = {
	x: getRandomInt(64, canvas.width - 64),
	y: 0,
	width: 16 * gameScale,
	height: 64 * gameScale,
	x2: this.width * gameScale + this.x,
	y2: this.height * gameScale + this.y,
	show: false,
	use: false
}

var waterHitbox = {
	x: water.x,
	y: 0,
	width: water.width,
	height: 0,
	x2: this.width + this.x,
	y2: this.height + this.y
}


//funciones de lava

function dibujarWater(){
	if (water.show == true){
		ctx.drawImage(sprWater, water.x, water.y, water.width, water.height)
	}
}

function actualizarWater(){
	if (water.use == true){
		
		water.y = 0,
		
		water.x -= ship.speed
		
		waterHitbox.x = water.x
		waterHitbox.width = water.width
		
		if (sprLavaString == "sprWater0"){
			waterHitbox.height = 0
		}
		
		waterHitbox.x2 = waterHitbox.width + waterHitbox.x
		waterHitbox.y2 = waterHitbox.height + waterHitbox.y
	}
}



function generarWater(){
		if (sprWaterString == "sprWater0"){
			waterHitbox.y = 0
			waterHitbox.x2 = waterHitbox.width + waterHitbox.x
			waterHitbox.y2 = waterHitbox.height + waterHitbox.y
			waterHitbox.height = 16 * gameScale
			
			sprWater = sprWater1
			sprWaterString = "sprWater1"
		}
		
		else if (sprWaterString == "sprWater1"){
			waterHitbox.y = 0
			waterHitbox.x2 = waterHitbox.width + waterHitbox.x
			waterHitbox.y2 = waterHitbox.height + waterHitbox.y
			waterHitbox.height = 32 * gameScale
			
			sprWater = sprWater2
			sprWaterString = "sprWater2"
		}
		
		else if (sprWaterString == "sprWater2"){
			waterHitbox.y = 0
			waterHitbox.x2 = waterHitbox.width + waterHitbox.x
			waterHitbox.y2 = waterHitbox.height + waterHitbox.y
			waterHitbox.height = 48 * gameScale
			
			sprWater = sprWater3
			sprWaterString = "sprWater3"
		}
		
		else if (sprWaterString == "sprWater3"){
			waterHitbox.y = 0
			waterHitbox.x2 = waterHitbox.width + waterHitbox.x
			waterHitbox.y2 = waterHitbox.height + waterHitbox.y
			waterHitbox.height = 64 * gameScale
			
			sprWater = sprWater4
			sprWaterString = "sprWater4"
		}
		
	
}

