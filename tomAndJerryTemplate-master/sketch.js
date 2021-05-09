var cat,mouse
var cimg,mimg,cimg2,cimg3,mimg2,mimg3,trap2
function preload() {
    //load the images here
    cimg=loadImage("images/cat1.png")
    cimg2=loadAnimation("images/cat2.png","images/cat3.png")
    cimg3=loadAnimation("images/cat4.png")
    mimg=loadImage("images/mouse1.png")
    mimg2=loadAnimation("images/mouse2.png","images/mouse3.png")
    mimg3=loadAnimation("images/mouse4.png")
    trap2=loadImage("images/garden.png")

}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    cat=createSprite(700,700,90,100)
    cat.addImage(cimg)
    cat.scale=0.2
    mouse=createSprite(100,700,50,30)
    mouse.addImage(mimg)
    mouse.scale=0.2

}

function draw() {

    background(trap2)
    //Write condition here to evalute if tom and jerry collide
     if(cat.x - mouse.x<(cat.width-mouse.width)/2){
         cat.velocityX=0
         cat.addAnimation("cat",cimg3);
         cat.changeAnimation("cat",cimg3);



        
         cat.x=300
         cat.scale=0.2
         
         mouse.addAnimation("mouse",mimg3);
         mouse.changeAnimation("mouse",mimg3);
         mouse.scale=0.2




     }

    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
  if(keyCode===LEFT_ARROW){
      mouse.addAnimation("mouse",mimg2);
      mouse.changeAnimation("mouse",mimg2);
      mouse.frameDelay=25
      cat.velocityX=-4
      cat.addAnimation("cat",cimg2);
      cat.changeAnimation("cat",cimg2);
      cat.frameDelay=25



  }


}
