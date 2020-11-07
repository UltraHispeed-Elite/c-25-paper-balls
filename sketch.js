
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1200, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
box1 = new dustBin(1000,620,230,200);
//box2 = new dustBin(600,300,300,30);
//box3 = new dustBin(720,200,30,150);

ground= new Ground(600,690,1200,20);

Paper = new paper(200,420,70);

	Engine.run(engine);

}


function draw() {
  rectMode(CENTER);
  background("white");

  box1.display();
  //box2.display();
  //box3.display();
  ground.display();
  Paper.display();
  
  drawSprites();
 
}

function keyPressed(){
	if (keyCode === UP_ARROW){
		Matter.Body.applyForce(Paper.body, Paper.body.position, {x:85,y:85});
	}
}

