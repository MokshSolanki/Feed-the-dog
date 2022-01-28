var dog,sadDog,happyDog;


function preload(){
  sadDog=loadImage("Images/Dog.png");
  happyDog=loadImage("Images/happy dog.png");
}

function setup() {
  createCanvas(1000,400);
  
  dog=createSprite(800,200,150,150);
  dog.addImage(sadDog);
  dog.scale=0.15;
   
   feed = createButton("Feed")
   feed.position(500,200)
   feed.mousePressed(feedDog);

   addFood = createButton("Add Food")
   addFood.position(600,200)
   addFood.mousePressed(addFood);

   foodObj = new Food();
}


function draw() {
  background(46,139,87);
  drawSprites();
}

//function to read food Stock


//function to update food stock and last fed time


//function to add food in stock
