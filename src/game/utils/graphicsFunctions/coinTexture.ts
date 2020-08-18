import { drawStar } from './drawStar'

export function generateCoinTexture(graphics: Phaser.GameObjects.Graphics){
  graphics.clear()
  graphics.lineStyle(4, 0xCFB53B)
  drawStar(21, 21, 5, 12, 9, graphics)
  graphics.lineStyle(2, 0xCFB53B)
  graphics.strokeCircle(21,21,1)
  graphics.strokeCircle(21, 21, 20)
  graphics.save()
  graphics.generateTexture('coin', 42, 42)
  graphics.clear()
}