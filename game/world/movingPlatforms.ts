export default class extends Phaser.Physics.Arcade.Group {

  limits: Limits[] = []
  

  constructor(world: Phaser.Physics.Arcade.World, scene: Phaser.Scene){
    super(world, scene)
  }


  scene2(){
    this.limits.push(new Limits(this.create(150, 424, 'block3'), 150, 150, 424, 300, 0, 50))
  }

  updateMovingPlatforms(){
    for(let platform of this.limits){
      if(platform.target.x < platform.minX) {
        platform.target.setVelocityX(Math.sqrt(Math.pow(platform.velocityX, 2)))
      }
      if(platform.target.x > platform.maxX) {
        platform.target.setVelocityX(-Math.sqrt(Math.pow(platform.velocityX, 2)))
      }
      if(platform.target.y < platform.minY) {
        platform.target.setVelocityY(Math.sqrt(Math.pow(platform.velocityY, 2)))
      }
      if(platform.target.y > platform.maxY) {
        platform.target.setVelocityY(-Math.sqrt(Math.pow(platform.velocityY, 2)))
      }
    }
  }
}

class Limits{
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