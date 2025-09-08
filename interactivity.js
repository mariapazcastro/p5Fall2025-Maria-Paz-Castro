function setup() {
  createCanvas(600, 600);
  
}

function draw() {
  
  if(mouseX>width/2 && mouseY>height/2){
   background(17, 135, 189);
   // fill(198, 124, 230)
  }else{ 
   background(220)
    fill(187, 240, 188)
  } 
  
  if(mouseIsPressed == true){
    stroke(10)
  }else{
noStroke()
    fill(99, 168, 158)
  }
  
  if(keyIsPressed == true){
    stroke(0)
    strokeWeight(10)
  }else{
    stroke(255)
    strokeWeight(1)
  
  }
     
 ellipse(mouseX,mouseY,40,40)
  //line(pmouseX, pmouseY,mouseX,mouseY)
  //noCursor()
  
  //print(mouseX)
}