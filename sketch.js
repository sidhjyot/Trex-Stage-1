var trex, trex_running, trex_collided;
var ground, invisibleGround, groundImage;

function preload(){
  trex_running = loadAnimation("trex1.png","trex3.png","trex4.png");
  groundImage = loadImage("ground2.png");
}

function setup() {
  createCanvas(600, 200);
  
  //create a trex sprite
  trex = createSprite(50,180,20,50);
  trex.addAnimation("running", trex_running);
  
  //adding scale and position to trex
  trex.scale = 0.5;
  trex.x = 50
  
  //create ground sprite
  ground = createSprite(300,180,600,20);
  ground.addImage("ground", groundImage);

  //create  an invisible ground
 
}

function draw() {
  background(220);

  console.log(trex.y);
 
  ground.velocityX = -3;

  if(ground.x < 0){
    ground.x = ground.width/2;
  }
  //jumping the trex on space key press
  if(keyDown("space") && trex.y >=150) {
    trex.velocityY = -10;
  }
  
  // Adding gravity
  trex.velocityY = trex.velocityY + 0.8
  
 
 //stop trex from falling down 
  trex.collide(ground);
  drawSprites();
}
