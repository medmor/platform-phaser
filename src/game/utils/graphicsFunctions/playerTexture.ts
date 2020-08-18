export function generatePlayerTexture(graphics: Phaser.GameObjects.Graphics){
  graphics.clear()
  graphics.lineStyle(2, 0xffffff)
  graphics.strokeRect(1, 1, 50, 50)
  graphics.generateTexture('player', 52, 52)

  graphics.clear()
  graphics.lineStyle(2, 0xffffff)
  graphics.strokeCircle(26, 26, 25)
  graphics.generateTexture('player1', 52, 52)
  graphics.clear()
}