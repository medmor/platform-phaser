export function generateHeartTexture(fromx, fromy, tox, toy, lw, hlen, color, graphics: Phaser.GameObjects .Graphics) {
  graphics.clear()
  var x = fromx;
  var y = fromy;
  var width = lw ;
  var height = hlen;

  //ctx.save();
  //ctx.beginPath();
  var topCurveHeight = height * 0.3;
  graphics.moveTo(x, y + topCurveHeight);
  // top left curve
  graphics.arc(
    x, y, 
    x - width / 2, y, 
    x - width / 2, y + topCurveHeight
  );

  // bottom left curve
  graphics.arc(
    x - width / 2, y + (height + topCurveHeight) / 2, 
    x, y + (height + topCurveHeight) / 2, 
    x, y + height
  );

  // bottom right curve
  graphics.arc(
    x, y + (height + topCurveHeight) / 2, 
    x + width / 2, y + (height + topCurveHeight) / 2, 
    x + width / 2, y + topCurveHeight
  );

  // top right curve
  graphics.arc(
    x + width / 2, y, 
    x, y, 
    x, y + topCurveHeight
  );

  //ctx.closePath();
  //ctx.fillStyle = color;
  //ctx.fill();
  //ctx.restore();
  graphics.stroke()
  graphics.generateTexture('heart', 102, 152)
  graphics.clear()

}