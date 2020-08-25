//Create variables here
var dog, happydog, dogIMG, happydogIMG;
var foodS, foodStock;
var database;


function preload()
{
  //load images here
  
dogIMG= loadImage("Dog.png");
happydogIMG= loadImage("happydog.png");


  
}

function setup() {
	createCanvas(500, 500);
  dog= createSprite(350,480,10,30);
  dog.addImage(dogIMG);

  
  database = firebase.database();
  
  foodStock= databse.ref('Food');
  foodStock.on("value",readStock);
}


function draw() {  

  background(46,139,87);

  if(keyWentDown(UP_ARROW)){
    writeStock(foodS);
    dog.addImage(happydogIMG);
  }








  drawSprites();

  
  //print the foodStock from the databse
  function readStock(data){
    foodS=data.val();
  }

  function writeStock(x){

    if(x<-0){
      x=0;
    }
    else{
      x=x-1;
    }
    
  
  }



    database.ref('/').update({
      food:x
    })
  }





