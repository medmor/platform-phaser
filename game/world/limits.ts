export default class {
  constructor(
    public target: Phaser.Physics.Arcade.Sprite,
    public maxX: number,
    public minX: number,
    public maxY: number,
    public minY: number,
    public velocityX: number,
    public velocityY: number)
    {
      this.target.setX(this.maxX)
      this.target.setY(this.maxY)
      
      this.target.setImmovable(true)

      this.target.setVelocityX(this.velocityX)
      this.target.setVelocityY(this.velocityY)
    }

}
