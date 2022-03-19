const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
var engine, world, body;
var bg, player,forms,rules;
var gameState = "FORM";
var characterState = "ROOK"
var timer = 10000; 
var timer2,x,y;

function preload() {
 
  
  bg= loadImage("bg.jpeg");
  bishop = loadImage("11 (1).png");
  rook = loadImage("9 (1).png");
  knight = loadImage("10 (1).png");
  queen = loadImage("0(1).png");
 
  
}

function setup() {
  createCanvas(600,600);

  form = new Form();
  engine=Engine.create();
  world=engine.world;
  rules = new Rule();

  timer2 = new Timer();
  player = new Player(540,510,50,80);
  changeCharacter();
}

function draw() {
  background(bg);
  

  if (gameState==="FORM"){
    form.display();
  }
  if (gameState==="RULE"){
    rules.display();
  }
  if (gameState==="PLAY"){
    Engine.update(engine);
    engine.world.gravity.y=0;
    form.greeting.hide();
    keyCheck();
    inBlackTile();

    timer2.display();
    /*if (mouseIsPressed){
      x=mouseX;
      y=mouseY;
      console.log(x,y);*/
      if (inBlackTile()){
        Matter.Body.setPosition(player.body,{x:540, y:510})
      }
    player.display();
  }
  drawSprites()
}
function inBlackTile(){
  x = player.body.position.x;
  y = player.body.position.y;
  if((x>=290 && x<=375 && y>=75 && y<=150) || 
  (x>=70 && x<=145 && y>=150 && y<=225) || 
  (x>=525 && x<=600 && y>=300 && y<=370)|| 
  (x>=0 && x<=70 && y>=370 && y<=450) || 
  (x>=370 && x<=450 && y>=450 && y<=525)|| 
  (x>=145 && x<=220 && y>=525 && y<=600)) 
    {
     return true; 
    } else 
    { 
      return false; 
    }
}
function changeCharacter(){
  var rand = Math.round(random(1,4));
  switch (rand){
    case 1 : characterState="ROOK"
    break
    case 2 : characterState="BISHOP"
    break
    case 3 : characterState="QUEEN"
    break
    case 4 : characterState="KNIGHT"
    break 
    default:    
    break
  }
}
function keyCheck(){
  if (characterState!=="KNGIHT"){
  if (keyDown("left")&&keyDown("up")&&characterState!=="ROOK"&& player.body.position.x>=150 && player.body.position.y>=200){
    Matter.Body.setVelocity(player.body,{x:-16,y:-16});
  } else
  if (keyDown("right")&&keyDown("up")&&characterState!=="ROOK"&& player.body.position.x<=400 && player.body.position.y>=200){
    Matter.Body.setVelocity(player.body,{x:16,y:-16});
  } else
  if (keyDown("left")&&keyDown("down")&&characterState!=="ROOK"&& player.body.position.x>=150 && player.body.position.y<=400){
    Matter.Body.setVelocity(player.body,{x:-16,y:16});
  }else
  if (keyDown("right")&&keyDown("down")&&characterState!=="ROOK"&& player.body.position.x<=400 && player.body.position.y<=400){
    Matter.Body.setVelocity(player.body,{x:16,y:16});
  } else
  if (keyDown("left")&&characterState!=="BISHOP"&& player.body.position.x>=150){
    Matter.Body.setVelocity(player.body,{x:-8,y:0});
  } else
  if (keyDown("right")&&characterState!=="BISHOP"&& player.body.position.x<=400){
    Matter.Body.setVelocity(player.body,{x:8,y:0});
  } else
  if (keyDown("up")&&characterState!=="BISHOP"&& player.body.position.x>=200){
    Matter.Body.setVelocity(player.body,{x:0,y:-8});
  } else
  if (keyDown("down")&&characterState!=="BISHOP"&& player.body.position.y<=400){
    Matter.Body.setVelocity(player.body,{x:0,y:8});
  }
}
else if (characterState==="KNIGHT"){
  //do it
}
}