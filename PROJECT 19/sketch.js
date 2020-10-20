var sonic,sonic_running,bg,bg1,obstacle,obstacle1,invisibleground,coin,coin1;

var score=0;

function setup(){
  
  coin1=loadImage("ring-removebg-preview.png");

  
  bg1=loadImage("bg.jpg");
  
  obstaclegroup = new Group();
  coingroup= new Group();
  
  obstacle1=loadImage("sonic_obstacle-removebg-preview.png");
  
  sonic_running=loadAnimation("SONIC_RUN-removebg-preview.png",
"SONIC_RUN2-removebg-preview.png");
                              
  sonic_fall=loadAnimation("rg5-removebg-preview.png");

  
  
   bg=createSprite(300,200,600,400);
    bg.addImage(bg1);
    bg.scale=1.1;
    bg.velocityX=-4;
  
  sonic=createSprite(70,270,20,70);
     sonic.addAnimation("running",sonic_running);
  sonic.addAnimation("falling",sonic_fall);
  sonic.scale=0.3;
  sonic.setCollider("rectangle",0,0,200,300)
  sonic.debug=false;
  
  invisibleground=createSprite(300,325,600,20)
  invisibleground.visible=false;
  
  
  
}

function draw(){
  createCanvas(600, 400);
  background("white");
  
      stroke("black");
  textSize(20);
  fill("black");
  text("Score :"+score,500,50);
  
    
 
  if(bg.x<=260){
    bg.x=300;
  }
  
  sonic.collide(invisibleground);
  
  if(keyDown("space")&&sonic.y>250){
    sonic.velocityY=-20;
  
  } 
  
  sonic.velocityY=sonic.velocityY+0.7 ;
  
  if(coingroup.isTouching(sonic)){
    score=score+1;
    coingroup.destroyEach();
  }
  
  if(obstaclegroup.isTouching(sonic)){
    sonic.changeAnimation("falling",sonic_fall);
    sonic.velocityY=0;
      bg.velocityX=0;
    sonic.velocityX=0;
    obstaclegroup.setLifetimeEach(-1);
    coingroup.setLifetimeEach(-1);
     obstaclegroup.setVelocityXEach(0);
     coingroup.setVelocityXEach(0);   
  }
  

  
  spawnobstacle();
  spawncoin();
  
  


  
  drawSprites();
}

function spawnobstacle(){
  if(frameCount%160===0){
    var obstacle = createSprite(400,350,300,10);
    obstacle.collide(invisibleground);
    
     obstacle.x = 600;
    obstacle.y=280;
    
    
   obstacle.addImage(obstacle1);
    obstacle.scale=0.5;
    
    
    obstacle.velocityX=-3;
    
    obstacle.lifetime=200;
    
    

    
    obstaclegroup.add(obstacle);
   
  }
 
  
  
}

function spawncoin(){
  if(frameCount%200===0){
    var coin = createSprite(400,350,300,10);
    
     coin.x = 600;
    coin.y=100;
    
    coin.setCollider("rectangle",0,0,200,200)
    coin.debug=false;
    
    
   coin.addImage(coin1);
    coin.scale=0.2;
    
    
    coin.velocityX=-3;
    
    coin.lifetime=200;
    
    

    
    coingroup.add(coin);
   
  }
 
  
  
}