export default class {
  constructor(
    public target: Phaser.Physics.Arcade.Sprite,
    public minX: number,
    public maxX: number,
    public minY: number,
    public maxY: number,
    public velocityX: number,
    public velocityY: number)
    {
      this.target.setX(this.minX)
      this.target.setY(this.minY)
      
      this.target.setImmovable(true)

      this.target.setVelocityX(this.velocityX)
      this.target.setVelocityY(this.velocityY)

      this.target.setFriction(1)
    }

}
