class USMap {
    constructor() {
        this.image = loadImage("empty map.jpg")
        this.person1 = loadImage("person1.png")
        this.person2 = loadImage("person2.png")
        this.person3 = loadImage("person3.png")
        
    }

    display() {

        push()
        image(this.image, 0, 0, windowWidth,windowHeight)
        pop()


    }

    coordinate() {
        randLocation = Math.round(random(1,50))

        switch(randLocation) {
            case 1: x = 600; y = 300; state = "wyoming"
            break
            case 2: x = 782; y = 517; state = "texas"
            break
            case 3: x = 93; y = 43; state = "alaska"
            break
            case 4: x = 145; y = 513; state = "hawaii"
            break
            case 5: x = 335; y = 166; state = "washington"
            break
            case 6: x = 285, y =  213; state = "oregon"
            break
            case 7: x = 251; y = 379; state = "california"
            break
            case 8: x = 420; y = 250; state = "idaho"
            break
            case 9: x = 350; y = 340; state = "nevada"
            break
            case 10: x = 480; y = 371; state = "utah"
            break
            case 11: x = 452; y = 475; state = "arizona"
            break
            case 12: x = 594; y = 477; state = "new mexico"
            break
            case 13: x = 615; y = 385; state = "colorado"
            break
            case 14: x = 588; y = 201; state = "montana"
            break
            case 15: x = 765; y = 205; state = "north dakota"
            break
            case 16: x = 759; y = 269; state = "south dakota"
            break
            case 17: x = 810; y = 400; state = "kansas" 
            break
            case 18: x = 786; y = 335; state = "nebraska"
            break
            case 19: x = 845; y = 470; state = "oklahoma"
            break
            case 20: x = 960; y = 485; state = "arkansas"
            break
            case 21: x = 930; y = 325; state = "iowa"
            break
            case 22: x = 960; y = 410; state = "missouri"
            break
            case 23: x = 900; y = 245; state = "minnesota"
            break
            case 24: x = 1393; y = 270; state = "new york"
            break
            case 25: x = 1020; y = 270; state = "wisconsin"
            break
            case 26: x = 1132; y = 280; state = "michigan"
            break
            case 27: x = 1045; y = 345; state = "illinois"
            break
            case 28: x = 1112; y = 367; state = "indiana"
            break
            case 29: x = 1195; y = 360; state = "ohio"
            break
            case 30: x = 1170; y = 410; state = "kentucky"
            break
            case 31: x = 1124; y = 455; state = "tennessee"
            break
            case 32: x = 1287; y = 605; state = "florida"
            break
            case 33: x = 1323; y = 331; state = "pennsylvania"
            break
            case 34: x = 1220; y = 525; state = "georgia"
            break
            case 35: x = 1120; y = 515; state = "alabama"
            break
            case 36: x = 1047; y = 526; state = "mississippi"
            break
            case 37: x = 1280; y = 485; state = "south carolina"
            break
            case 38: x = 1333; y = 439; state = "north carolina"
            break
            case 39: x = 1443; y = 243; state = "new hampshire"
            break
            case 40: x = 1414; y = 236; state = "vermont"
            break
            case 41: x = 1320; y = 393; state = "virginia" 
            break
            case 42: x = 1253; y = 380; state = "west virginia"
            break
            case 43: x = 1477; y = 198; state = "maine"
            break
            case 44: x = 1403; y = 333; state = "new jersey"
            break
            case 45: x = 1352; y = 357; state = "maryland"
            break
            case 46: x = 1455; y = 269; state = "massachusetts"
            break
            case 47: x = 1389; y = 359; state = "delaware"
            break
            case 48: x = 1434; y = 290; state = "connecticut"
            break
            case 49: x = 1461; y = 285; state = "rhode island"
            break
            case 50: x = 965; y = 565; state = "louisiana"

        }
    }

    avatarSelect() {
        randAvatar = Math.round(random(1,3))
         switch(randAvatar) {
             case 1: image(this.person1, x,y)
             break
             case 2: image(this.person2, x,y)
             break
             case 3: image(this.person3, x,y)
             
         }
    }

    displayQuiz() {


    }

}