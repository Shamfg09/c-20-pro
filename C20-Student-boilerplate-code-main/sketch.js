
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let world;
var ball;
var ground;
var ground2;
var wall1;
var rock;
function setup() {
  createCanvas(400,400);

  engine = Engine.create();
  world = engine.world;
  
   var ball_options = {
    restitution: 0.95,
    frictionAir:0.01
  }
   
   var ground_options ={
     isStatic: true
   };
  
  
  ground = Bodies.rectangle(200,280,400,20,ground_options);
  World.add(world,ground);

  ball = Bodies.circle(100,10,20,ball_options);
  World.add(world,ball);
  
  wall1=Bodies.rectangle(300,200,200,20,ground_options);
  World.add(world,wall1);
  
  var rock_options={
    restitution:0.1
  }
  rock=Bodies.circle(250,10,20,rock_options);
  World.add(world,rock);
  rectMode(CENTER);
  ellipseMode(RADIUS);
}


function draw() 
{
  background(51);
  Engine.update(engine);
  
  ellipse(ball.position.x,ball.position.y,20);
  rect(ground.position.x,ground.position.y,400,20);
  rect(wall1.position.x,wall1.position.y,200,20);
  ellipse(rock.position.x,rock.position.y,20);
}

