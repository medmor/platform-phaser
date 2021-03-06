import LevelBase from './levelBase'

export default class extends LevelBase {

    constructor() {
        super('level1')
    }

    init() {
        super.init(undefined);
        (this.scene.get('ui') as any).togglePlayerInventory()
        //this.scene.start('level2')
    }

    preload() {
    }

    create() {
        super.create()
        this.sound.play('music')

        this.platforms.scene1()

        this.thornes.scene1()

        this.coins.scene1()
        this.coins.addTween(this)

        this.door = this.add.image(1800, 424, 'door').getBounds()

    }

    update(elapsedTime: number) {
        super.update(elapsedTime)
        if (this.door.contains(this.player.x, this.player.y)) {
            this.scene.start('level2', { playerInventory: this.player.inventory })
        }
    }


}
