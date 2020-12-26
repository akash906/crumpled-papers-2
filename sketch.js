const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var dustbinObj, paperObject,groundObject	
var world;



function setup() {
	createCanvas(1600, 1600);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
	dustbinObj=new dustbin(1200,650);
	paperObject=new paper(200,450,70);
	groundObject=new Ground(width/2,670,width,20);
	

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(225);
  dustbinObj.display();
  paperObject.display();
  groundObject.display();
  
  
}

function keyPressed() {
  	if (keyCode === UP_ARROW) {

    	Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:280,y:-280});
    
  	}
}



