const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var particles = [];
var plinkos = [];
var divisions = [];
var divisionHeight = 300;
var width = 400;
var height = 100;

function setup() {
  createCanvas(480,800);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(240, 790, 480, 20);
  for(var k=0; k<=width; k+=80) {
    divisions.push(new Division(k, height-divisionHeight/2, 10, divisionHeight));
  }
  for (var j=40; j<=width; j+=50) {
    plinkos.push(new Plinko(j, 75));
  }
  for (var j=15; j<=width-10; j+=50) {
    plinkos.push(new Plinko(j, 175));
  }
  for (var j=40; j<=width; j+=50) {
    plinkos.push(new Plinko(j, 275));
  }
  for (var j=15; j<=width-10; j+=60) {
    plinkos.push(new Plinko(j, 375));
  }
}

function draw() {
  background(0);
  Engine.update(engine);

  if(frameCount % 60 === 0){
    particles.push(new Particle(random(width/2-10, width/2+10), 10, 10))
  }

  ground.display();
  for(var i=0; i<plinkos.length; i++){  
    plinkos[i].display();
  }
  for(var i=0; i<particles.length; i++){  
    particles[i].display();
  }
  for(var i=0; i<divisions.length; i++){  
    divisions[i].display();
  }
}