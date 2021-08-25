
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let world;

var ground;
var ball;

var top_wall;

function setup() {
  createCanvas(1000,700);

  engine = Engine.create();
  world = engine.world;
  
  var ball_options = {
  isStatic:false,
    restitution: 0.3, 
 density:1.2,
 friction:0
  }

  ground =new Ground(width/2,500,1000,20);

  leftSide = new Ground(600,340,20,300);
  rightSide = new Ground(950,340,20,300);

  ball = Bodies.circle(100,200,20,ball_options);  
  
 World.add(world,ball)

  rectMode(CENTER);
  ellipseMode(RADIUS);
}


function draw() 
{
  background(0);
  
  ellipse(ball.position.x,ball.position.y,20)

  ground.show();
  leftSide.show();
  rightSide.show();
 

  Engine.update(engine);
}

function keyPressed(){
 if (keyCode ===  UP_ARROW) {
	   Matter.Body.applyForce(ball,{x:0,y:0},{x:1,y:-2})
 }
 
}
