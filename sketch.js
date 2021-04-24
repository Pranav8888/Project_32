var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;

var engine;
var world;
var particles = [];
var spiderMan;

var gameState = 'play';

function preload() {
}

function setup() {
  createCanvas(800, 400);
  colorMode(HSB);
  engine = Engine.create();
  world = engine.world;
  world.gravity.y = 0;

  newParticle();

  spiderMan = new SpiderMan(100, 200, 70, 70);

}

function newParticle() {
  var p = new Particle(750, random(20, 380), 10, 10);
  Matter.Body.setVelocity(p.body, {x: -5, y: 0});  
  particles.push(p);
}

function keyPressed() {
  if(keyCode === 38) {
    spiderMan.body.position.y = spiderMan.body.position.y -2;
  }
  if(keyCode === 40) {
    spiderMan.body.position.y = spiderMan.body.position.y +2;
  }
}

function draw() {
  background(0, 0, 0);
  
  if(spiderMan.body.position.x > 0) {
    if (frameCount % 60 == 0) {
      newParticle();
    }
    Engine.update(engine, 1000 / 30);
    for (var i = 0; i < particles.length; i++) {
      particles[i].show();
      if (particles[i].isOffScreen()) {
        World.remove(world, particles[i].body);
        particles.splice(i, 1);
        i--;
      }
    }
  
    spiderMan.display();
  } else {
    textSize(32);
    text('Game Over', 300, 200);
  }
  
}
