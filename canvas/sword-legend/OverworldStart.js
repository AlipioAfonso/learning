class Overworld {
    // This class is responsible to ignite the game
    // choose the map and selecting canvas
    constructor(config) {
        // Catching and setting up canvas
        // Passing canvas element through constructor
        this.element = config.element
        // Catching the canvas element
        this.canvas = this.element.querySelector(".game-canvas")
        // Setting up context
        this.ctx = this.canvas.getContext("2d")

        //  The map was okay without this setting, but when zooming
        // the character, it got pixelated-blurry
        this.ctx.imageSmoothingEnabled = false

        // Declaring variable responsible to choose the current map
        this.map = null

    }

    
    
    // Starts the request frame loop
    startGameLoop() {
        let timestep = 1000 / 60
        let movement = 1
        const frame = timestamp => {
            
            // Clear the canvas so no image renders dragged
            this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)
            this.map.drawLowerImage(this.ctx) // Draw Lower Layer

            // Draw Game Objects through sprite class
            Object.values(this.map.gameObjects).forEach(game_object => {
                game_object.update({
                    arrow: this.directionInput.direction,
                    velocity: this.directionInput.velocity,
                    isRunning: this.directionInput.isRunning
                })
                game_object.sprite.draw(this.ctx)
            })

            this.map.drawUpperImage(this.ctx) // Draw Upper Layer
            
            

            requestAnimationFrame( () => {frame()} )
        }
        
        frame() // Starts requestAnimationFrame()
    }


    // Ignites the game
    init() {
        // Chooses the current boot map
        this.map = new OverworldMap(window.OverworldMaps.DemoRoom)

        this.directionInput = new DirectionInput()

        this.directionInput.init()
        
        this.startGameLoop()
    }

}