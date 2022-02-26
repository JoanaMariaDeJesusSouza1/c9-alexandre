
var box

function setup() {
  createCanvas(600,600);
  box=createSprite(200,200,30,30);
  box.shapeColor="red"
}

function draw() {
  background("blue");

if(keyDown("up")){
  box.y=box.y-5;
}else if(keyDown("down")){
  box.y+=5;
}
if(keyDown("space")){
  background("black");
}else{
  background("purple");
}
drawSprites();
} 