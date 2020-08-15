import Platforms from "../world/platforms"


export default class extends Phaser.Scene {

  platforms: Platforms
  lastTime = 0

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
    this.platforms.scene2()
  }

  update(elapsedTime){


    this.lastTime = this.time.now
  }

}
