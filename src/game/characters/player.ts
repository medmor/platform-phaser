import PlayerInventory from './playerInventory'
import UI from '../scenes/others/ui'


export default class extends Phaser.Physics.Arcade.Sprite {

    startX: number;
    startY: number;
    emitter: Phaser.GameObjects.Particles.ParticleEmitterManager
    inventory: PlayerInventory
    jumpTweens: { start: Phaser.Tweens.Tween, middle: Phaser.Tweens.Tween, end: Phaser.Tweens.Tween } = { start: undefined, middle: undefined, end: undefined }

    parentScene: Phaser.Scene
    UILayer: UI

    canDamage = true

    constructor(scene: Phaser.Scene, x: number, y: number, texture: string | Phaser.Textures.Texture, frame?: string | number) {

        super(scene, x, y, texture, frame)

        this.startX = x
        this.startY = y

        this.parentScene = scene

        this.parentScene.add.existing(this)

        this.initPhysics()
        this.addJumpTween()

        this.emitter = this.parentScene.add.particles('player')

        this.inventory = new PlayerInventory(this.parentScene)
        this.UILayer = <UI>scene.scene.get('ui')
    }

    initPhysics() {
        this.parentScene.physics.add.existing(this)
        this.setCollideWorldBounds(true)
        this.setBounce(0.2)
        this.setGravity(0, 500)
        //this.setCircle(25)
    }

    move(inputX: number, inputY: number, deltatime: number) {

        if (this.body.touching.down) {
            if (inputX !== 0) this.setVelocityX(inputX * deltatime)

            if (inputY !== 0) {
                this.jumpTweens.start.play()
            }

            this.setVelocityX(this.body.velocity.x * .89)

        } else {

            this.setVelocityX(this.body.velocity.x * .986)
        }

        if (this.y > 550) {
            this.die()
        }
    }

    reset() {
        this.x = this.startX
        this.y = this.startY
        this.inventory.setHealth(100)
        this.UILayer.setHealth(100)
        this.canDamage = true
    }

    onCoinTake() {
        this.inventory.setCoins(this.inventory.coins + 1)
        this.UILayer.setCoins(this.inventory.coins.toString())
    }

    thorneDamage() {
        if (this.canDamage) {
            this.parentScene.sound.play('hit')
            this.canDamage = false
            this.setVelocityY(-200)
            if (this.inventory.health < 11) {
                this.inventory.setHealth(0)
                this.UILayer.setHealth(this.inventory.health)
                this.die()
            } else {
                this.inventory.setHealth(this.inventory.health - 10)
                this.UILayer.setHealth(this.inventory.health)
                setTimeout(() => { this.canDamage = true }, 500)
            }
        }
    }

    blockThorneDamage(player: any, block: any) {
        if (this.canDamage && block.body.touching.down) {
            this.parentScene.sound.play('hit')
            this.canDamage = false
            if (this.inventory.health < 11) {
                this.inventory.setHealth(0)
                this.UILayer.setHealth(this.inventory.health)
                this.die()
            } else {
                this.inventory.setHealth(this.inventory.health - 10)
                this.UILayer.setHealth(this.inventory.health)
                this.canDamage = true
            }
        }
    }

    die() {
        if (this.visible) {
            this.parentScene.sound.play('hit')
            this.visible = false
            this.inventory.setHealth(0)
            this.UILayer.setHealth(this.inventory.health)
            const emit = this.emitter.createEmitter(
                {
                    scale: .2,
                    speed: 50,
                    x: this.x,
                    y: this.y,
                    lifespan: 500,
                    emitZone: { type: 'random', source: new Phaser.Geom.Circle(0, 0, 20) }
                })
            setTimeout(
                () => {
                    emit.stop()
                    setTimeout(() => {
                        this.UILayer.setLives((--this.inventory.lives).toString())
                        this.reset()
                        this.visible = true
                    }, 500)
                },
                200)

        }
    }

    addJumpTween() {
        this.jumpTweens.start = this.parentScene.add.tween({ targets: this, scaleY: .6, duration: 100 })
        this.jumpTweens.middle = this.parentScene.add.tween({ targets: this, scaleY: 1.1, scaleX: .9, duration: 400, yoyo: true, ease: 'Cubic.easeOut' })

        this.jumpTweens.start.on('complete', () => {
            this.jumpTweens.middle.play()
            this.setVelocityY(-300)
            if (!this.canDamage) this.setVelocity(this.body.velocity.y - 150)
            this.parentScene.sound.play('jump')
        })

    }

}