export default class {

  coins = 0
  health = 100
  lives = 3

  constructor(scene: Phaser.Scene){
  }

  setCoins(value: number){
    this.coins = value
  }

  setHealth(value: number){
    this.health = value
  }

  setLives(value: number){
    this.lives = value
  }

}