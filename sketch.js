
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 780);
	rectMode(CENTER);
	



	engine = Engine.create();
	world = engine.world;


	 log1= new Log(200,200,500,10)
	
	 ball=new Ball(300,130,10,10)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  ball.display();
  log1.display();
  


  drawSprites();
 

}


    
  




