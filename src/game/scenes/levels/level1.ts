import LevelBase from './levelBase'

export default class extends LevelBase {

  constructor(){
    super('scene1')
  }

  init(){
    super.init(undefined);
    (this.scene.get('ui') as any).togglePlayerInventory()
  }

  preload(){
  }

  create(){
    super.create()
    this.soundManager.music.play()

    this.platforms.scene1()

    this.thornes.scene1()

    this.coins.scene1()
    this.coins.addTween(this)

    this.door = this.add.image(1800, 424, 'door').getBounds()

  }

  update(elapsedTime:number){
    super.update(elapsedTime)
    if(this.door.contains(this.player.x, this.player.y)){
      this.scene.start('scene2', {playerInventory: this.player.inventory})
    }
  }


}
