//TWISTER

//sprites

var sprTwister = new Image()
var sprAlert = new Image()
sprTwister.src = "sprites/twister.png"
sprAlert.src = "sprites/lava/lava0.png"
var sprTwisterN = sprTwister

//variables

var contadorT = 40
var contadorT2 = 48
var timer = getRandomInt(100, 200)

var twister = {
    x: getRandomInt(64, canvas.width - 64),
    y: canvas.height - 20 * gameScale,
    speedX: 5,
    speedY: 3.5,
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
        if(twister.alert != true){
            twister.width = 20 * gameScale
            twister.height = 20 * gameScale
            sprTwisterN = sprTwister
            if(twister.y <= 0){
                twister.alert = true
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
                if(twister.direction == "left"){
                    twister.direction = "right"
                }
                else{
                    twister.direction = "left"
                }
            }
        }
        else{
            timer = timer - 1
            if(timer <= 0){
                twister.show = true
                if(contadorT2 == 48){
                    twister.x = getRandomInt(64, canvas.width - 64)
                    twister.height = 60 * gameScale
                }
                twister.y = canvas.height - 60 * gameScale
                sprTwisterN = sprAlert

                contadorT2 = contadorT2 - 1
                if(contadorT2 <= 0){
                    twister.alert = false
                    contadorT2 = 48
                    timer = getRandomInt(100, 200)
                }
            }
            else{
                twister.show = false
            }
        }
    }
}