var dog, dogImg, happyDog, database, foodS, foodStock;
function preload()
{
  loadImage("sprites/Dog.png");
  loadImage("sprites/happydog");
}

function setup() {
  createCanvas(500, 500);
  dog = createSprite(200,200,50,50); 
  dog.addImage(dogImg);
  foodStock = database.ref("Food");
  foodStock.on("value,readStock");

  
}


function draw() 
{  
  background(46, 139, 87)
  if(keyWentDown(UP_ARROW)) 
  {
    writeStock(foodS);
    dog.addImage(happyDog);
    foodStock = foodStock-1;
  }
  
  
  
  
  
  drawSprites();
  //add styles here

}

function readStock(data) {
  foodS = data.val();

}

function writeStock(x)
{
  database.ref('/').update({})
}