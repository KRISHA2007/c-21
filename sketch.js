
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball;

let world;
let engine;


function setup() {
	createCanvas(800, 400);

  engine = Engine.create();
	world = engine.world;

  var ball_options={
    isStatic : false,
    restitution:0.3,
    friction:0,
    density:1.2
  }

  ball = Bodies.circle(260,100,20,ball_options)
  World.add(world,ball)

  ellipseMode(RADIUS);
	


	//Create the Bodies Here
    ground = new Ground(400,380,800,20)
    leftside = new Ground(480,320,20,100)
    rightside = new Ground(630,320,20,100)
    
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  ground.show()
  leftside.show()
  rightside.show()

  drawSprites();
 
  ellipse(ball.position.x,ball.position.y,20)
 
}

function keyPressed(){
  if (keyCode === UP_ARROW){
    Matter.Body.applyForce(ball,ball.position,{x:25,y:-30})
   
  }
}

