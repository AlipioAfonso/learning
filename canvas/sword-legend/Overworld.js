class Overworld {
    constructor(config) {
        this.element = config.element
        this.canvas = this.element.querySelector(".game-canvas")
        this.ctx = this.canvas.getContext("2d")
        this.ctx.imageSmoothingEnabled = false;
    }

    init() {
        // Draws the map in the canvas
        const img = new Image()
        img.onload = () => {
            this.ctx.drawImage(img, 0, 0)
        }
        img.src = "./images/maps/DemoLower.png"


        const x = 5
        const y = 6
        const heroWidthAndHeight = 32
        const heroWidth = heroWidthAndHeight
        const heroHeight = heroWidthAndHeight

        const shadow = new Image()
        shadow.onload = () => {
            this.ctx.drawImage(
                shadow, 
                0, 0, // Start of the cut
                32, 32, //width and height of the cut
                x * 16 - 8, y * 16 - 18, // Position of the hero
                heroWidth, heroHeight
            )
        }

        shadow.src = "./images/characters/shadow.png"




        // Draws the hero in the canvas
        const hero = new Image()
        hero.onload = () => {
            this.ctx.drawImage(
                hero, 
                0, 0, // Start of the cut
                32, 32, //width and height of the cut
                x * 16 - 8, y * 16 - 18, // Position of the hero
                heroWidth, heroHeight
            )
        }

        hero.src = "./images/characters/people/hero.png"

    }

}