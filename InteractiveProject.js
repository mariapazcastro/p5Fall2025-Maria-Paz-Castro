let toystory1
let toystory2
let ball
let woody
let buzz

//position of woody
let woodyX
let woodyY

//position of buzz
let buzzX
let buzzY

//woody speed
let woodyXspeed = 3
let woodyYspeed = 3

//buzz speed
let buzzXspeed = 3
let buzzYspeed = 3

let score = 0

let mouseDist

let level1Bool = true
let level2Bool = false
let winGameBool = false

let timer = 5


function preload(){
	toystory1 = loadImage("toystorymaniaBG1.jpg")
	toystory2 = loadImage("toystorymaniaBG2.jpg")
	ball = loadImage("ShootingBall.png")
	woody = loadImage("WoodyTarget.png")
	buzz = loadImage ("BuzzTarget.png")
}

function setup(){
	createCanvas(windowWidth, windowHeight)
	woodyX = windowWidth/2
	woodyY = windowHeight/2
	buzzX = windowWidth/2
	buzzY = windowHeight/2

	imageMode(CENTER)


}

function draw(){
	background(0)
	image(toystory1, windowWidth/2, windowHeight/2, windowWidth, windowHeight)
	if(level1Bool == true){
		level1Game()
	}

	if(level2Bool == true){
		level2Game()
	}

	if(winGameBool == true){
		winGame()
	}

}



function level1Game(){
	image(toystory1, windowWidth/2, windowHeight/2, windowWidth, windowHeight)
	textSize(40)
	text("Tag Woody! Your score is: "+ score +" points!", 10,100)
	text(timer, 10, 150);

	//timer code
	if (frameCount % 60 == 0 && timer > 0) { // if the frameCount is divisible by 60, then a second has passed. it will stop at 0
    	timer --;
  	}
 
  	//if the timer is zero, switch to level 2 and 
  	//reset the timer to 5 for the next level
  	if (timer == 0) {
    	level1Bool = false 
		level2Bool = true
		timer = 5
  	}

  	//main game
	image(woody, woodyX, woodyY, 200,200)

	mouseDist = dist(mouseX, mouseY, woodyX, woodyY)

	woodyX = woodyX + woodyXspeed
	//woodyY = woodyY + woodyYspeed

	if(woodyX >= windowWidth + 25 ){
		woodyX = -25
		//woodyXspeed = woodyXspeed * 1.3

	}

	// if(woodyY >= windowHeight - 25 || woodyY <= 25){
	// 	woodyYspeed = woodyYspeed * -1
	// }

	if(mouseDist < 25){
		score++
		woodyX = random(26, windowWidth -26)
		//woodyY = random(26, windowHeight - 26)

		woodyXspeed = woodyXspeed * 1.3
		//woodyYspeed = woodyYspeed * 1.3
	}

	//resetting the score and timer variable

	// if(score == 5){
	// 	level1Bool = false 
	// 	level2Bool = true
	// 	timer = 5
	// }

}

function level2Game(){
	
	image(toystory2, windowWidth/2, windowHeight/2, windowWidth, windowHeight)
	textSize(40)
	text("Tag Buzz! Your score is: "+ score +" points!", 10,100)
	text(timer, 10, 150);

	//timer code
	if (frameCount % 60 == 0 && timer > 0) { // if the frameCount is divisible by 60, then a second has passed. it will stop at 0
    	timer --;
  	}

  	//if the timer is zero, switch to the last screen
  	if (timer == 0) {

  		level2Bool = false 
		winGameBool = true
    	
  	}
  	//main game
  	image(buzz, buzzX, buzzY, 200,200)

	mouseDist = dist(mouseX, mouseY, buzzX, buzzY)

	buzzX = buzzX + buzzXspeed
	buzzY = buzzY + buzzYspeed

	if(buzzX >= windowWidth - 25 || buzzX <= 25){
		buzzXspeed = buzzXspeed * -1
	}

	if(buzzY >= windowHeight + 25 || buzzY <= -25){
		buzzYspeed = buzzYspeed * -1
	}

	if(mouseDist < 25){
		score++
		buzzX = random(26, windowWidth -26)
		buzzY = random(26, windowHeight - 26)

		buzzXspeed = buzzXspeed * 1.3
		buzzYspeed = buzzYspeed * 1.3
	}

	// if(score == 5){
		
  	// 	level2Bool = false 
	// 	winGameBool = true
	// }

}

function winGame(){
	image(toystory1, windowWidth/2, windowHeight/2, windowWidth, windowHeight)

	fill(255)
	textSize(40)
	text("You win!", 10, 100)

	image(woody, windowWidth/1.5, windowHeight/2, 200,200)
	image(buzz, windowWidth/2.5, windowHeight/2, 200,200)

}

//function tryAgain(){
	//image(toystory1, windowWidth/2, windowHeight/2, windowWidth, windowHeight)

	//text("You win!", 10, 100)


//}
