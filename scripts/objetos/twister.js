//TWISTER

//sprites

var sprTwister = new Image()
var sprAlert = new Image()
sprTwister.src = "sprites/twister.png"
sprAlert.src = "sprites/lava/lava0.png"
var sprTwisterN = sprTwister

//variables

var contadorT = 50
var contadorT2 = true

var twister = {
    x: getRandomInt(64, canvas.width - 64),
    y: canvas.height - 20 * gameScale,
    speedX: 1.5,
    speedY: 0.75,
    width: 20 * gameScale,
    height: 20 * gameScale,
    show: true,
    use: true,
    alert: true,
    direction: "left"
}

//funciones

function dibujarTwister(){
    if(twister.show == true){
        ctx.drawImage(sprTwisterN, twister.x, twister.y, twister.width, twister.height)
    }
}

function actualizarTwister(){
    if(twister.use){
        if(alert){
            if(twister.y <= 0){
                twister.y = canvas.height
            }
            twister.y = twister.y - twister.speedY

            if(twister.direction == "left"){
                twister.x = twister.x - twister.speedX
            }
            else{
                twister.x = twister.x + twister.speedX
            }

            contadorT = contadorT - getRandomInt(1, 2)
            if(contadorT <= 0){
                contadorT = 50
                if(contadorT2){
                    twister.direction = "right"
                    contadorT2 = false
                }
                else{
                    twister.direction = "left"
                    contadorT2 = true
                }
            }
        }
    }
}
