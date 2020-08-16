
export default class extends Phaser.Scene {


  lastTime = 0
  winText: Phaser.GameObjects.Text = null

  constructor(){
    super('win')
  }

  init(){ }

  preload(){ }

  create(){
    this.winText = this.add.text(400, 300, 'You win', {fontSize:'80px',color:'#ff0000',fontFamily: 'Arial'})
    .setOrigin(.5)
  }

  update(elapsedTime){


    this.lastTime = this.time.now
  }

}