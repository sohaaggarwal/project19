//Global Variables
var monkey,monkey_image,bananaGroup,ground,obstacle,banana_img,obstacle_img,obstaclegroup,back,back_img,score,survivaltime;


function preload(){
  monkey_image=loadAnimation("Monkey_01.png","Monkey_02.png","Monkey_03.png","Monkey_04.png","Monkey_05.png","Monkey_06.png","Monkey_07.png","Monkey_08.png","Monkey_09.png");
  banana_img=loadImage("Banana.png");
  obstacle_img=loadImage("stone.png");
  back_img=loadImage("Jungle.png");                              
}


function setup() {
  createCanvas(800,400);
  monkey=createSprite(200,370,20,20);
  ground=createSprite(200,390,800,10); 
  ground.velocityX=-3;
  ground.x=ground.width/2;
  bananaGroup=new Group();
  obstaclegroup=new Group();  
  monkey.addAnimation("running",monkey_image);
  monkey.scale=0.1;
   survivaltime=0;
  score=0;
back=createSprite(200,100,200,100);
  back.addImage("jungle",back_img);
  back.velocityX=-3;
  back.x=back.width/2;
  ground.visible=false;
}

function draw(){
 background(255); 
  if(keyDown("space")){monkey.velocityY=-3;}
  monkey.velocityY=monkey.velocityY+0.2;
  if(ground.x<0){
    ground.x=ground.width/2;}
  if(background.x<0){
    ground.x=ground.width/2;}
    monkey.collide(ground);
  if(frameCount%80===0){
    banana=createSprite(800,200,20,20);
    banana.y=random(120,200);
    banana.addImage(banana_img);
    banana.scale=0.1;
    banana.velocityX=-3;
    bananaGroup.add(banana);
    banana.setLifetime=100;
  }
   if(frameCount%300===0){
    obstacle=createSprite(400,200,20,20);
    obstacle.y=random(120,200);
    obstacle.addImage( stoneimage);
    obstacle.scale=0.1;
    obstacle.velocityX=-5;
    obstaclegroup.add(obstacle);
    obstacle.setLifetime=100;
  }
  if(bananaGroup.isTouching(monkey)){
    score=score+2;
    bananagroup.destroyEach();
  }
  var rand = Math.round(random(10,40));
    switch(score) {
      case 10: player.scale=0.12;
              break;
      case 20: player.scale=0.14;
              break;
      case 30: player.scale=0.16;
              break;
      case 40: player.scale=0.18;
              break;
      
      default: break;
    }
if(obstaclegroup.isTouching(monkey)){
   monkey.scale=0.2;
   }
  
 
 stroke("black");
  fill("black");
   survivaltime=Math.floor(frameCount/frameRate())              
    text("Survival Time :"+ survivaltime,500,50);
  text("score:"+score,500,20);
     textSize(20);
    drawSprites();
 
}
