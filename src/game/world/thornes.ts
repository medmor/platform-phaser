
export default class extends Phaser.Physics.Arcade.StaticGroup {


  constructor(world: Phaser.Physics.Arcade.World, scene: Phaser.Scene){
    super(world, scene)

    

  }

  scene1(){
    this.create(700, 492, 'thorne')
  }

  scene2(){
    this.create(930, 492, 'thorne')
    this.create(1080, 492, 'thorne')
  }

}