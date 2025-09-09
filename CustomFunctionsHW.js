
let tree
function preload(){
  tree =loadImage("treeEditado.png")
}
let SmallTree
function preload(){
	SmallTree = loadImage("SmallTree.png")
}



function setup(){
			createCanvas(windowWidth, windowHeight)
			background(19, 35, 94)
			rectMode(CENTER)
}

function draw(){
fill(0)
			textSize(20)
			text("Press s for the sun to come out, press g to make the tree grow", 100,100)


//ground
fill(8, 140, 19)
rect(width/1.40, height/1.05, 2000,90)

image(tree, width/3,height/2.6,400,400)

}

function keyPressed(){
			if(key==="s"){
				background(136, 207, 227) =true
				background(19, 35, 94) =false
				fill(245, 218, 15)
				Ellipse(400,400,50,50)
				image(tree, width/3,height/2.6,400,400)
}
}

function keyPressed(){
if(key=="g"){
	image(SmallTree, width/3, height/2.4, 400,400) = true
	image(tree, width/3,height/2.6,400,400) = false
}
}



