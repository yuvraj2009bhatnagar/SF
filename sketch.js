const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
var engine;
var world;

var boywalk,boywalkleft;
var snow,snowimage,bgimage,boyimage;
var snow = [];

function preload(){

bgimage = loadImage("snow1.jpg")

boyimage = loadImage("1.png")

boywalk = loadAnimation("Run1.png","Run2.png","Run3.png","Run4.png","Run5.png","Run6.png","Run7.png","Run8.png")

boywalkleft = loadAnimation("2.png","3.png","4.png","5.png","6.png","7.png","8.png","9.png")
}




function setup() {

  createCanvas(800,400);
engine = Engine.create();
world = engine.world

  boy1 = createSprite(140, 300, 50, 50);
boy1.addImage("standing",boyimage)
boy1.addAnimation("walking",boywalk)
boy1.addAnimation("walkingleft",boywalkleft)
boy1.scale = 0.2





}

function draw() {
  background(bgimage);  
 Engine.update(engine);
  
 
  if(frameCount%60===0){
   snow.push(new Snow(random(width/2-200,width/2+200),20,40));

}


for (var a = 0 ; a<snow.length; a++){

snow[a].display();

}
  
if (keyDown("LEFT_ARROW")) {
  boy1.x = boy1.x-10;
  boy1.changeAnimation("walkingleft", boywalkleft)

}
  
if (keyDown("RIGHT_ARROW")) {
  boy1.x = boy1.x+10;
  boy1.changeAnimation("walking", boywalk)

}
 
 
 
 
  drawSprites();
}