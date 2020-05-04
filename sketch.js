var car,wall;
var speed,weight;


function setup() {
  createCanvas(1600,400);
  car = createSprite(50,200,90,30)
  wall  = createSprite(1500,200,60,height/2);
  speed = random(55,90);
  weight = random(400,1500);
  car.velocityX = speed
  createSprite(400, 200, 50, 50);
}

function draw() {
  background(255,255,255);  
  drawSprites();
}