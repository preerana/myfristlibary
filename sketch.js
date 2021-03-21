var fixedRect,movingRect;
var rect1,rect2
function setup() {
  createCanvas(800,400);
  fixedRect= createSprite(200, 200, 50, 80);
  movingRect= createSprite(400, 200, 80, 30);
  movingRect.shapeColor="GREEN"
  fixedRect.shapeColor="GREEN"
  rect1=createSprite(100,200,40,90)
  rect2=createSprite(300,200,60,50)
  rect1.shapeColor="orange"
  rect2.shapeColor= "pink"
  rect1.velocityX=3;
  rect2.velocityX=-2;
}

function draw() {
  background(255,255,255);  
  movingRect.x=World.mouseX
  movingRect.y=World.mouseY
  if(isTouching(fixedRect,movingRect)){
    movingRect.shapeColor="RED"
    fixedRect.shapeColor="RED"
  }
  else{
    movingRect.shapeColor="GREEN"
    fixedRect.shapeColor="GREEN"
  }
  bounceOff(rect1,rect2)
  drawSprites();
}

