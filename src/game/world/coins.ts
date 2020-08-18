import player from "../characters/player"

export default class extends Phaser.Physics.Arcade.StaticGroup {


  constructor(world: Phaser.Physics.Arcade.World, scene: Phaser.Scene){
    super(world, scene)

  }

  scene1(){
    this.create(50, 400, 'coin')
    this.create(490, 400, 'coin')
    this.create(595, 350, 'coin')
    this.create(690, 300, 'coin')
    this.create(790, 350, 'coin')
    this.create(890, 400, 'coin')
    this.createMultiple({key:'coin', setXY:{x: 1000, y: 400, stepX: 100}, quantity: 7})
  }

  scene2(){
    this.create(35, 400, 'coin')
    this.create(190, 200, 'coin')
    this.create(250, 150, 'coin')
    this.create(345, 300, 'coin')
    this.create(500, 300, 'coin')
    this.create(600, 300, 'coin')
    this.create(700, 250, 'coin')
    this.create(800, 300, 'coin')
    this.create(1005, 300, 'coin')
    this.create(1200, 300, 'coin')
    this.create(1480, 450, 'coin')
    this.create(1580, 450, 'coin')
    this.create(1680, 450, 'coin')
  }

  addTween(scene: Phaser.Scene){
    scene.tweens.add({
      targets: this.getChildren(),
      scaleX: -1, // '+=100'
      ease: "Linear.easeInOut", // 'Cubic', 'Elastic', 'Bounce', 'Back'
      duration: 1500,
      repeat: -1,
    });
  }

  checkOverllap(player: player){
    for(let coin of this.getChildren()){
      if(Phaser.Geom.Intersects.RectangleToRectangle(player.getBounds(), (coin as Phaser.Physics.Arcade.Sprite).getBounds())){
        if(coin && coin.active) return coin
      }
    }
    return null
  }

}