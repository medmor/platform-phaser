import Player from "../characters/player"
import Platforms from "../world/platforms"
import Thornes from '../world/thornes'
import Coins from '../world/coins'
import Inputs from "../utils/inputs"
import Sound from "../utils/sound"

//import {onCoinTake} from './sharedFunctions'

export default class extends Phaser.Scene {

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
    this.lastTime = this.time.now
    this.cameras.main.setBounds(0, 0, 1920, 600);
    this.physics.world.setBounds(0, 0, 1920, 600, true, true, false, false);
    this.game.scene.start('ui')
  }

  preload(){
  }

  create(){
    Sound.music.play()
    this.inputs = new Inputs(this)

    this.platforms = new Platforms(this.physics.world, this)
    this.thornes = new Thornes(this.physics.world, this)
    this.coins = new Coins(this.physics.world, this)
    this.door = this.add.image(1800, 424, 'door').getBounds()


    this.player = new Player(this, 100, 100, 'player')
    this.player.initPhysics(this.physics)


    this.physics.add.collider(this.player, this.platforms) //platforms collision
    this.physics.add.collider(this.player, this.thornes,()=>{ //thornes collision
      this.player.thorneDamage()
    })
    this.physics.add.overlap(this.player, this.coins, this.onCoinTake, undefined, this) //coins collision

    this.cameras.main.startFollow(this.player);

  }

  update(elapsedTime){
    if(this.player.visible) this.player.move(this.inputs.horizontale(), this.inputs.verticale(), elapsedTime - this.lastTime)

    if(this.door.contains(this.player.x, this.player.y)){
      this.scene.start('scene2')
    }



    this.lastTime = this.time.now
  }

  onCoinTake(player, coin){
    this.player.body.touching.down = false
    if(coin.active) {
      coin.active = false
      this.player.onCoinTake()
      this.tweens.add({targets: coin, y: "-=200", duration: 500, ease: 'Linear'})
      .on('complete',()=>{
        coin.destroy()
        })
    }
}



}
