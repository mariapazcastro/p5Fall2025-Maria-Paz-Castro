
	let tree

	let SmallTree

	function preload(){
	  tree =loadImage("TreeEditado.png")
		SmallTree = loadImage("BabyTree.png")
	}
	
	let sunBool = false
	let growBool = false



function setup(){
	createCanvas(windowWidth, windowHeight)
	background(19, 35, 94)
	
}


function draw(){
	fill(0)
	textSize(20)
	text("Press s for the sun to come out, press g to make the tree grow", 100, 100)

	//ground
	fill(8, 140, 19)
	rect(width/2000, height/1.15, 2000,90)
	image(SmallTree, width/3,height/2.6,400,400)

	//clouds
	fill(96, 105, 107)
	strokeWeight(0)
	ellipse(windowWidth/2, windowHeight/4, 100,100)
	ellipse(windowWidth/2.13, windowHeight/3.3, 100,100)
	ellipse(windowWidth/1.87, windowHeight/3.3, 100,100)

	fill(113, 140, 166)
	ellipse(windowWidth/1.9, windowHeight/2.5, 10,15)
	ellipse(windowWidth/1.9, windowHeight/2, 10,15)
	ellipse(windowWidth/1.9, windowHeight/1.7, 10,15)
	ellipse(windowWidth/2, windowHeight/2.7, 10,15)
	ellipse(windowWidth/2, windowHeight/2.2, 10,15)
	ellipse(windowWidth/2, windowHeight/1.9, 10,15)
	ellipse(windowWidth/2.1, windowHeight/2.4, 10,15)


	//if sun is true draw sun function
	if(sunBool == true){
		
			sunScene()
		
	}

	//if grow tree is true draw tree function
	if(growBool == true){
		
			treeScene()
		
	}
	
}


function sunScene(){
	background(136, 207, 227)
	fill(245, 218, 15)
	ellipse(windowWidth/2, windowHeight/4, 200, 200)
	fill(8, 140, 19)
	rect(width/500, height/1.15, 2000,90)
	image(SmallTree, width/3,height/2.6,400,400)
	
}

function treeScene(){
	background(136, 207, 227)
	fill(8, 140, 19)
	rect(width/500, height/1.15, 2000,90)
	fill(245, 218, 15)
	ellipse(windowWidth/2, windowHeight/4, 200, 200)
	image(tree, width/3,height/2.6,400,400)

}



function keyPressed(){
	if(key === 's'){
		sunBool = true
		growBool = false
	
	}
	if(key === 'g'){
		sunBool = false
		growBool = true
		
	}



}

