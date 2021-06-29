var intro, USmap, end;
var username;
var gameState = 0;
var timer = 20;
var Qtime = 0;
var randLocation, randAvatar;
var x,y,state;
var answerBox, verifyButton;
var score = 0;

function preload() {


}


function setup() {
  createCanvas(windowWidth,windowHeight);

  intro = new Intro()
  USmap = new USMap()
  end = new gameOver()

  answerBox= createInput("Enter State Name")
  verifyButton = createButton("Go!")
  
}

function draw() {
  background(255,255,255);

  
  console.log(gameState)

  if(gameState === 0)
  {
    intro.display()

    //text("x:" + mouseX,windowWidth-130, 30)
    //text("y:" + mouseY, windowWidth-130,50)
  }

  

  if(gameState === 1) {
    USmap.display()
    textSize(20)
    text("x:" + mouseX,windowWidth-130, 30)
    text("y:" + mouseY, windowWidth-130,50)

    textSize(20)
    text(timer + "s",1320,40)

    gameState = 1.5
  }
  if(gameState === 1.5) {
    USmap.display()
    Timer()

    text("x:" + mouseX,windowWidth-130, 30)
    text("y:" + mouseY, windowWidth-130,50)

    if(timer === 20) {

      USmap.coordinate()
      USmap.avatarSelect()

    }

    answerBox.position(1300,70)
    verifyButton.position(1300,100)

    textSize(20)
    text(timer + "s",1320,40)
    

    if(timer <= 0 && gameState === 1.5) {
      gameState = 2
    }

    verifyButton.mousePressed(()=>{

      if(timer > 0) {
      var userAnswer = answerBox.value()
      userAnswer = userAnswer.toLowerCase()

      if(state === userAnswer) {
        score++
        
      }
    }
    })
   

  }

  if(gameState === 2) 
  {
    end.display()

  }
  
}

function Timer() {

  if(frameCount%30 === 0 && gameState === 1.5) {
    timer=timer-1

  }

  if(timer < 0) {
    gameState=1
  }

}