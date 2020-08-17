
const textStyle = {fontSize:'30px',color:'#ffffff',fontFamily: 'Arial'}

export default class extends Phaser.Scene {

  playerInventory: Phaser.GameObjects.Group

  coinsImage: Phaser.GameObjects.Image
  coinsText: Phaser.GameObjects.Text

  livesImage: Phaser.GameObjects.Image
  livesText: Phaser.GameObjects.Text

  healthText: Phaser.GameObjects.Text
  healthBarBackground: Phaser.GameObjects.Rectangle
  healthBarForground: Phaser.GameObjects.Rectangle

  constructor(){
    super('ui')
  }


  create(){

    this.coinsText = this.add.text(85, 35, '0', textStyle)
    this.coinsImage = this.add.image(50, 50, 'coin')

    this.livesText = this.add.text(195, 35, '3', textStyle)
    this.livesImage = this.add.image(160, 35, 'heart').setScale(.85, 1)


    this.healthText = this.add.text(525, 35, '100', textStyle)

    this.healthBarBackground = this.add.rectangle(680, 50, 200, 30, 0xff0000)
    this.healthBarForground = this.add.rectangle(680, 50, 200, 30, 0xffffff)

    this.playerInventory = this.add.group()
    this.playerInventory.addMultiple([this.coinsImage, this.coinsText, this.livesText, this.livesImage, this.healthText, this.healthBarBackground, this.healthBarForground])
  }

  togglePlayerInventory(){
    this.playerInventory.toggleVisible()
  }

  setCoins(value: string){
    this.coinsText.setText(value)
  }

  setLives(value: string){
    this.livesText.setText(value)
  }

  setHealth(value: number){
    this.healthText.setText(value.toString())
    if(value <= 0) this.healthBarForground.width = 0
    else this.healthBarForground.width = (value / 100) * this.healthBarBackground.width
  }
}