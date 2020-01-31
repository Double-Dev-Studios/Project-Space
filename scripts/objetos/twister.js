//TWISTER

//sprites

var sprTwister = new Image()
var sprAlert = new Image()
sprTwister.src = "sprites/twister(Prueba)/twister.png"
sprAlert.src = "sprites/lava/lava0.png"
var sprTwisterN = sprTwister

//variables

var contadorT = 50
var contadorT2 = true

var twister = {
    x: getRandomInt(64, canvas.width - 64),
    y: canvas.height - (64 * gameScale),
    speedX: 1.5,
    speedY: 0.75,
    width: 20 * gameScale,
    height: 20 * gameScale,
    show: true,
    use: true,
    alert: false,
    direction: "left"
}

//funciones

function dibujarTwister(){
    if(twister.show == true){
        ctx.drawImage(sprTwisterN, twister.x, twister.y, twister.width, twister.height)
    }
}

function actualizarTwister(){
    if(twister.use == true){
        twister.y -= twister.speedY
        contadorT -= getRandomInt(1, 2)
        if(twister.direction == "left"){
            twister.x -= twister.speed
        }
        else{
            twister.x += twister.speed
        }

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
