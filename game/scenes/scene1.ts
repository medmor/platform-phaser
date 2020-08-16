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
    this.platforms.scene1()

    this.thornes = new Thornes(this.physics.world, this)
    this.thornes.scene1()

    this.coins = new Coins(this.physics.world, this)
    this.coins.scene1()
    this.coins.addTween(this)

    this.door = this.add.image(1800, 424, 'door').getBounds()


    this.player = new Player(this, 50, 300, 'player')
    this.player.initPhysics(this.physics)
    this.cameras.main.startFollow(this.player);


    this.physics.add.collider(this.player, this.platforms) //platforms collision
    this.physics.add.collider(this.player, this.thornes,()=>{ //thornes collision
      this.player.thorneDamage()
    })
    //this.physics.add.overlap(this.player, this.coins, this.onCoinTake, undefined, this) //coins collision


  }

  update(elapsedTime){
    if(this.player.visible) this.player.move(this.inputs.horizontale(), this.inputs.verticale(), elapsedTime - this.lastTime)

    if(this.door.contains(this.player.x, this.player.y)){
      this.scene.start('scene2')
    }

    const coin = this.coins.checkOverllap(this.player)
    if(coin) this.onCoinTake(coin)


    this.lastTime = this.time.now
  }

  onCoinTake(coin){
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
