export function generateThorneTexture(graphics: Phaser.GameObjects.Graphics){
  let x = 1

  graphics.clear()
  graphics.lineStyle(2, 0xffffff)
  graphics.moveTo(x, 15)
  for(let i = 0; i < 8; i++){
    graphics.lineTo(x+=5, i%2==0?0:15)
  }
  graphics.stroke()
  graphics.generateTexture('thorne', 52, 17)
  graphics.clear()
}