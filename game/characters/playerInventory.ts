export default class extends Phaser.GameObjects.Container {

  coins = 0
  maxHealth = 100
  health = 100

  coinsImage: Phaser.GameObjects.Image
  coinsText: Phaser.GameObjects.Text

  healthText: Phaser.GameObjects.Text
  healthBarBackground: Phaser.GameObjects.Rectangle
  healthBarForground: Phaser.GameObjects.Rectangle

  constructor(scene: Phaser.Scene){
    super(scene, 0, 0)

    this.coinsText = scene.add.text(85, 35, this.coins.toString(), {fontSize:'30px',color:'#ffffff',fontFamily: 'Arial'})

    this.coinsImage = scene.add.image(50, 50, 'coin')


    this.healthText = scene.add.text(100, 300, this.health.toString())

    this.healthBarBackground = scene.add.rectangle(500, 100, 200, 50, 0xff0000)
    this.healthBarForground = scene.add.rectangle(500, 100, 200, 50, 0xffffff)
  }

  setCoins(value: number){
    this.coins += value
    this.coinsText.setText(this.coins.toString())
  }

  setHealth(value: number){
    this.health += value
    this.healthBarForground.width = (this.health / this.maxHealth) * this.healthBarBackground.width
  }
}