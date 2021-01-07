var bananaImage, stoneImage;
var obstaclegroup;
var background,score;
var ground;
var player_running, player;
var foodGrp, obstacleGrp;


function preload()
{
  backImage = loadImage("jungle.jpg");
  player_running =
 loadAnimation("Monkey_01.png","Monkey_02.png","Monkey_03.png","Monkey_04.png","Monkey_05.png","Monkey_06.png","Monkey_07.png","Monkey_08.png","Monkey_09.png","Monkey_10.png");
  
  
  
 bananaImage = loadImage("banana.png");
 stoneImage = loadImage("stone.png");
}


function setup()
{
  createCanvas(600, 400);
  background = createSprite(200,200,400,400);
  background.addImage ("jungle", backImage);
  background.x = background.width /2;
  
  
  player=createSprite(60,300,10,10);
  player.addAnimation("running", player_running);
  player.scale = 0.2;
  
  ground = createSprite(200,400,400,20);
  background.velocityX = -2;
  background.scale = 1.25;
  //ground.x = ground.width /2;
  ground.visible = false; 
  
  obstacleGrp = new Group();
  foodGrp = new Group();
  
  score = 0;
}

function draw()
{
  //background(220);
  
  if(foodGrp.isTouching(player))
     {
     score = score + 2;
     foodGrp.destroyEach();  
     }
  
  if (background.x < 0){
      background.x = background.width/2;
    } 
  
  if(keyDown("space"))
     {
       player.velocityY = -15 
     }
  
  player.velocityY = player.velocityY + 0.8;
  
  spawnfood();
  spawnStones();
  
  switch(score)
  {
      case 10: player.scale = 0.3;
      break;
      case 20: player.scale = 0.4;
      break;
      case 30: player.scale = 0.5;
      break;
      case 40: player.scale = 0.6;
      break;
  }
  
  if(obstacleGrp.isTouching(player))
     {
     player.scale = 0.2;
     }
  
  player.collide(ground);
  drawSprites();
  
  fill('white');
  textSize (20);
  text("Score: "+ score, 400, 100);
  
}


function spawnStones() {
  if (frameCount % 300 === 0) {
    var stone  = createSprite(600,350);
    //stone.y = Math.round(random(88,120));
    stone.addImage(stoneImage);
    stone.scale = 0.3;
    stone.velocityX = -3;
    
     //assign lifetime to the variable
    stone.lifetime = 200;
    
    
    //add each cloud to the group
    obstacleGrp.add(stone);
  }
  
}
    function spawnfood() {
  if (frameCount % 180 === 0) {
    var food  = createSprite(600,120,10,10);
    food.y = Math.round(random(88,120));
    food.addImage(bananaImage);
    food.scale = 0.1;
    food.velocityX = -3;
    
     //assign lifetime to the variable
    food.lifetime = 200;
    
    
    //add each cloud to the group
    foodGrp.add(food);
  }
}
