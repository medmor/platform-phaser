export default class extends Phaser.Physics.Arcade.StaticGroup {

    constructor(world: Phaser.Physics.Arcade.World, scene: Phaser.Scene) {
        super(world, scene)
    }

    scene1() {
        this.create(250, 500, 'ground4')
        this.create(800, 500, 'ground4')
        this.create(1400, 500, 'ground4')
        this.create(1800, 500, 'ground4')


        this.create(500, 474, 'block1')
        this.create(600, 449, 'block2')
        this.create(780, 449, 'block2')
        this.create(880, 474, 'block1')
    }

    scene2(scene: Phaser.Scene) {
        this.create(170, 500, 'ground2')
        this.create(22, 474, 'block1')
        this.create(350, 424, 'block4')
        this.create(1000, 500, 'ground2')
        this.create(800, 424, 'block4')
        this.create(1200, 424, 'block4')
        this.create(1000, 449, 'block3')
        this.create(1670, 500, 'ground4')

    }

    scene3() {
        this.create(100, 250, 'ground1')
        this.create(800, 250, 'ground2')
        this.create(1200, 375, 'ground1')
        this.create(1775, 550, 'ground2')


        this.create(550, 224, 'block1')
        this.create(625, 199, 'block3')
        this.create(800, 199, 'block2')
    }

    updateMovingPlatforms() {

    }
}
