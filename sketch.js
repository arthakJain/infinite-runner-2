var gameState="play"
function preload(){
bgImg=loadAnimation("bg1.jpg")
bgImg2=loadAnimation("bg2.jpg")
rocketImg=loadAnimation("rocket.png")
coinImg=loadAnimation("coin3.png")
asteroidImg=loadAnimation("asteroid.png")
}

function setup() {
 createCanvas(400,400)
 bg=createSprite(200,200,400,400)
 bg.addAnimation("i",bgImg)
 bg.addAnimation("i2",bgImg2)
 bg.scale=2.2

 rocket=createSprite(150,200)
 rocket.addAnimation("r",rocketImg)
 rocket.scale=0.9

 coin=createSprite(300,200)
 coin.addAnimation("c",coinImg)
 coin.scale=0.3

coin.debug=false
rocket.debug=false
rocket.setCollider("rectangle" ,0,0,120,50)
coin.setCollider("rectangle" ,0,0,130,100)
}

function draw() {
 background("black")
if(gameState==="play"){
bg.addAnimation("i",bgImg)

}
if(keyDown (LEFT_ARROW)){
  rocket.x -=2
    }
    if(keyDown (RIGHT_ARROW)){
        rocket.x +=2
        } 
    
        if(keyDown (UP_ARROW)){
            rocket.y -=2
            } 
    
            if(keyDown (DOWN_ARROW)){
                rocket.y +=2
                }    
  drawSprites()


        
        
 if(rocket.isTouching(coin)){
    gameState="play2"
 }       
  if(gameState==="play2"){
    bg.changeAnimation("i2",bgImg2)
    coin.destroy()
    createAsteroids()
  }      
        
        
        }

function createAsteroids(){
  if(frameCount%60===0){
    asteroid=createSprite(400,random(0,400),100,100)
    asteroid.addAnimation("a",asteroidImg)
    asteroid.velocityX=-3
    asteroid.scale=0.5
  }
}





