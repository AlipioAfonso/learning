class OverworldMap {

    constructor(config) {
        this.gameObjects = config.gameObjects

        this.lowerImage = new Image()
        this.lowerImage.src = config.lowerSrc

        this.upperImage = new Image()
        this.upperImage.src = config.upperSrc
    }


    drawLowerImage(ctx) {
        ctx.drawImage( this.lowerImage, 0, 0 )
    }

    drawUpperImage(ctx) {
        ctx.drawImage( this.upperImage, 0, 0 )
    }
}

window.OverworldMaps = {
    DemoRoom: {
        lowerSrc: "./images/maps/DemoLower.png",
        upperSrc: "./images/maps/DemoUpper.png",
        gameObjects: {
            hero: new Person({
                x: utils.withGrid(5),
                y: utils.withGrid(6),
                isPlayerControlled: true
            }),
            npc1: new Person({
                x: utils.withGrid(7),
                y: utils.withGrid(4),
                src: "./images/characters/people/npc1.png"
            })
        },
    },
    Kitchen: {
        lowerSrc: "./images/maps/KitchenLower.png",
        upperSrc: "./images/maps/KitchenUpper.png",
        gameObjects: {
            hero: new GameObject({
                x: 4,
                y: 4
            }),
            npcA: new GameObject({
                x: 9,
                y: 4,
                src: "./images/characters/people/npc2.png"
            }),
            npcB: new GameObject({
                x: 4,
                y: 7,
                src: "./images/characters/people/npc3.png"
            })
        },
    }
}