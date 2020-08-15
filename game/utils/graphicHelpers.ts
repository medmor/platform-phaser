
export function generateGameTextures(graphics){
    generatePlayerTexture(graphics)
    generateGroundTexture(graphics)
    generateBlocksTexture(graphics)
    generateThornesTexture(graphics)
    generateCoinsTexture(graphics)
    generateDoorTexture(graphics)
    generateBlockThornsTextures(graphics)
}

export function generatePlayerTexture(graphics: Phaser.GameObjects.Graphics){
  graphics.clear()
  graphics.lineStyle(2, 0xffffff)
  graphics.strokeRect(1, 1, 50, 50)
  graphics.generateTexture('player', 52, 52)
  graphics.clear()
}

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

export function generateBlocksTexture(graphics: Phaser.GameObjects.Graphics){

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
  graphics.strokeRect(1, 1, 100, 50)  //100*100
  graphics.generateTexture('block3', 102, 52)
  graphics.clear()

  graphics.lineStyle(2, 0xffffff)
  graphics.strokeRect(1, 1, 150, 150) //150*150
  graphics.generateTexture('block4', 152, 152)
  graphics.clear()
}

export function generateThornesTexture(graphics: Phaser.GameObjects.Graphics){
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

export function generateBlockThornsTextures(graphics: Phaser.GameObjects.Graphics){
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

export function generateCoinsTexture(graphics: Phaser.GameObjects.Graphics){
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

function drawStar(cx, cy, spikes, outerRadius, innerRadius, graphics: Phaser.GameObjects.Graphics) {
    var rot = Math.PI / 2 * 3;
    var x = cx;
    var y = cy;
    var step = Math.PI / spikes;

    graphics.moveTo(cx, cy - outerRadius)
    for (let i = 0; i < spikes; i++) {
        x = cx + Math.cos(rot) * outerRadius;
        y = cy + Math.sin(rot) * outerRadius;
        graphics.lineTo(x, y)
        rot += step

        x = cx + Math.cos(rot) * innerRadius;
        y = cy + Math.sin(rot) * innerRadius;
        graphics.lineTo(x, y)
        rot += step
    }
    graphics.lineTo(cx, cy - outerRadius)
    graphics.stroke();

}

