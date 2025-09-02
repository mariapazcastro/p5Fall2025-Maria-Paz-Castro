let tree
function preload(){
  tree =loadImage("tree.png")
}

function setup() {
  createCanvas(500, 600);
}

function draw() {
   if(mouseX>width/2 && mouseY>height/2){
   background(101, 205, 240);
  }else{
   background(149, 198, 237)

  }
  
  image(tree, 100,100, 400,400)
  
  //ground rectangle
  fill(51, 97, 51)
  stroke(15, 15, 15)
  strokeWeight(1)
  rect(width/500,height/1.09,500,50)
  
   //ears
  fill(235, 238, 240)
  stroke(15, 15, 15)
  strokeWeight(1)
  ellipse(220,205,45,90)
  ellipse(280,205,45,90)
  fill(222, 202, 217)
  ellipse(220,220,30,60)
  ellipse(280,220,30,60)
  
  //body
  fill(235, 238, 240)
  stroke(15, 15, 15)
  strokeWeight(1)
  ellipse(250,450,185,230) 
  
  //ellipse style
  fill(235, 238, 240)
  stroke(15, 15, 15)
  strokeWeight(1)
  ellipse(250,300,170,140)
  
  //elipse style
  fill(222, 202, 217)
  stroke(15, 15, 15)
  strokeWeight(1)
  ellipse(250,450,130,150)
  
  //ellipse and line style
  fill(15, 15, 15)
  stroke(15, 15, 15)
  strokeWeight(1)
  ellipse(220,280,15,15)
  ellipse(280,280,15,15)
  triangle(250,300,240,315,260,315)
  line(295,310,270,310)
  line(270,310,290,319)
  line(230,310,205,310)
  line(230,310,210,320)
  
  //elipse style
  fill(235, 238, 240)
  stroke(15, 15, 15)
  strokeWeight(1)
  ellipse(200,420,40,40)
  ellipse(300,420,40,40)
  ellipse(195,550,60,40)
  ellipse(305,550,60,40)
  
  //triangle style
  fill(214, 162, 73)
  stroke(214, 162, 73)
  strokeWeight(1)
  triangle(210,420,270,400,270,430)
  ellipse(270,415,30,30)
  
  //line style
  strokeWeight(3)
  stroke(25, 105, 9)
  line(280,415,300,415)
  
  //rect style
  noFill()
  stroke(15, 15, 15)
  strokeWeight(10)
  ellipse(427,480,48,48)
  fill(156, 130, 89)
  stroke(15, 15, 15)
  strokeWeight(1)
  rect(width/1.25,height/1.22,55,60)
  
  if(keyIsPressed == true){
    fill(242, 195, 41)
  stroke(242, 195, 41)
  ellipse(250,60,100,100)
  strokeWeight(10)
  line( 310,60,340,60)
  line(300,90,330,105)
  line(280,110,295,130)
  line(250,120,250,150)
  line(185,60,155,60)
  line(190,90,165,100)
  line(210,115,190,140)
    }else{
  fill(242, 195, 41)
  stroke(242, 195, 41)
  ellipse(250,60,100,100)
  strokeWeight(3)
  line( 310,60,340,60)
  line(300,90,330,105)
  line(280,110,295,130)
  line(250,120,250,150)
  line(185,60,155,60) 
  line(190,90,165,100)
  line(210,115,190,140)
    }
      
  //elipse style
  fill(202, 226, 237)
  stroke(202, 226, 237)
  ellipse(410,150,50,50)
  ellipse(390,170,50,50)
  ellipse(430,170,50,50)
  ellipse(100,150,50,50)
  ellipse(80,170,50,50)
  ellipse(120,170,50,50)
  
  
}