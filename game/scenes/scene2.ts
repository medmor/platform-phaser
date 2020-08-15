import Platforms from "../world/platforms"
import Player from "../characters/player"



export default class extends Phaser.Scene {

  platforms: Platforms
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

    this.player = new Player(this, 100, 100, 'player')
    this.player.initPhysics(this.physics)

    this.physics.add.collider(this.player, this.platforms) //platforms collision
  }

  update(elapsedTime){


    this.lastTime = this.time.now
  }

}
