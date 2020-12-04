
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var ground

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}

function setup() {
  createCanvas(600,400);
  
  monkey = createSprite(80,315,20,20);
  monkey.addAnimation("moving",monkey_running);
  monkey.scale = 0.1
  monkey.debug = true;
  
  ground = createSprite(400,350,900,10);
  
  FoodGroup = createGroup();
  obstacleGroup = createGroup();
  
}

function draw() {
  background(180);
  
  ground.velocityX = -4;
  ground.x = ground.width/2;
  
  var survivalTime = 0;
  
  stroke("black");
  textSize(20);
  fill("black");
  survivalTime = Math.ceil(frameCount/frameRate())
  text("Survival Time: "+ survivalTime,250,50);
  
  monkey.collide(ground);
  
  if(keyDown("space")&& monkey.y >= 170) {
   monkey.velocityY = -12;
   }
   
  monkey.velocityY = monkey.velocityY + 0.8
  
  Foods();
  obstacles();
  
  drawSprites();
}

function obstacles(){
  if(frameCount % 300 === 0){
    var obstacle = createSprite(600,310,10,20);
    obstacle.y = Math.round(random(120,250));
    obstacle.addImage(obstacleImage);
    obstacle.scale = 0.2;
    obstacle.velocityX =-7
    obstacle.lifetime = 200;
    
    obstacleGroup.add(obstacle);
  }
}

function Foods(){
  if(frameCount % 80 === 0){
    var banana = createSprite(600,400,10,10);
    banana.y = Math.round(random(120,200));
    banana.addImage(bananaImage);
    banana.scale = 0.1;
    banana.velocityX =-5
    banana.lifetime = 200;
    
    FoodGroup.add(banana);
  }
}






