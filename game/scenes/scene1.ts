import { generateGameTextures } from "./graphicHelpers"
import Player from "../player"
import Platforms from "../world/platforms"
import Thornes from '../world/thornes'
import Coins from '../world/coins'
import Inputs from "../utils/inputs"
import Sound from "./utils/sound"

export default class extends Phaser.Scene {

  graphics: Phaser.GameObjects.Graphics = null
  inputs: Inputs
  player: Player
  platforms: Platforms
  thornes: Thornes
  coins: Coins
  door: Phaser.Geom.Rectangle

  lastTime = 0

  constructor(){
    super('scene1')
  }

  init(){
    this.graphics = this.add.graphics()
    this.lastTime = this.time.now
    this.cameras.main.setBounds(0, 0, 1920, 600);
    this.physics.world.setBounds(0, 0, 1920, 600, true, true, false, false);
  }

  preload(){
    Sound.load()
    generateGameTextures(this.graphics)
  }

  create(){

    this.inputs = new Inputs(this)

    this.platforms = new Platforms(this.physics.world, this)
    this.thornes = new Thornes(this.physics.world, this)
    this.coins = new Coins(this.physics.world, this)
    this.door = this.add.image(1800, 424, 'door').getBounds()


    this.player = new Player(this, 100, 100, 'player')
    this.player.initPhysics(this.physics)


    this.physics.add.collider(this.player, this.platforms) //platforms collision
    this.physics.add.collider(this.player, this.thornes,()=>{ //thornes collision
      this.player.onThornesHit()
    })
    this.physics.add.overlap(this.player, this.coins, (player, coin)=>{ //coin collision
      if(coin.active) Sound.coin.play()
      coin.active = false
      this.tweens.add({targets: coin, y: "-=200", duration: 500, ease: 'Linear'})
      .on('complete',()=>{
        coin.destroy()
        })
    }, undefined, this)

    this.cameras.main.startFollow(this.player);

  }

  update(elapsedTime){

    if(this.player.visible) this.player.move(this.inputs.horizontale(), this.inputs.verticale(), elapsedTime - this.lastTime)

    if(this.door.contains(this.player.x, this.player.y)){
      this.scene.start('scene2')
    }



    this.lastTime = this.time.now
  }

}
