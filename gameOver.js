class gameOver {
    constructor() {
        this.exitImg = loadImage("exit.png")
        this.continueImg = loadImage("continue.png")
        this.timeUp = loadImage("timeUp.png")
        
        this.exit = createSprite(1175,420,20,20)
        this.exit.addImage(this.exitImg)
        this.exit.scale = 0.5
        this.exit.visible = false

        this.continue = createSprite(375,420,20,20)
        this.continue.addImage(this.continueImg)
        this.continue.scale = 0.5
        this.continue.visible = false

    }

    display() {

      
        image(this.timeUp, 830, 200)

       

        if(mousePressedOver(this.exit)) {
            gameState = 0
        }
        else

        if(mousePressedOver(this.continue)) {
            gameState = 1
        }

        drawSprites()

    }

}