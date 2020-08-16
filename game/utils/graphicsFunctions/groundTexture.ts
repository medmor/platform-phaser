export function generateGroundTexture(graphics: Phaser.GameObjects.Graphics){
  graphics.clear()
  
  graphics.lineStyle(2, 0xffffff)
  graphics.moveTo(1, 1)
  graphics.lineTo(200, 1)
  graphics.stroke()
  graphics.generateTexture('ground1', 200 + 2, 4)
  graphics.clear()

  graphics.lineStyle(2, 0xffffff)
  graphics.moveTo(1, 1)
  graphics.lineTo(300, 1)
  graphics.stroke()
  graphics.generateTexture('ground2', 300 + 2, 4)
  graphics.clear()

  graphics.lineStyle(2, 0xffffff)
  graphics.moveTo(1, 1)
  graphics.lineTo(400, 1)
  graphics.stroke()
  graphics.generateTexture('ground3', 400 + 2, 4)
  graphics.clear()

  graphics.lineStyle(2, 0xffffff)
  graphics.moveTo(1, 1)
  graphics.lineTo(500, 1)
  graphics.stroke()
  graphics.generateTexture('ground4', 500 + 2, 4)
  graphics.clear()
}