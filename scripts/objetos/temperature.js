//TEMPERATURE

//Sprites de TEMPERATURE

//En proceso

//variables de temperature

var temp = {
    x: canvas.width / 2 - 350,
    y: 50,
    value: 0,
    show: true,
    use: true
}

//funciones de temperature

function dibujarTemp(){
    if (temp.show){
        ctx.font = "50px Arial"
        if(temp.use){
            ctx.fillStyle = "white"
            if(temp.value >= 60 && temp.value <80){
                ctx.fillStyle = "red"
            } else if (temp.value >= 80) {
                ctx.fillStyle = "red"
                temp.use = false
                shipKill()
            }

            if(temp.value <= -60 && temp.value > -80){
                ctx.fillStyle = "blue"
            } else if (temp.value <= -80) {
                ctx.fillStyle = "blue"
                temp.use = false
                shipKill()
            }
        }

        ctx.fillText(temp.value + " °C", temp.x, temp.y)
    }
}
