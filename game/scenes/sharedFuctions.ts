export function onCoinTake(player, coin, Sound, UILayer, tweens){
    if(coin.active) {
      coin.active = false
      Sound.coin.play()
      player.inventory.setCoins(1)
      UILayer.setCoins(player.inventory.coins.toString())
      tweens.add({targets: coin, y: "-=200", duration: 500, ease: 'Linear'})
      .on('complete',()=>{
        coin.destroy()
        })
    }
  }