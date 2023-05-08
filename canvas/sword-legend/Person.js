class Person extends GameObject {
    constructor(config) {
        super(config)

        // This property makes the character walk on the grid
        // because it prevents the player of doing anything
        // until it turns it to 0
        this.movingProgressRemaining = 0

        // This property represents direction and velocity 
        // the "x" and "y" will become Person.x or Person.y and
        // it will move by the velocity
        
        this.isPlayerControlled = config.isPlayerControlled || false
        this.isRunning = false
        this.velocity = 0.5
        this.directionUpdate = {
            "up": ["y", -this.velocity],
            "down": ["y", this.velocity],
            "left": ["x", -this.velocity],
            "right": ["x", this.velocity]
        }
    }


    update(state) {
        this.updatePosition()
        this.velocity = state.velocity
        this.isRunning = state.isRunning
        
        if( this.isPlayerControlled && this.movingProgressRemaining === 0 && state.arrow ) {
            
            this.direction = state.arrow
            this.movingProgressRemaining = 16
        }

        
    }

    updatePosition() {
        if (this.movingProgressRemaining > 0) {
            if ( this.isRunning ) {
                this.velocity = properties.runningVelocity
                
            } else {
                this.velocity = properties.normalVelocity
            }
            this.directionUpdate = {
                "up": ["y", -this.velocity],
                "down": ["y", this.velocity],
                "left": ["x", -this.velocity],
                "right": ["x", this.velocity]
            }
                
            const [property, change] = this.directionUpdate[this.direction]
            this[property] += change
            this.movingProgressRemaining -= this.velocity
            this.directionUpdate[this.direction]
        } else if (this.movingProgressRemaining < 0.2) {
            this.movingProgressRemaining = 0
        }
    }
}