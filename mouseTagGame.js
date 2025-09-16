

let tree

//position of furby
let treeX
let treeY

//furby speed
let treeXspeed = 3
let treeYspeed = 3

let score = 0

let mouseDist

let startGameBool = true
let winGameBool = false


function preload(){
	tree = loadImage("TreeEditado.png")

}


function setup(){
	createCanvas(windowWidth, windowHeight)
	treeX = windowWidth/2
	treeY = windowHeight/2

	imageMode(CENTER)

}


function draw(){
	if(startGameBool == true){
		startGame()
	}

	if(winGameBool == true){
		winGame()
	}

}


//function that starts the game
function startGame(){
	background(0)
	fill(255)
	textSize(40)
	text("Tag the tree! Your score is: "+ score +" points!", 10,100)

	image(tree, treeX, treeY, 50,50)

	mouseDist = dist(mouseX, mouseY, treeX, treeY)

	treeX = treeX + treeXspeed
	treeY = treeY + treeYspeed

	if(treeX >= windowWidth - 25 || treeX <= 25){
		treeXspeed = treeXspeed * -1
	}

	if(treeY >= windowHeight - 25 || treeY <= 25){
		treeYspeed = treeYspeed * -1
	}

	if(mouseDist < 25){
		score++
		treeX = random(26, windowWidth -26)
		treeY = random(26, windowHeight - 26)

		treeXspeed = treeXspeed * 1.3
		treeYspeed = treeYspeed * 1.3
	}

	if(score == 5){
		startGameBool = false 
		winGameBool = true
	}

}

//win screen function
function winGame(){
	background(random(255), random(255), random(255))

	fill(255)
	textSize(40)
	text("You win!", 10, 100)

	image(tree, windowWidth/2, windowHeight/2, 200,200)

}