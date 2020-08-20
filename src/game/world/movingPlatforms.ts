import Limits from './limits'

export default class extends Phaser.Physics.Arcade.Group {

  limits: Limits[] = []
  

  constructor(world: Phaser.Physics.Arcade.World, scene: Phaser.Scene){
    super(world, scene)
    
  }


  scene2(){
    this.limits.push(new Limits(this.create(0, 0, 'blockThorne'), 190, 0, 300, 420, 0, 50))
    this.limits.push(new Limits(this.create(0, 0, 'blockThorne'), 525, 600, 381, 0, 30, 0))
    }

    scene3() {
        this.limits.push(new Limits(this.create(0, 0, 'blockThorne'), 250, 450, 274, 0, 30, 0))
        this.limits.push(new Limits(this.create(0, 0, 'blockThorne'), 1000, 0, 274, 400, 0, 30))
        this.limits.push(new Limits(this.create(0, 0, 'blockThorne'), 1400, 0, 274, 400, 0, 30))
        this.limits.push(new Limits(this.create(0, 0, 'blockThorne'), 1500, 1750, 274, 0, 40, 0))
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

