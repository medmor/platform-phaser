import LevelBase from './levelBase'

export default class extends LevelBase {

    constructor() {
        super('level2')
    }

    init() {
        super.init(undefined);
    }

    preload() { }

    create() {
        super.create()
        this.player.setY(this.player.startY = 200)
        //this.player.setX(this.player.startX = 1000)

        this.platforms.scene3()

        this.movingPlatforms.scene3()

        this.thornes.scene3()

        this.coins.scene3()
        this.coins.addTween(this)

        this.door = this.add.image(1800, 474, 'door').getBounds()
    }

    update(elapsedTime: number) {
        super.update(elapsedTime)
        if (this.door.contains(this.player.x, this.player.y)) {
            this.scene.start('level3', { playerInventory: this.player.inventory })
        }
    }

}