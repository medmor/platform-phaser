export function generateBlockThorneTexture(graphics: Phaser.GameObjects.Graphics){
  graphics.clear()

  graphics.lineStyle(2, 0xffffff)
  graphics.strokeRect(1, 1, 100, 40) //100*50
  graphics.lineStyle(2, 0xffffff)
  let x = 1.5
  graphics.moveTo(x, 42)
  for(let i = 0; i < 25; i++){
    graphics.lineTo(x+=5, i%2==0?50:42)
  }
  graphics.stroke()
  graphics.generateTexture('blockThorne', 102, 52)
  graphics.clear()
}