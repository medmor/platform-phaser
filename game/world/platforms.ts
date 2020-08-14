export default class extends Phaser.Physics.Arcade.StaticGroup {


  constructor(world: Phaser.Physics.Arcade.World, scene: Phaser.Scene){
    super(world, scene)

    this.create(250, 500, 'ground')
    this.create(800, 500, 'ground')
    this.create(1400, 500, 'ground')
    this.create(1800, 500, 'ground')


    this.create(500, 474, 'block1')
    this.create(600, 449, 'block2')
    this.create(780, 449, 'block2')
    this.create(880, 474, 'block1')
    
  }
}