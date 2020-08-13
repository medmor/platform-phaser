export default class extends Phaser.Physics.Arcade.StaticGroup {


  constructor(world: Phaser.Physics.Arcade.World, scene: Phaser.Scene){
    super(world, scene)

    this.create(50, 400, 'coin')
    this.create(490, 400, 'coin')
    this.create(595, 350, 'coin')
    this.create(690, 300, 'coin')
    this.create(790, 350, 'coin')
    this.create(890, 400, 'coin')

    const t = scene.tweens.add({
      targets: this.getChildren(),
      scaleX: -1, // '+=100'
      ease: "Linear.easeInOut", // 'Cubic', 'Elastic', 'Bounce', 'Back'
      duration: 1500,
      repeat: -1,
    });

    

  }

}