var helicopterIMG, helicopterSprite, packageSprite,packageIMG,back,backgroundIMG;
var packageBody,ground;
var basket,basketImage;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
	backgroundIMG = loadImage("back1.jpg")
	basketImage = loadImage("basket.png")
}
function setup() {
	createCanvas(800,700);
	rectMode(CENTER);
	back = createSprite(400,400);
	back.addImage(backgroundIMG);
	back.scale=1;

	packageSprite=createSprite(width/2, 50, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 150, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)

	basket= createSprite(390,590,100,10);
	basket.addImage(basketImage)
	basket.scale = 0.4;

	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 150 , 5 , {restitution:0.2,isStatic:true});
	World.add(world, packageBody);
	
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);
}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  drawSprites();
}
function keyPressed() {
 if (keyCode === DOWN_ARROW) {
  Matter.Body.setStatic(packageBody,false);
  }
}



