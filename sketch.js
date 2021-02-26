
var monkey , monkeyImage
var banana ,bananaImage, obstacle, obstacleImage
//var FoodGroup//, obstacleGroup
var score


function preload(){
  
  
  monkeyImage =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}

function setup() {
 createCanvas(400,400)
  
 // obstacleG = new Group();
  
   monkey = createSprite(80,290,20,50);
   monkey.addAnimation("monkeyImage",monkeyImage); 
   monkey.scale = 0.1;
  
 // banana = createSprite(180,220,20,50);
 // banana.addImage(bananaImage); 
//  banana.scale = 0.1;
  
 // score = createSprite(180,220,20,50);
  //banana.addImage(bananaImage); 
 // score.scale = 1.0;
  
 /* obstacle = createSprite(290,300,20,50);
  obstacle.addImage(obstacleImage); 
  obstacle.scale = 0.1;*/
  
   ground = createSprite(380,320,5000,5);
   ground.velocityX=-4;
  ground.x=ground.width/2;
  
  score=0
}



function draw() {
background("white")
  if(ground.x<0){
    ground.x=ground.width/2
  }
      monkey.velocityY = monkey.velocityY + 0.8
 // obstacle.velocityX = obstacle.velocityY - 3.5
 // banana.velocityX = banana.velocityY - 0.9
  //obstacle.lifetime = 10;
  monkey.collide(ground);
  if(keyDown("space")&& monkey.y >= 100) {
        monkey.velocityY = -12;
       // jumpSound.play();
   // }
  
   //if(monkey.isTouching(obstacle)){
   // monkey.destroy();
    // score=score+1
     }
  
  spawnObstacles();
  spawnFruits();
  drawSprites();
  text("Score: "+ score, 250,50);
}
  function spawnObstacles() {
    //write code here to spawn the clouds
 if (frameCount % 100 === 0) {
    var obstacle = createSprite(400,300,40,10); 
    obstacle.y = Math.round(random(300,300)); 
    obstacle.velocityX = -3.0
    //var obstacle = createSprite(600,120,40,10);
    //obstacle.y = Math.round(random(80,120));
  //  obstacle.velocityX = 3
    obstacle.addImage(obstacleImage);
    obstacle.scale=0.1;
   // obstacleG.add(obstacle)
  }
  }

  
    function spawnFruits() {
    //write code here to spawn the clouds
 if (frameCount % 100 === 0) {
    var banana = createSprite(400,300,40,10); 
    banana.y = Math.round(random(300,300)); 
    banana.velocityX = -3.0
    //var obstacle = createSprite(600,120,40,10);
    banana.y = Math.round(random(80,120));
  //  obstacle.velocityX = 3
    banana.addImage(bananaImage);
    banana.scale=0.1;
   // obstacleG.add(obstacle)
  }
    
 /* function obstacle(){
    //function redBalloon() {
  var obstacle = createSprite(0,Math.round(random(20, 370)), 10, 10,290,300,20,50);
  obstacle.addImage(obstacleImage);
  monkey.velocityY = monkey.velocityY + 0.8
  obstacle.lifetime = 10;
  obstacle.scale = 0.1;
    */
  }    

