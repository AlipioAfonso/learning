class DirectionInput {
    constructor() {
        this.heldDirections = []

        this.velocity = 0.5

        this.map = {
            "ArrowUp": "up",
            "KeyW": "up",
            "ArrowDown": "down",
            "KeyS": "down",
            "ArrowLeft": "left",
            "KeyA": "left",
            "ArrowRight": "right",
            "KeyD": "right",
            "Shift": "run"

        }
    }

    get direction() {
        return this.heldDirections[0]
    }

    init() {
        document.addEventListener("keydown", event => {
            const direction = this.map[event.code]
            if( direction && this.heldDirections.indexOf(direction) === -1 ) {
                this.heldDirections.unshift(direction)
            }
            
            // Check if character is running
            if( event.code == "ShiftLeft" ||
            event.code == "ShiftRight" )
                this.isRunning = true
        })

        document.addEventListener("keyup", event => {
            const direction = this.map[event.code]
            const index = this.heldDirections.indexOf(direction)
            if( index > -1)
                this.heldDirections.splice(index, 1)
                if( event.code == "ShiftLeft" ||
                event.code == "ShiftRight" )
                    this.isRunning = false
        })

        // For touch screen
        document.addEventListener("touchstart", event => {
            

            let ratio = window.devicePixelRatio || 1;
            let w = screen.width * ratio;
            let h = screen.height * ratio;

            let xTouch = event.touches[0].clientX * ratio
            let y = event.touches[0].clientY
            
            //alert("toque:" + xTouch + ", screen:" + w)

            let click = null

            if( xTouch > w/2 )
                click = "ArrowRight"
            else
                click = "ArrowLeft"
            
            const direction = this.map[click]

            if( direction && this.heldDirections.indexOf(direction) === -1 ) {
                this.heldDirections.unshift(direction)
            }
            
        })
        document.addEventListener("touchend", event => {
            
            //console.log("touch ended")
            const index = this.heldDirections
            
                this.heldDirections = []
            
        })

    }
}