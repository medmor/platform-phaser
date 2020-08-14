import Sound from "../utils/sound"
import PlayerInventory from './playerInventory'

export default class extends Phaser.Physics.Arcade.Sprite{

  startX: number;
  startY: number;
  emitter: Phaser.GameObjects.Particles.ParticleEmitterManager
  inventory : PlayerInventory

  constructor(scene: Phaser.Scene, x: number, y: number, texture: string | Phaser.Textures.Texture, frame?: string | number){
    
    super(scene, x, y, texture, frame)

    this.startX = x
    this.startY = y

    scene.add.existing(this)

    this.initPhysics(scene.physics)

    this.emitter = scene.add.particles('player')

    this.inventory = new PlayerInventory(scene)
  }

  initPhysics(physics: Phaser.Physics.Arcade.ArcadePhysics){
    physics.add.existing(this)
    this.setCollideWorldBounds(true)
    this.setBounce(0.2)

  }

  move(inputX, inputY, deltatime: number){
    
    if(this.body.touching.down){

      if(inputX !== 0) this.setVelocityX(inputX * deltatime )

      if(inputY !== 0) {
        this.setVelocityY(inputY * deltatime)
        Sound.jump.play()
      }

      this.setVelocityX(this.body.velocity.x * .89)

    }else{

      this.setVelocityX(this.body.velocity.x * .985)
    }

    if(this.y > 700){
      this.reset()
    }
  }

  reset(){
    this.x = this.startX
    this.y = this.startY
  }

  onThornesHit(){
    if(this.visible){
    Sound.hit.play()
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
              this.reset()
              this.visible = true
            },500)
          },
          200)
    }

    this.visible = false
  }

}