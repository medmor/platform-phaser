import Sound from "../utils/sound"

export function onCoinTake(player, coin){
  if(coin.active) {
    coin.active = false
    Sound.coin.play()
    player.inventory.setCoins(1)
    this.UILayer.setCoins(this.player.inventory.coins.toString())
    this.tweens.add({targets: coin, y: "-=200", duration: 500, ease: 'Linear'})
    .on('complete',()=>{
      coin.destroy()
      })
  }
}