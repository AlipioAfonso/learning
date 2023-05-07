class Sprite {
    constructor(config) { 

        // Set up the image

        this.img = new Image()
        this.img.src = config.src
        this.img.onload = () => {
            this.isLoaded = true
        }

        // Shadow
        this.shadow = new Image()
        this.useShadow = true // config.useShadow
        if( this.useShadow )
            this.shadow.src = "./images/characters/shadow.png"
        
        this.shadow.onload = () => {
            this.isShadowLoaded = true
        }


        // Configure animation & Initial State
        this.animations = config.animations || {
            idleDown: [
                [0,0]
            ]
            /*walkDown: {
                [0,0], [1,0], [2,0], [3,0] 
            }*/
        }
        this.currentAnimation = config.currentAnimation || "idleDown"
        this.currentAnimationFrame = 0

        // Reference the game Object

        this.gameObject = config.gameObject
    }


    draw(ctx) {
        const x = this.gameObject.x - 8
        const y = this.gameObject.y - 18
        const size = 32

        this.isShadowLoaded && ctx.drawImage(
            this.shadow,
            x,
            y
        )

        ctx.drawImage(
            this.img,
            0,0,
            32,32,
            x,y,
            size, size
            )
    }
}