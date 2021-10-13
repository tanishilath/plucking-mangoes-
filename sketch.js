
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;

var tree, stone,ground;
var mango1,mango2,mango3,mango4,mango5,mango6,mango7,mango8,mango9,mango10,mango11,mango12;
var world,boy;


var launcher;

function preload(){
	boy=loadImage("boy.png");
}

function setup() {
	createCanvas(1400, 650);
	engine = Engine.create();
	world = engine.world;

	stone = new Stone(235,420,30); 

	mango1 = new Mango(1100,150,30);
  mango2 = new Mango(1170,180,30);
	mango3 = new Mango(1010,200,30);
	mango4 = new Mango(1000,120,30);
	mango5 = new Mango(1100,120,30);
	mango6 = new Mango(1000,280,30);
	mango7 = new Mango(900,280,40);
	mango8 = new Mango(1140,200,40);
	mango9 = new Mango(1100,280,40);
	mango10 = new Mango(1200,250,40);
	mango11 = new Mango(1120,100,40);
	mango12 = new Mango(900,110,40);

	tree = new Tree(1050,650);
	ground = new Ground(width/2,650,width,20);

  //create launcher with stone as bodyA
  launcher = new Launcher(stone.body,{x:235,y:420});

	Engine.run(engine);
}

function draw() {

  background("lime");
  Engine.update(engine);
  textSize(25);
 //Fill("green")
  text("hii!!! welcome to my world of games......hope u like this one ;)",50 ,50);
 
  image(boy ,200,350,200,300);
  

  tree.display();
  stone.display();


  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango6.display();
  mango7.display();
  mango8.display();
  mango9.display();
  mango10.display();
  mango11.display();
  mango12.display();

  stone.display();
  ground.display();
  launcher.display();


  detectollision(stone,mango1);
  detectollision(stone,mango2);
  detectollision(stone,mango3);
  detectollision(stone,mango4);
  detectollision(stone,mango5);
  detectollision(stone,mango6);
  detectollision(stone,mango7);
  detectollision(stone,mango8);
  detectollision(stone,mango9);
  detectollision(stone,mango10);
  detectollision(stone,mango11);
  detectollision(stone,mango12);
}

function mouseDragged()
{
  // Set position of stone when mouse is dragged
	Matter.Body.setPosition(stone.body, {x:mouseX, y:mouseY});
}

function mouseReleased()
{
	launcher.fly();
}



function detectollision(lstone,lmango){

  mangoBodyPosition=lmango.body.position
  stoneBodyPosition=lstone.body.position
  
  var distance=dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y)
  	if(distance<=lmango.r+lstone.r)
    {
  	  Matter.Body.setStatic(lmango.body,false);
    }

  }