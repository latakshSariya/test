const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine , world , box1;
var box2 , ground , pig1;
var log1 , log2 , log3;
var box3 , box4 , pig2;
var box5 , log4;
var angrybird;
var bgimage,log5;
var bg;
var score=0;
var chain1;
var heightedbase;
var gameState = "onsling";

function preload(){
 // bgimage = loadImage("sprites/bg.png");
 changeBg();

}
function setup(){
  createCanvas(1000,500);
  engine = Engine.create();
  world = engine.world;

  
  box1 = new Box(900,400,70,70);
  box2 = new Box(700,400,70,70);
  pig1 = new Pig(790,390);
  log1 = new LOG(800,350,270,PI);
  ground = new Ground(500,460,1000,80);
  
  box3 = new Box(900,340, 70,70);
  box4 = new Box(700,340,70,70);
  pig2 = new Pig(790 , 320);
  log2 = new LOG(800 , 300 , 270 , PI);

  box5 = new Box(800,280,70,70);
  log3 = new LOG(750 , 250 , 150 , -PI / 4);
  log4 = new LOG(850 , 250 , 150 , PI / 4 );
  log5 = new LOG(100,250,150,PI);

  angrybird = new Bird(200,100);

  chain1 = new slingshot(angrybird.body , {x:200 , y:60})

  heightedbase = new Ground(125,340,250,150)
 
}

function draw(){
  if(bgimage)
  background(bgimage);
  noStroke();
  textSize(30);
  text("Score: "+score , 800 , 50);
  Engine.update(engine);
  ground.display();
  box1.display();
  box2.display();
  angrybird.display();
  pig1.display();
  log1.display();
  log3.display();
  box3.display();
  log4.display();
  box5.display();
  box4.display();
  pig2.display();
  log2.display();
  pig1.score();
  pig2.score();
  chain1.display();
  heightedbase.display();
  //console.log(changeBg)
  //changeBg();

}

function mouseDragged(){
  if(gameState !== "launched"){
    Matter.Body.setPosition(angrybird.body, 
    {x:mouseX , y:mouseY})
  }
}

function mouseReleased(){
  gameState = "launched";
  chain1.fly();
}

async function changeBg(){
  var storeTime = await fetch("http://worldtimeapi.org/timezone/Asia/Kolkata");
  console.log(storeTime);
  var JSONTime = await storeTime.json();
  console.log(JSONTime);
  var time = JSONTime.datetime;
  console.log(time);
  var hour = time.slice(11 ,13);
  console.log(hour);
  if (hour >= 06 && hour <= 19){
    bg = "sprites/bg.png";
  }
  else{
    bg = "sprites/bg2.jpg"
  }
  bgimage = loadImage(bg);
}