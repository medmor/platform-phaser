import Platforms from "../world/platforms"
import MovingPlatforms from '../world/movingPlatforms'
import Player from "../characters/player"



export default class extends Phaser.Scene {

  platforms: Platforms
  movingPlatforms: MovingPlatforms
  lastTime = 0
  player: Player

  constructor(){
    super('scene2')
  }

  init(){
    this.lastTime = this.time.now
    this.game.scene.start('ui')    
  }

  preload(){
  }

  create(){
    this.platforms = new Platforms(this.physics.world, this)
    this.platforms.scene2(this)

    this.movingPlatforms = new MovingPlatforms(this.physics.world, this)
    this.movingPlatforms.scene2()

    this.player = new Player(this, 100, 100, 'player')
    this.player.initPhysics(this.physics)

    this.physics.add.collider(this.player, this.platforms) //platforms collision
    this.physics.add.collider(this.player, this.movingPlatforms) //platforms collision
  }

  update(elapsedTime){

    this.movingPlatforms.updateMovingPlatforms()


    this.lastTime = this.time.now
  }

}
