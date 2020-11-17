
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ground, engine, world,dustbin,paper,binImg,bin;
function preload()
{
	binImg = loadImage("sprites/dustbin.png")
}

function setup() 
{
  createCanvas(1200,700);
  rectMode(CENTER);

  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);

bin = createSprite(820,485,200,10);
bin.addImage(binImg);
bin.scale = 0.9;

  dustbin = new DustBin(820,590,200,20);
  paper = new Paper(100,500,60);
  
  ground = Bodies.rectangle(width/2,600,width,10,
	{
		isStatic: true
	})
	World.add(world,ground);
}


function draw() {
	rectMode(CENTER);
	background("yellow");
	dustbin.display();
	paper.display();

drawSprites();


}
function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paper.body, paper.body.position,{x:700,y:-700});
	}
}
