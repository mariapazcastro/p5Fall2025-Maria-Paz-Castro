let toystory
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

let startGameBool = true
let winGameBool = false


function preload(){
	toystory = loadImage("toystorymaniaBG.jpg")
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
	image(toystory, windowWidth/2, windowHeight/2, windowWidth, windowHeight)
	if(startGameBool == true){
		startGame()
	}

	if(winGameBool == true){
		winGame()
	}

}



function startGame(){
	image(toystory, windowWidth/2, windowHeight/2, windowWidth, windowHeight)
	textSize(40)
	text("Tag woody! Your score is: "+ score +" points!", 10,100)

	image(woody, woodyX, woodyY, 200,200)

mouseDist = dist(mouseX, mouseY, woodyX, woodyY)

	treeX = treeX + treeXspeed
	treeY = treeY + treeYspeed

	if(woodyX >= windowWidth - 25 || woodyX <= 25){
		woodyXspeed = woodyXspeed * -1
	}

	if(woodyY >= windowHeight - 25 || woodyY <= 25){
		woodyYspeed = woodyYspeed * -1
	}

	if(mouseDist < 25){
		score++
		woodyX = random(26, windowWidth -26)
		woodyY = random(26, windowHeight - 26)

		woodyXspeed = treeXspeed * 1.3
		woodyYspeed = treeYspeed * 1.3
	}

	if(score == 5){
		startGameBool = false 
		winGameBool = true
	}

}



