import Player from "../../characters/player"
import Platforms from "../../world/platforms"
import MovingPlatforms from '../../world/movingPlatforms'
import Thornes from '../../world/thornes'
import Coins from '../../world/coins'
import Inputs from "../../utils/inputs"


export default class extends Phaser.Scene {

    player: Player
    platforms: Platforms
    movingPlatforms: MovingPlatforms
    thornes: Thornes
    coins: Coins
    inputs: Inputs
    door: Phaser.Geom.Rectangle

    lastTime = 0

    constructor(key: string) {
        super(key)
    }

    init(data: any) {
        this.lastTime = this.time.now
        this.cameras.main.setBounds(0, 0, 1920, 600);
        this.physics.world.setBounds(0, 0, 1920, 600, true, true, false, false);
    }

    preload() {
    }

    create() {
        this.inputs = new Inputs(this)

        this.platforms = new Platforms(this.physics.world, this)

        this.movingPlatforms = new MovingPlatforms(this.physics.world, this)

        this.thornes = new Thornes(this.physics.world, this)

        this.coins = new Coins(this.physics.world, this)

        this.player = new Player(this, 50, 300, 'player')
        this.cameras.main.startFollow(this.player);

        this.physics.add.collider(this.player, this.platforms)
        this.physics.add.collider(this.player, this.movingPlatforms, this.player.blockThorneDamage, undefined, this.player)
        this.physics.add.collider(this.player, this.thornes, this.player.thorneDamage, undefined, this.player)


    }

    update(elapsedTime: number) {
        if (this.player.visible) this.player.move(this.inputs.horizontale(), this.inputs.verticale(), elapsedTime - this.lastTime)

        this.movingPlatforms.updateMovingPlatforms()

        const coin = this.coins.checkOverllap(this.player)
        if (coin) this.onCoinTake(coin)

        if (this.player.inventory.lives <= 0) this.scene.start('gameOver')

        this.lastTime = this.time.now
    }

    onCoinTake(coin: any) {
        if (coin.active) {
            this.sound.play('coin')
            coin.active = false
            this.player.onCoinTake()
            this.tweens.add({ targets: coin, y: "-=200", duration: 500, ease: 'Linear' })
                .on('complete', () => {
                    coin.destroy()
                })
        }
    }

}
