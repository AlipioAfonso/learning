class Person extends GameObject {
    constructor(config) {
        super(config)

        // This property makes the character walk on the grid
        // because it prevents the player of doing anything
        // until it turns it to 0
        this.movingProgressRemaining = 16

        // This property represents direction and velocity 
        // the "x" and "y" will become Person.x or Person.y and
        // it will move by the velocity
        this.direction = "up"
        this.velocity = 0.2
        this.directionUpdate = {
            "up": ["y", -this.velocity],
            "down": ["y", this.velocity],
            "left": ["x", -this.velocity],
            "right": ["x", this.velocity]
        }
    }


    update() {
        this.updatePosition()
    }

    updatePosition() {
        if (this.movingProgressRemaining > 0) {
            const [property, change] = this.directionUpdate[this.direction]
            this[property] += change
            this.movingProgressRemaining -= this.velocity
        }
    }
}