export default class extends Phaser.Physics.Arcade.StaticGroup {


  constructor(world: Phaser.Physics.Arcade.World, scene: Phaser.Scene){
    super(world, scene)
  }

  scene1(){
    this.create(250, 500, 'ground')
    this.create(800, 500, 'ground')
    this.create(1400, 500, 'ground')
    this.create(1800, 500, 'ground')


    this.create(500, 474, 'block1')
    this.create(600, 449, 'block2')
    this.create(780, 449, 'block2')
    this.create(880, 474, 'block1')
  }

  scene2(scene: Phaser.Scene){
    this.create(150, 500, 'ground2')
    this.create(300, 424, 'block4')
    this.create(500, 300, 'block3')

    scene.tweens.add({targets: [this.create(150, 424, 'block3')], y: '-=100', duration: 1000, repeat: -1, yoyo: true })
    
  }
}