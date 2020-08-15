import Platforms from "../world/platforms"
import MovingPlatforms from '../world/movingPlatforms'
import Player from "../characters/player"
import Inputs from "../utils/inputs"



export default class extends Phaser.Scene {

  platforms: Platforms
  movingPlatforms: MovingPlatforms
  lastTime = 0
  player: Player
  inputs: Inputs
  constructor(){
    super('scene2')
  }

  init(){
    this.lastTime = this.time.now
    this.cameras.main.setBounds(0, 0, 1920, 600);
    this.physics.world.setBounds(0, 0, 1920, 600, true, true, false, false);
    this.game.scene.start('ui')    
  }

  preload(){
  }

  create(){
    this.platforms = new Platforms(this.physics.world, this)
    this.platforms.scene2(this)

    this.movingPlatforms = new MovingPlatforms(this.physics.world, this)
    this.movingPlatforms.scene2()

    this.inputs = new Inputs(this)

    this.player = new Player(this, 100, 100, 'player')
    this.player.initPhysics(this.physics)

    this.physics.add.collider(this.player, this.platforms)
    this.physics.add.collider(this.player, this.movingPlatforms, this.player.blockThorneDamage, undefined, this.player)
  }

  update(elapsedTime){

    this.movingPlatforms.updateMovingPlatforms()

    if(this.player.visible) this.player.move(this.inputs.horizontale(), this.inputs.verticale(), elapsedTime - this.lastTime)


    this.lastTime = this.time.now
  }

}
