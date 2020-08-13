import { generateGameTextures } from "./graphicHelpers"
import Inputs from "./inputs"
import Player from "./player"
import Platforms from "./platforms"
import Thornes from './thornes'
import Sound from "./sound"

export default class extends Phaser.Scene {

  graphics: Phaser.GameObjects.Graphics = null
  inputs: Inputs
  player: Player
  platforms: Platforms
  thornes: Thornes

  lastTime = 0

  init(){
    this.graphics = this.add.graphics()
    this.lastTime = this.time.now
    this.cameras.main.setBounds(0, 0, 1920 * 2, 600);
    this.physics.world.setBounds(0, 0, 1920 * 2, 600);
  }

  preload(){
    generateGameTextures(this.graphics)
  }

  create(){

    this.inputs = new Inputs(this)

    this.player = new Player(this, 100, 100, 'player')
    this.player.initPhysics(this.physics)

    this.platforms = new Platforms(this.physics.world, this)
    this.thornes = new Thornes(this.physics.world, this)


    this.physics.add.collider(this.player, this.platforms) //platforms collision
    this.physics.add.collider(this.player, this.thornes,()=>{ //thornes collixion
      this.player.onThornesHit()
    })

    this.cameras.main.startFollow(this.player);

    Sound.load()
    


  }

  update(elapsedTime){

    if(this.player.visible) this.player.move(this.inputs.horizontale(), this.inputs.verticale(), elapsedTime - this.lastTime)



    this.lastTime = this.time.now
  }

}