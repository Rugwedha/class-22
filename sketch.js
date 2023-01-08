var ground;
var ball;
//namespacing
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
var engine,world
function preload() {}

function setup() {
  createCanvas(400, 400);

  engine = Engine.create();
  world = engine.world;

  var ground_options = {
    isStatic: true,
  };
  ground = Bodies.rectangle(200, 380, 400, 15, ground_options);
  World.add(world, ground);
   
  var ball_options = {
    restitution: 1
  }
  ball = Bodies.circle(200,200,25,ball_options);
  World.add(world, ball);


}

function draw() {
  background("gray");
  Engine.update(engine);

  rectMode(CENTER);
  rect(ground.position.x, ground.position.y, 400, 15);
  
  ellipseMode(RADIUS)
  ellipse(ball.position.x, ball.position.y,25);

}
