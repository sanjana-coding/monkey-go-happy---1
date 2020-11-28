
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var bananaGroup, obstacleGroup,obstacle;
var score;
var SurvivalTime = 0;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(600,600);
  monkey = createSprite(100,500,10,10);
  monkey.addAnimation('monkey',monkey_running);
  monkey.scale=0.2;
  ground = createSprite(500,550,10000,10);
  bananaGroup = new Group();
  obstacleGroup = new Group();
  
}


function draw() {
  background('white');
  text('Survival Time : ' +SurvivalTime,300,50);
  SurvivalTime = SurvivalTime + Math.round(frameCount/80);
  
if(keyDown('space')&&monkey.y >=150){
  monkey.velocityY=-5;
}
  monkey.velocityY = monkey.velocityY+0.8;
  if(ground.x<0){
    ground.x=ground.width/2;
  }
  monkey.collide(ground);
  if(obstacleGroup.isTouching(monkey)){
    ground.velocityX=0;
    obstacleGroup.setVelocityXEach(0);
    
  }
 ground.velocityX=-2;
food();
obstacles();
  
  
   
  drawSprites();
}
  function food(){
    if(frameCount % 80 === 0){
      banana = createSprite(300,300,10,10);
      banana.y = Math.round(random(120,200));
      banana.addAnimation('banana',bananaImage);
      banana.scale=0.1;
      banana.velocityX=-2;
      banana.lifetime=300;
      bananaGroup.add(banana);
    }
  }
  
function obstacles(){
  if(frameCount % 300 ===0){
    var obstacle = createSprite(300,510,10,10);
    obstacle.velocityX=-2;
    obstacle.x = Math.round(random(100,500));
    obstacle.addImage(obstacleImage);
    obstacle.lifetime=300;
    obstacleGroup.add(obstacle);
    obstacle.scale=0.2;
  }
}
 






