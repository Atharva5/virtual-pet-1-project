//Create variables here

var dogImg,happyDogImg,database,foodS,foodStock,dog,happyDog

function preload()
{
	//load images here
  dogImg = loadImage("images/Dog.png")
  happyDogImg = loadImage("images/happydog.png")
}

function setup() {
	createCanvas(500, 500);

  dog = createSprite(250,250,10,10)
  dog.addImage(dogImg)
  dog.scale=0.3;
  
  database = firebase.database()

  foodStock = database.ref('Food')
  foodStock.on("value",readStock)

  

}


function draw() {  

  background("lightgreen")

  if(keyWentDown(UP_ARROW)){
    writeStock(foodS)
    dog.addImage(happyDogImg)

  }

  drawSprites();
  //add styles here
  

  fill("black")
  textSize(20)
  stroke(20)
  text("Press the Up Arrow key to feed the Dog", 90, 30)


  fill("black")
  textSize(25)
  stroke(20)
  text("Left over food : " +foodS,160,420);


}

function readStock(data){
foodS = data.val()
}

function writeStock(x){
database.ref('/').update({
  food:x
})

}




