
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var box1,box2,box3;


function setup() {
	createCanvas(800, 500);


	engine = Engine.create();
	world = engine.world;
	
    ground = new Ground(600,410,1200,12);
	paper = new Paper(50,300,25);

	box1=createSprite(600,400,130,10);
	box1.shapeColor="white";

	box2=createSprite(530,360,10,80);
	box2.shapeColor="white";

	box3=createSprite(667,360,10,80);
	box3.shapeColor="white";

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  ground.display();
  paper.display();
  drawSprites();
 
  keyPressed();
}

function keyPressed(){
if(keyCode===UP_ARROW){
	Matter.Body.applyForce(paper.body,paper.body.position,{x:3,y:-3});
}
}


