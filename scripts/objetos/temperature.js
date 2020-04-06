//TEMPERATURE

//Sprites de TEMPERATURE

var sprHot = new Image()
var sprCold = new Image()
sprHot.src = "../../menu/hot.png"
sprCold.src = "../../menu/cold.png"

//variables de temperature

var temp = {
	x: canvas.width / 2 - 350,
	y: 50,
	value: 0,
	realValue: 0,
	show: true,
	color: "white",
	use: true
}

//funciones de temperature

function actualizarTemp(){
	temp.realValue = Math.round(temp.value)
}

function dibujarCold(){
	ctx.drawImage(sprCold, 0, 0, canvas.width, canvas.height)
}

function dibujarHot(){
	ctx.drawImage(sprHot, 0, 0, canvas.width, canvas.height)
}

function dibujarTemp(){
	if (temp.show){
		
        ctx.font = "50px Arial"
        
		if(temp.use){
			
			temp.color = "white"
            
			if(temp.value >= 60 && temp.value < 80){
				
				temp.color = "red"
				dibujarHot()
				
			} else if (temp.value >= 80) {
				
				temp.color = "red"
				dibujarHot()
				temp.use = false
				shipKill()
			}

			if(temp.value <= -60 && temp.value > -80){
				
				temp.color = "blue"
				dibujarCold()
				
			} else if (temp.value <= -80) {
				
				temp.color = "blue"
				dibujarCold()
				temp.use = false
				shipKill()
				
			}
		}
		
		ctx.fillStyle = "black"
		ctx.fillText(temp.realValue + " °C", temp.x + 4, temp.y + 4)
		
		ctx.fillStyle = temp.color
		ctx.fillText(temp.realValue + " °C", temp.x, temp.y)
		
	}
}
