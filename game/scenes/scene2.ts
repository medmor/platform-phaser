import Platforms from "../world/platforms"
import MovingPlatforms from '../world/movingPlatforms'
import Thornes from '../world/thornes'
import Player from "../characters/player"
import Inputs from "../utils/inputs"
import Coins from '../world/coins'



export default class extends Phaser.Scene {

  platforms: Platforms
  movingPlatforms: MovingPlatforms
  lastTime = 0
  player: Player
  inputs: Inputs
  coins: Coins
  thornes: Thornes
  door: Phaser.Geom.Rectangle

  constructor(){
    super('scene2')
  }

  init(){
    this.lastTime = this.time.now
    this.cameras.main.setBounds(0, 0, 1920, 600);
    this.physics.world.setBounds(0, 0, 1920, 600, true, true, false, false);
  }

  preload(){
  }

  create(){
    this.platforms = new Platforms(this.physics.world, this)
    this.platforms.scene2(this)

    this.movingPlatforms = new MovingPlatforms(this.physics.world, this)
    this.movingPlatforms.scene2()

    this.thornes = new Thornes(this.physics.world, this)
    this.thornes.scene2()

    this.coins = new Coins(this.physics.world, this)
    this.coins.scene2()
    this.coins.addTween(this)

    this.door = this.add.image(1800, 424, 'door').getBounds()

    this.inputs = new Inputs(this)

    this.player = new Player(this, 50, 300, 'player')
    this.player.initPhysics(this.physics)
    this.cameras.main.startFollow(this.player);

    this.physics.add.collider(this.player, this.platforms)
    this.physics.add.collider(this.player, this.movingPlatforms, this.player.blockThorneDamage, undefined, this.player)
    this.physics.add.collider(this.player, this.thornes,()=>{ //thornes collision
      this.player.thorneDamage()
    })
  }

  update(elapsedTime){

    this.movingPlatforms.updateMovingPlatforms()

    if(this.player.visible) this.player.move(this.inputs.horizontale(), this.inputs.verticale(), elapsedTime - this.lastTime)

    let coin = this.coins.checkOverllap(this.player)
    if(coin) this.onCoinTake(coin)

    if(this.door.contains(this.player.x, this.player.y)){
      this.scene.start('win')
    }

    this.lastTime = this.time.now
  }

  onCoinTake( coin){
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
