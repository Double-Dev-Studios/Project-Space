//Score

	//variables de Score

		var score = {
			x: canvas.width / 4 + 200,
			y: 50,
			number: 0,
			show: true
		}

	//funciones de Score

		function dibujarScore() {
			if (score.show == true) {
				ctx.font = "50px Arial"
				ctx.fillStyle = "black";
				if (score.number !== 0){
					ctx.fillText("Score: " + score.number + "0", score.x + 4, score.y + 4)
				} else {
					ctx.fillText("Score: " + score.number, score.x + 4, score.y + 4)
				}

				if (score.number < 0){
					ctx.fillStyle = "red";
				} else {ctx.fillStyle = "white"}

				if (score.number !== 0){
					ctx.fillText("Score: " + score.number + "0", score.x, score.y)
				} else {
					ctx.fillText("Score: " + score.number, score.x, score.y)
				}


			}
		}
