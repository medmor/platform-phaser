import Sound from "../utils/sound"
import PlayerInventory from './playerInventory'
import UI from '../scenes/others/ui'


export default class extends Phaser.Physics.Arcade.Sprite{

  startX: number;
  startY: number;
  emitter: Phaser.GameObjects.Particles.ParticleEmitterManager
  inventory : PlayerInventory
  UILayer: UI

  canDamage = true

  constructor(scene: Phaser.Scene, x: number, y: number, texture: string | Phaser.Textures.Texture, frame?: string | number){
    
    super(scene, x, y, texture, frame)

    this.startX = x
    this.startY = y

    scene.add.existing(this)

    this.initPhysics(scene.physics)

    this.emitter = scene.add.particles('player')

    this.inventory = new PlayerInventory(scene)
    this.UILayer = <UI> scene.scene.get('ui')
  }

  initPhysics(physics: Phaser.Physics.Arcade.ArcadePhysics){
    physics.add.existing(this)
    this.setCollideWorldBounds(true)
    this.setBounce(0.2)
    this.setGravity(0, 500)
    //this.setCircle(25)
  }

  move(inputX, inputY, deltatime: number){
    
    if(this.body.touching.down){
      if(inputX !== 0) this.setVelocityX(inputX * deltatime )

      if(inputY !== 0) {
        this.setVelocityY(inputY * deltatime)
        if(!this.canDamage)this.setVelocity(this.body.velocity.y - 300)
        Sound.jump.play()
      }

      this.setVelocityX(this.body.velocity.x * .89)

    }else{

      this.setVelocityX(this.body.velocity.x * .985)
    }

    if(this.y > 550){
      this.die()
    }
  }

  reset(){
    this.x = this.startX
    this.y = this.startY
    this.inventory.setHealth(100)
    this.UILayer.setHealth(100)
    this.canDamage = true
  }

  onCoinTake(){
    Sound.coin.play()
    this.inventory.setCoins(this.inventory.coins+1)
    this.UILayer.setCoins(this.inventory.coins.toString())
  }

  thorneDamage(){
    
    if(this.canDamage){
      Sound.hit.play()
      this.canDamage = false
      this.setVelocity(-200)
      if(this.inventory.health < 11){
        this.inventory.setHealth(0)
        this.UILayer.setHealth(this.inventory.health)
        this.die()
      }else{
        this.inventory.setHealth(this.inventory.health-10)
        this.UILayer.setHealth(this.inventory.health)
        setTimeout(()=>{this.canDamage = true}, 500)
      }
    
    }
  }

  blockThorneDamage(player: this, block: Phaser.Physics.Arcade.Sprite){
    if(this.canDamage && block.body.touching.down){
      Sound.hit.play()
      this.canDamage = false
      //this.setVelocity(-200)
      if(this.inventory.health < 11){
        this.inventory.setHealth(0)
        this.UILayer.setHealth(this.inventory.health)
        this.die()
      }else{
        this.inventory.setHealth(this.inventory.health-10)
        this.UILayer.setHealth(this.inventory.health)
        this.canDamage = true
      }
    
    }
  }

  die(){
    if(this.visible){
      Sound.hit.play()
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
        ()=> {
          emit.stop()
          setTimeout(()=>{
            this.UILayer.setLives((--this.inventory.lives).toString())
            this.reset()
            this.visible = true
          },500)
        },
        200)

    }
  }

}