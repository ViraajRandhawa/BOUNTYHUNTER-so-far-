var start,startImg;
var desertImg;
var title,titleImg;
var title1,title1Img;
var gameState = "start";
var player,playerImg;
var enemy,enemyImg;
var bulletImg;
var level1,level1Img;
var grayScreenImg;
var life,lifeImg;
var play1Img;



function preload() {
  startImg = loadImage("play.png");
  desertImg = loadImage("desert.png");
  titleImg = loadImage("TITLE.png");
  title1Img = loadImage("starwars.png");
  playerimg = loadImage("mando helmet.png");
  enemyImg = loadImage("stormtrooper.png");
  bulletImg = loadImage("laser bullet.png");
  level1Img = loadImage("level 1.png");
  grayScreenImg = loadImage("screen.png");
  lifeImg = loadImage("life.png");
  play1Img = loadImage("play1.png");

}

function setup() {
  createCanvas(displayWidth,displayHeight - 79);

  enemyGroup = createGroup();
  bulletGroup = createGroup();
  
  title = createSprite(displayWidth - 700, displayHeight - 600);
  title.addImage("title",titleImg);
  title.scale = 1.8;
  
  title1 = createSprite(displayWidth - 700, displayHeight - 800);
  title1.addImage("title",title1Img);
  title1.scale = 0.15;

  start = createSprite(displayWidth - 700, displayHeight - 400);
  start.addImage("start",startImg);
  start.scale = 1;

  
  life = createSprite(displayWidth - displayWidth + 50,displayHeight - displayHeight + 50);
  life.addImage("life",lifeImg);
  life.visible = false;
  life.scale = 0.03;

  life1 = createSprite(displayWidth - displayWidth + 150,displayHeight - displayHeight + 50);
  life1.addImage("life",lifeImg);
  life1.visible = false;
  life1.scale = 0.03;

  life2 = createSprite(displayWidth - displayWidth + 250,displayHeight - displayHeight + 50);
  life2.addImage("life",lifeImg);
  life2.visible = false;
  life2.scale = 0.03;

  level1 = createSprite(displayWidth - 720,displayHeight - 700);
  level1.addImage("level1",level1Img);
  level1.scale = 0.1;
  level1.visible = false;

  player = createSprite(displayWidth - 100, displayHeight - 500);
  player.addImage("mando",playerimg);
  player.visible = false;
  player.scale = 0.1;

//------------------------------------------------------------------------------//
  grayscreen = createSprite(displayWidth - 720,displayHeight - 500,50,50);
  grayscreen.addImage("black",grayScreenImg);
  grayscreen.visible = false;

  grayscreen1 = createSprite(displayWidth - 720,displayHeight - 500,50,50);
  grayscreen1.addImage("black",grayScreenImg);
  grayscreen1.visible = false;

  grayscreen2 = createSprite(displayWidth - 720,displayHeight - 500,50,50);
  grayscreen2.addImage("black",grayScreenImg);
  grayscreen2.visible = false;

  grayscreen3 = createSprite(displayWidth - 720,displayHeight - 500,50,50);
  grayscreen3.addImage("black",grayScreenImg);
  grayscreen3.visible = false;
//------------------------------------------------------------------------------||

//-------------------------------EXTRA------------------------------------------//
 

//-------------------------------EXTRA------------------------------------------||
}

function draw() {
 
  player.y = mouseY;
  
  if (gameState === "start") {
    background(0);
  }
  
  if (mousePressedOver(start)) {
    title.visible = false;
    title1.visible = false;

  
    gameState = "level1start";
  }
   if (gameState === "level1start") {
    background(desertImg);

    player.x = displayWidth - 100;
    player.y = displayHeight - 500;
    player.visible = true;
    life.visible = true;
    life1.visible = true;
    life2.visible = true;

    start.visible = false;

    grayscreen.visible = true;
    grayscreen1.visible = true;
    grayscreen2.visible = true;
    grayscreen3.visible = true;

    
    if (mousePressedOver(level1)) {
      gameState = "level1";
    }

    level1.visible = true;
  }
  if (gameState === "level1") {
    background(desertImg);

    level1.visible = false;
    
    grayscreen.visible = false;
    grayscreen1.visible = false;
    grayscreen2.visible = false;
    grayscreen3.visible = false;
//-------------------ANNOYING PART--------------------------------//
    start.visible = true;
    start.x = displayWidth - 280;
    start.y = displayHeight - displayHeight + 50;
    image(play1Img,displayWidth - 250, displayHeight - displayHeight + 50)
    
    start.scale = 0.7;

    if (frameCount % 70 === 0) {
      enemy = createSprite(0, random(0,820));
      enemy.addImage("trooper",enemyImg);
      enemy.scale = 0.2
      enemy.velocityX = 5;
      enemyGroup.add(enemy);

      if (keyIsDown(32)) {
        var bullet= createSprite(100, 100, 5, 10);
        bullet.y = player.y;
        bullet.x = player.x;
        bullet.addImage("laser",bulletImg);
        bullet.scale = 0.5;
        bullet.velocityX = -20;
        bullet.lifetime = 1000;
        bulletGroup.add(bullet);
      }
      
      if (enemyGroup.isTouching(bulletGroup)) {
        enemyGroup.destroyEach();
        bulletGroup.destroyEach();
      }
//------------------------------------------------------------------||
    }
  }
  drawSprites();
  
}
