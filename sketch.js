var movingSpite, fixedSprite;
var obj1, obj2;
var spriteA, spriteB;


function setup() {
  createCanvas(800,400);
  movingSpite = createSprite(100,200,10,20)
  movingSpite.velocityX = 3;
  fixedSprite = createSprite(400, 200, 50, 50);
  spriteA = createSprite(200,200,60,60);
  spriteB = createSprite(400,400,70,70);
}

function draw(){
   /*movingSpite.x = World.mouseX;
   movingSpite.y = World.mouseY;*/
   spriteA.x = World.mouseX;
   spriteA.y = World.mouseY;
  background(255,255,255);
  
  if(isTouching(spriteA, spriteB)){
     spriteA.shapeColor = "green";
     spriteB.shapeColor = "green";
  } else {
    spriteA.shapeColor = "red";
    spriteB.shapeColor = "red";
  }

  bounceOff(movingSpite, fixedSprite);

  drawSprites();
}