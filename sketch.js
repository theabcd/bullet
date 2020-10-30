var thickness,wall
var speed,weight,bullet

function setup() {
thickness=random(22,83)
speed=random(223,321)
weight=random(30,52)
  createCanvas(1600,400);
  //createSprite(400, 200, 50, 50);

  wall=createSprite(800,200,thickness,height/2);
  wall.shapeColor=color(80,80,80);
  bullet=createSprite(400,200,40,20)
  bullet.velocityX=speed;

}

function draw() {


  background(255,255,255);  

  if(hasCollided(bullet,wall)){
    bullet.velocityX=0;
    var damage=0.5*weight*speed*speed/(thickness*thickness*thickness)
    console.log(damage)
    if(damage>10){
      wall.shapeColor=color(255,0,0);
  
    }
  
    if(damage<10){
    wall.shapeColor=color(0,255,0)
    }
  }

  drawSprites();

}

function hasCollided(bullet,wall){
bulletRightEdge=bullet.x+bullet.width;
wallLeftEdge=wall.x
if(bulletRightEdge>=wallLeftEdge){
  return true;
}
return false;
}
