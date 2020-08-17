import levelBase from "./levelBase"

export default class extends levelBase {


  constructor(){
    super('scene2')
  }

  init(){
    super.init()
  }

  preload(){
  }

  create(){
    super.create()
    this.platforms.scene2(this)

    this.movingPlatforms.scene2()

    this.thornes.scene2()

    this.coins.scene2()
    this.coins.addTween(this)

    this.door = this.add.image(1800, 424, 'door').getBounds()

  }

  update(elapsedTime){
    super.update(elapsedTime)
    if(this.door.contains(this.player.x, this.player.y)){
      this.scene.start('win')
    }
  }

}
