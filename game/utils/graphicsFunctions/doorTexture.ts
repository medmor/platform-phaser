export function generateDoorTexture(graphics: Phaser.GameObjects.Graphics){
  graphics.clear()
  graphics.lineStyle(2, 0xffffff)
  graphics.moveTo(1, 150)
  graphics.lineTo(1, 51)
  graphics.arc(51, 51, 50, 0, Math.PI, true)
  graphics.moveTo(101, 51)
  graphics.lineTo(101, 150)
  graphics.lineTo(1, 150)
  graphics.stroke()
  graphics.generateTexture('door', 102, 152)
  graphics.clear()
}