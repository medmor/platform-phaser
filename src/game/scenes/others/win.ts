
export default class extends Phaser.Scene {

  winText: Phaser.GameObjects.Text = null

  constructor(){
    super('win')
  }

  create(){
    this.winText = this.add.text(400, 300, 'You win', {fontSize:'80px',color:'#ff0000',fontFamily: 'Arial'})
    .setOrigin(.5)
  }

}