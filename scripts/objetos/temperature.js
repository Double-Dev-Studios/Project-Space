//TEMPERATURE

//Sprites de TEMPERATURE

//En proceso

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

function dibujarTemp(){
	if (temp.show){
		
        ctx.font = "50px Arial"
        
		if(temp.use){
			
			temp.color = "white"
            
			if(temp.value >= 60 && temp.value <80){
				
				temp.color = "red"
				
			} else if (temp.value >= 80) {
				
				temp.color = "red"
				temp.use = false
				shipKill()
			}

			if(temp.value <= -60 && temp.value > -80){
				
				temp.color = "blue"
				
			} else if (temp.value <= -80) {
				
				temp.color = "blue"
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
