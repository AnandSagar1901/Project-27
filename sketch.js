const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var bobObject1, bobObject2, bobObject3, bobObject4, bobObject5;
var roofObject, rope1, rope2, rope3, rope4, rope5;

function preload() {

}

function setup() {
  createCanvas(800, 600);

  engine = Engine.create();
  world = engine.world;

  //Create the Bodies Here.
  bobObject1 = new bob(400, 400,40);
  bobObject2 = new bob(450, 400,40);
  bobObject3 = new bob(500, 400,40);
  bobObject4 = new bob(350, 400,40);
  bobObject5 = new bob(300, 400,40);
  roofObject = new roof(400, 200, 550, 30);
  rope1 = new rope(bobObject1.body, roofObject.body, 0, 0); ``
  rope2 = new rope(bobObject2.body, roofObject.body, 50, 0);
  rope3 = new rope(bobObject3.body, roofObject.body, 100, 0);
  rope4 = new rope(bobObject4.body, roofObject.body, -50, 0);
  rope5 = new rope(bobObject5.body, roofObject.body, -100, 0);

  Engine.run(engine);

}


function draw() {
  rectMode(CENTER);
  background("lightgreen");
  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();
  roofObject.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  drawSprites();
}
function keyPressed() {
  if (keyCode === UP_ARROW) {
    Matter.Body.applyForce(bobObject3.body, bobObject3.body.position, { x: 75, y: -75 });
  }
}

