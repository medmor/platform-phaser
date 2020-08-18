export function generateBlockTexture(graphics: Phaser.GameObjects.Graphics){

  graphics.clear()

  graphics.lineStyle(2, 0xffffff)
  graphics.strokeRect(1, 1, 100, 50) //100*50
  graphics.generateTexture('block1', 102, 52)
  graphics.clear()

  graphics.lineStyle(2, 0xffffff)
  graphics.strokeRect(1, 1, 100, 100) //100*100
  graphics.generateTexture('block2', 102, 102)
  graphics.clear()

  graphics.lineStyle(2, 0xffffff)
  graphics.strokeRect(1, 1, 50, 100)  //50*100
  graphics.generateTexture('block3', 52, 102)
  graphics.clear()

  graphics.lineStyle(2, 0xffffff)
  graphics.strokeRect(1, 1, 150, 150) //150*150
  graphics.generateTexture('block4', 152, 152)
  graphics.clear()

}