var seaImg
var ShipsImgs, sea, ship

function preload(){

  seaImg = loadImage("sea.png")
  ShipsImgs = loadAnimation("ship-1.png", "ship-2.png", "ship-3.png", "ship-4.png")
  
}

function setup(){
  createCanvas(400,400);
  
sea = createSprite(400,100);
sea.addImage(seaImg)
sea.velocityX = -3;

ship = createSprite(100,330)
ship.addAnimation("moveship", ShipsImgs)
ship.scale = 0.1
}

function draw() {
  background("blue");
    drawSprites();

 
}
