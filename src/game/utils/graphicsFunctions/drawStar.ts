export function drawStar(cx: number, cy: number, spikes: number, outerRadius: number, innerRadius: number, graphics: Phaser.GameObjects.Graphics) {
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
